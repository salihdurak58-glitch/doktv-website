"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

type ContentItem = {
  key: string;
  value: string;
};

type MediaFile = {
  name: string;
  url: string;
  path: string;
};

export default function Dashboard() {
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [heroImage, setHeroImage] = useState("");

  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function init() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/admin/login");
        return;
      }

      setEmail(data.user.email ?? null);

      await loadContent();
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

  async function logout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
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

  async function uploadHeroImage(event: React.ChangeEvent<HTMLInputElement>) {
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

    setHeroImage(data.publicUrl);
    setUploading(false);
    setMessage("Bild hochgeladen. Jetzt speichern klicken.");

    await loadMedia();
  }

  async function copyUrl(url: string) {
    await navigator.clipboard.writeText(url);
    setMessage("Bild-URL kopiert.");
  }

  async function deleteImage(path: string) {
    const confirmed = confirm("Bild wirklich löschen?");

    if (!confirmed) return;

    const { error } = await supabase.storage.from("media").remove([path]);

    if (error) {
      setMessage("Bild konnte nicht gelöscht werden.");
      return;
    }

    if (heroImage.includes(path)) {
      setHeroImage("");
    }

    setMessage("Bild gelöscht.");
    await loadMedia();
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
          <div className="rounded-xl bg-blue-600 px-4 py-3">Startseite</div>
          <div className="rounded-xl bg-white/10 px-4 py-3">Bilder</div>
          <div className="rounded-xl px-4 py-3 text-slate-400">Blog</div>
          <div className="rounded-xl px-4 py-3 text-slate-400">Leads</div>
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
            <h2 className="text-2xl font-black">Bild hochladen</h2>

            <p className="mt-2 text-slate-600">
              Lade ein Bild hoch und nutze es direkt als Hero-Bild.
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={uploadHeroImage}
              className="mt-6 block w-full rounded-xl border border-slate-300 bg-white p-4"
            />

            {uploading && (
              <p className="mt-4 font-semibold text-blue-600">
                Bild wird hochgeladen...
              </p>
            )}
          </div>
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
                    onClick={() => setHeroImage(file.url)}
                    className="w-full rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white"
                  >
                    Als Hero nutzen
                  </button>

                  <button
                    onClick={() => copyUrl(file.url)}
                    className="w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white"
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
      </section>
    </main>
  );
}