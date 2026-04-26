"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

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
};

export default function Dashboard() {
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [heroImage, setHeroImage] = useState("");

  const [leads, setLeads] = useState<Lead[]>([]);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

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
          <div className="rounded-xl bg-blue-600 px-4 py-3">Dashboard</div>
          <div className="rounded-xl bg-white/10 px-4 py-3">Startseite</div>
          <div className="rounded-xl bg-white/10 px-4 py-3">Leads</div>
          <div className="rounded-xl px-4 py-3 text-slate-400">Bilder</div>
          <div className="rounded-xl px-4 py-3 text-slate-400">Blog</div>
          <div className="rounded-xl px-4 py-3 text-slate-400">Statistik</div>
          <div className="rounded-xl px-4 py-3 text-slate-400">SEO</div>
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

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-slate-500">Leads gesamt</p>
            <p className="mt-2 text-4xl font-black">{leads.length}</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-slate-500">Letzte Anfrage</p>
            <p className="mt-2 text-xl font-black">
              {leads[0] ? formatDate(leads[0].created_at) : "Keine Leads"}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-slate-500">Status</p>
            <p className="mt-2 text-xl font-black text-green-600">Online</p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">Startseite bearbeiten</h2>

            <div className="mt-8 space-y-6">
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
                <input
                  value={heroImage}
                  onChange={(e) => setHeroImage(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {heroImage && (
                <img
                  src={heroImage}
                  alt="Hero Vorschau"
                  className="max-h-72 w-full rounded-2xl border object-cover"
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

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black">Neue Leads</h2>
                <p className="mt-2 text-slate-600">
                  Kontaktanfragen aus deinem Formular.
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

              {leads.slice(0, 5).map((lead) => (
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

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                      {lead.customer_type}
                    </span>
                  </div>

                  <div className="mt-4 space-y-1 text-sm text-slate-700">
                    <p>
                      <strong>Firma:</strong> {lead.company || "-"}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}