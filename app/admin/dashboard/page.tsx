"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import BlogTab from "@/app/components/admin/BlogTab";
import LocationsTab from "@/app/components/admin/LocationsTab";
import SeoTab from "@/app/components/admin/SeoTab";

type Tab =
  | "overview"
  | "homepage"
  | "media"
  | "locations"
  | "leads"
  | "blog"
  | "seo"
  | "settings";

type ContentItem = {
  key: string;
  value: string;
};

type Lead = {
  id: number;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  customer_type: string;
  message: string;
  created_at: string;
  status: string | null;
  admin_note: string | null;
};

type MediaFile = {
  name: string;
  url: string;
  path: string;
};

export default function Dashboard() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [heroEyebrow, setHeroEyebrow] = useState("");
  const [primaryCta, setPrimaryCta] = useState("");
  const [secondaryCta, setSecondaryCta] = useState("");

  const [leads, setLeads] = useState<Lead[]>([]);
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imagePicker, setImagePicker] = useState<((url: string) => void) | null>(
    null
  );

  useEffect(() => {
    async function init() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/admin/login");
        return;
      }

      setEmail(data.user.email ?? null);

      await loadContent();
      await loadLeads();
      await loadMedia();

      setLoading(false);
    }

    init();
  }, [router]);

  async function loadContent() {
    const { data } = await supabase
      .from("site_content")
      .select("key, value")
      .in("key", [
        "homepage_hero_title",
        "homepage_hero_subtitle",
        "homepage_hero_image",
        "homepage_hero_eyebrow",
        "homepage_primary_cta",
        "homepage_secondary_cta",
      ]);

    const items = (data ?? []) as ContentItem[];

    setHeroTitle(
      items.find((item) => item.key === "homepage_hero_title")?.value ?? ""
    );

    setHeroSubtitle(
      items.find((item) => item.key === "homepage_hero_subtitle")?.value ?? ""
    );

    setHeroImage(
      items.find((item) => item.key === "homepage_hero_image")?.value ?? ""
    );
    setHeroEyebrow(
      items.find((item) => item.key === "homepage_hero_eyebrow")?.value ?? ""
    );
    setPrimaryCta(
      items.find((item) => item.key === "homepage_primary_cta")?.value ?? ""
    );
    setSecondaryCta(
      items.find((item) => item.key === "homepage_secondary_cta")?.value ?? ""
    );
  }

  async function loadLeads() {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setMessage("Leads konnten nicht geladen werden.");
      return;
    }

    setLeads((data ?? []) as Lead[]);
  }

  async function loadMedia() {
    const { data, error } = await supabase.storage
      .from("media")
      .list("homepage", {
        limit: 100,
        sortBy: { column: "created_at", order: "desc" },
      });

    if (error) {
      setMessage("Bilder konnten nicht geladen werden.");
      return;
    }

    const files =
      data?.map((file) => {
        const path = `homepage/${file.name}`;
        const publicUrl = supabase.storage.from("media").getPublicUrl(path);

        return {
          name: file.name,
          path,
          url: publicUrl.data.publicUrl,
        };
      }) ?? [];

    setMediaFiles(files);
  }

  async function saveContent() {
    setSaving(true);
    setMessage("");

    const updates = [
      {
        key: "homepage_hero_title",
        value: heroTitle,
        updated_at: new Date().toISOString(),
      },
      {
        key: "homepage_hero_subtitle",
        value: heroSubtitle,
        updated_at: new Date().toISOString(),
      },
      {
        key: "homepage_hero_image",
        value: heroImage,
        updated_at: new Date().toISOString(),
      },
      {
        key: "homepage_hero_eyebrow",
        value: heroEyebrow,
        updated_at: new Date().toISOString(),
      },
      {
        key: "homepage_primary_cta",
        value: primaryCta,
        updated_at: new Date().toISOString(),
      },
      {
        key: "homepage_secondary_cta",
        value: secondaryCta,
        updated_at: new Date().toISOString(),
      },
    ];

    const { error } = await supabase
      .from("site_content")
      .upsert(updates, { onConflict: "key" });

    setSaving(false);

    if (error) {
      setMessage("Fehler beim Speichern.");
      return;
    }

    setMessage("Inhalte gespeichert.");
  }

  async function uploadImage(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    setUploading(true);
    setMessage("");

    const fileExt = file.name.split(".").pop();
    const fileName = `hero-${Date.now()}.${fileExt}`;
    const filePath = `homepage/${fileName}`;

    const { error } = await supabase.storage
      .from("media")
      .upload(filePath, file);

    if (error) {
      setUploading(false);
      setMessage("Bild konnte nicht hochgeladen werden.");
      return;
    }

    const { data } = supabase.storage.from("media").getPublicUrl(filePath);

    if (imagePicker) {
      imagePicker(data.publicUrl);
      setImagePicker(null);
    } else {
      setHeroImage(data.publicUrl);
    }

    setUploading(false);
    setMessage("Bild hochgeladen. Du kannst es jetzt speichern oder nutzen.");

    await loadMedia();
  }

  async function deleteImage(path: string) {
    const confirmed = confirm("Bild wirklich löschen?");

    if (!confirmed) return;

    const { error } = await supabase.storage.from("media").remove([path]);

    if (error) {
      setMessage("Bild konnte nicht gelöscht werden.");
      return;
    }

    setMediaFiles((current) => current.filter((file) => file.path !== path));
    setMessage("Bild gelöscht.");
  }

  async function copyUrl(url: string) {
    await navigator.clipboard.writeText(url);
    setMessage("Bild-URL kopiert.");
  }

  function pickImage(url: string) {
    if (imagePicker) {
      imagePicker(url);
      setImagePicker(null);
      setMessage("Bild wurde eingefügt.");
      return;
    }

    setHeroImage(url);
    setActiveTab("homepage");
    setMessage("Bild als Hero-Bild ausgewählt.");
  }

  async function updateLeadStatus(id: number, status: string) {
    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id);

    if (error) {
      setMessage("Status konnte nicht gespeichert werden.");
      return;
    }

    setLeads((current) =>
      current.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );

    setMessage("Lead Status gespeichert.");
  }

  async function updateLeadNote(id: number, admin_note: string) {
    const { error } = await supabase
      .from("leads")
      .update({ admin_note })
      .eq("id", id);

    if (error) {
      setMessage("Notiz konnte nicht gespeichert werden.");
      return;
    }

    setLeads((current) =>
      current.map((lead) =>
        lead.id === id ? { ...lead, admin_note } : lead
      )
    );

    setMessage("Notiz gespeichert.");
  }

  async function deleteLead(id: number) {
    const confirmed = confirm("Lead wirklich löschen?");

    if (!confirmed) return;

    const { error } = await supabase.from("leads").delete().eq("id", id);

    if (error) {
      setMessage("Lead konnte nicht gelöscht werden.");
      return;
    }

    setLeads((current) => current.filter((lead) => lead.id !== id));
    setMessage("Lead gelöscht.");
  }

  async function logout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleString("de-DE", {
      dateStyle: "short",
      timeStyle: "short",
    });
  }

  function phoneDigits(phone: string | null) {
    return (phone || "").replace(/[^0-9]/g, "");
  }

  function statusClass(status: string | null) {
    if (status === "kontaktiert") return "bg-yellow-100 text-yellow-800";
    if (status === "erledigt") return "bg-green-100 text-green-800";
    return "bg-blue-100 text-blue-800";
  }

  const newLeadsCount = leads.filter(
    (lead) => !lead.status || lead.status === "neu"
  ).length;

  const contactedLeadsCount = leads.filter(
    (lead) => lead.status === "kontaktiert"
  ).length;

  const doneLeadsCount = leads.filter(
    (lead) => lead.status === "erledigt"
  ).length;

  const navItems: { label: string; value: Tab }[] = [
    { label: "Übersicht", value: "overview" },
    { label: "Startseite", value: "homepage" },
    { label: "Bilder", value: "media" },
    { label: "Standorte", value: "locations" },
    { label: "Leads", value: "leads" },
    { label: "Blog", value: "blog" },
    { label: "SEO", value: "seo" },
    { label: "Einstellungen", value: "settings" },
  ];

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p>Lade Dashboard...</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen bg-slate-100 text-slate-950">
      <aside className="w-72 bg-slate-950 p-6 text-white">
        <h2 className="text-2xl font-black">DokTV Admin</h2>

        <nav className="mt-10 space-y-3 text-sm font-semibold">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setActiveTab(item.value)}
              className={`w-full rounded-xl px-4 py-3 text-left transition ${
                activeTab === item.value
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={logout}
          className="mt-10 w-full rounded-xl bg-red-600 px-5 py-3 font-bold text-white hover:bg-red-500"
        >
          Logout
        </button>
      </aside>

      <section className="flex-1 p-10">
        <p className="text-sm font-semibold text-blue-600">
          Eingeloggt als {email}
        </p>

        <h1 className="mt-2 text-4xl font-black">DokTV Dashboard</h1>

        {message && (
          <div className="mt-8 rounded-xl bg-white p-5 font-semibold shadow-sm">
            {message}
          </div>
        )}

        {activeTab === "overview" && (
          <div className="mt-10">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-slate-500">
                  Leads gesamt
                </p>
                <p className="mt-2 text-4xl font-black">{leads.length}</p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-slate-500">Neu</p>
                <p className="mt-2 text-4xl font-black text-blue-600">
                  {newLeadsCount}
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-slate-500">
                  Kontaktiert
                </p>
                <p className="mt-2 text-4xl font-black text-yellow-600">
                  {contactedLeadsCount}
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-slate-500">Erledigt</p>
                <p className="mt-2 text-4xl font-black text-green-600">
                  {doneLeadsCount}
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black">Letzte Anfragen</h2>

              <div className="mt-6 space-y-4">
                {leads.slice(0, 3).map((lead) => (
                  <div
                    key={lead.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-black">{lead.name}</h3>
                        <p className="text-sm text-slate-500">
                          {formatDate(lead.created_at)}
                        </p>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${statusClass(
                          lead.status
                        )}`}
                      >
                        {lead.status || "neu"}
                      </span>
                    </div>
                  </div>
                ))}

                {leads.length === 0 && (
                  <p className="text-slate-500">Noch keine Leads vorhanden.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === "homepage" && (
          <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">Startseite bearbeiten</h2>

            <div className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block font-bold">Eyebrow / Badge</label>
                <input
                  value={heroEyebrow}
                  onChange={(e) => setHeroEyebrow(e.target.value)}
                  placeholder="Digital Signage für Apotheken, Praxen & Hersteller"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold">Überschrift</label>
                <input
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold">Beschreibung</label>
                <textarea
                  value={heroSubtitle}
                  onChange={(e) => setHeroSubtitle(e.target.value)}
                  className="h-36 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold">Hero Bild URL</label>
                <div className="flex gap-3">
                  <input
                    value={heroImage}
                    onChange={(e) => setHeroImage(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePicker(() => (url: string) => {
                        setHeroImage(url);
                        setActiveTab("homepage");
                      });
                      setActiveTab("media");
                      setMessage("Wähle ein Hero-Bild aus.");
                    }}
                    className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold"
                  >
                    Bild
                  </button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-bold">Primärer CTA</label>
                  <input
                    value={primaryCta}
                    onChange={(e) => setPrimaryCta(e.target.value)}
                    placeholder="Kostenlose Beratung anfragen"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-bold">
                    Sekundärer CTA
                  </label>
                  <input
                    value={secondaryCta}
                    onChange={(e) => setSecondaryCta(e.target.value)}
                    placeholder="Lösungen ansehen"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {heroImage && (
                <img
                  src={heroImage}
                  alt="Hero Vorschau"
                  className="max-h-96 w-full rounded-2xl border object-cover"
                />
              )}

              <button
                onClick={saveContent}
                disabled={saving}
                className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500 disabled:opacity-60"
              >
                {saving ? "Speichert..." : "Änderungen speichern"}
              </button>
            </div>
          </div>
        )}

        {activeTab === "media" && (
          <div className="mt-10">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black">Bild hochladen</h2>
              <p className="mt-2 text-slate-600">
                Bilder werden im Supabase Bucket „media“ gespeichert.
                {imagePicker
                  ? " Wähle danach ein Bild aus, um es in den Standort einzufügen."
                  : ""}
              </p>

              <input
                type="file"
                accept="image/*"
                onChange={uploadImage}
                className="mt-6 block w-full rounded-xl border border-slate-300 bg-white p-4"
              />

              {uploading && (
                <p className="mt-4 font-semibold text-blue-600">
                  Bild wird hochgeladen...
                </p>
              )}
            </div>

            <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black">Medienbibliothek</h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {mediaFiles.map((file) => (
                  <div
                    key={file.path}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
                  >
                    <img
                      src={file.url}
                      alt={file.name}
                      className="h-44 w-full object-cover"
                    />

                    <div className="space-y-3 p-4">
                      <p className="truncate text-sm font-bold">{file.name}</p>

                      <button
                        onClick={() => pickImage(file.url)}
                        className="w-full rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white"
                      >
                        {imagePicker ? "Bild einsetzen" : "Als Hero nutzen"}
                      </button>

                      <button
                        onClick={() => copyUrl(file.url)}
                        className="w-full rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-white"
                      >
                        URL kopieren
                      </button>

                      <button
                        onClick={() => deleteImage(file.path)}
                        className="w-full rounded-xl bg-red-600 px-4 py-2 text-sm font-bold text-white"
                      >
                        Löschen
                      </button>
                    </div>
                  </div>
                ))}

                {mediaFiles.length === 0 && (
                  <p className="text-slate-500">Noch keine Bilder vorhanden.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === "locations" && (
          <div className="mt-10">
            <LocationsTab
              onPickImage={(callback) => {
                setImagePicker(() => (url: string) => {
                  callback(url);
                  setActiveTab("locations");
                });
                setActiveTab("media");
                setMessage("Wähle ein Bild aus der Medienbibliothek aus.");
              }}
            />
          </div>
        )}

        {activeTab === "leads" && (
          <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black">Leads verwalten</h2>
                <p className="mt-2 text-slate-600">
                  Kontaktanfragen direkt bearbeiten.
                </p>
              </div>

              <button
                onClick={loadLeads}
                className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white"
              >
                Neu laden
              </button>
            </div>

            <div className="mt-8 space-y-5">
              {leads.length === 0 && (
                <p className="text-slate-500">Noch keine Anfragen vorhanden.</p>
              )}

              {leads.map((lead) => {
                const digits = phoneDigits(lead.phone);

                return (
                  <div
                    key={lead.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-black">{lead.name}</h3>
                        <p className="text-sm text-slate-500">
                          {formatDate(lead.created_at)}
                        </p>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${statusClass(
                          lead.status
                        )}`}
                      >
                        {lead.status || "neu"}
                      </span>
                    </div>

                    <div className="mt-4 space-y-1 text-sm text-slate-700">
                      <p>
                        <strong>Firma:</strong> {lead.company || "-"}
                      </p>
                      <p>
                        <strong>Typ:</strong> {lead.customer_type}
                      </p>
                      <p>
                        <strong>E-Mail:</strong>{" "}
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-blue-600 underline"
                        >
                          {lead.email}
                        </a>
                      </p>
                      <p>
                        <strong>Telefon:</strong>{" "}
                        {lead.phone ? (
                          <a
                            href={`tel:${lead.phone}`}
                            className="text-blue-600 underline"
                          >
                            {lead.phone}
                          </a>
                        ) : (
                          "-"
                        )}
                      </p>
                    </div>

                    <p className="mt-4 rounded-xl bg-white p-4 text-sm leading-6 text-slate-700">
                      {lead.message}
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <a
                        href={`mailto:${lead.email}?subject=Ihre Anfrage bei DokTV`}
                        className="rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white"
                      >
                        E-Mail
                      </a>

                      <a
                        href={digits ? `https://wa.me/${digits}` : "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-green-600 px-4 py-3 text-center text-sm font-bold text-white"
                      >
                        WhatsApp
                      </a>

                      <button
                        onClick={() => deleteLead(lead.id)}
                        className="rounded-xl bg-red-600 px-4 py-3 text-sm font-bold text-white"
                      >
                        Löschen
                      </button>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <select
                        value={lead.status || "neu"}
                        onChange={(e) =>
                          updateLeadStatus(lead.id, e.target.value)
                        }
                        className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold"
                      >
                        <option value="neu">Neu</option>
                        <option value="kontaktiert">Kontaktiert</option>
                        <option value="erledigt">Erledigt</option>
                      </select>

                      <textarea
                        value={lead.admin_note || ""}
                        onChange={(e) =>
                          setLeads((current) =>
                            current.map((item) =>
                              item.id === lead.id
                                ? { ...item, admin_note: e.target.value }
                                : item
                            )
                          )
                        }
                        onBlur={(e) => updateLeadNote(lead.id, e.target.value)}
                        placeholder="Interne Notiz..."
                        className="min-h-24 rounded-xl border border-slate-300 px-4 py-3 text-sm"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "seo" && (
          <div className="mt-10">
            <SeoTab />
          </div>
        )}

        {activeTab === "blog" && (
          <div className="mt-10">
            <BlogTab />
          </div>
        )}

        {activeTab === "settings" && (
          <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">Einstellungen</h2>
            <p className="mt-3 leading-8 text-slate-600">
              Admin-Einstellungen, erlaubte Admin-E-Mail und Sicherheit bauen
              wir als nächsten Schritt ein.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
