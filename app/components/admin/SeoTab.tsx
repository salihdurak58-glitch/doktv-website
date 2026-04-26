"use client";

import { useEffect, useMemo, useState, useActionState } from "react";
import { deleteSeoPage, getSeoPages, saveSeoPage } from "@/app/admin/actions/seo";

type SeoPage = {
  id: string;
  route: string;
  page_name: string;
  meta_title: string;
  meta_description: string;
  og_title: string | null;
  og_description: string | null;
  og_image_url: string | null;
  canonical_url: string | null;
  noindex: boolean;
  updated_at: string;
};

const emptySeoPage: Partial<SeoPage> = {
  id: "",
  route: "",
  page_name: "",
  meta_title: "",
  meta_description: "",
  og_title: "",
  og_description: "",
  og_image_url: "",
  canonical_url: "",
  noindex: false,
};

export default function SeoTab() {
  const [pages, setPages] = useState<SeoPage[]>([]);
  const [selected, setSelected] = useState<Partial<SeoPage>>(emptySeoPage);
  const [loading, setLoading] = useState(true);

  const [state, formAction, pending] = useActionState(saveSeoPage, {
    success: false,
    message: "",
  });

  async function loadPages() {
    setLoading(true);
    const data = await getSeoPages();
    setPages(data as SeoPage[]);
    setLoading(false);
  }

  useEffect(() => {
    loadPages();
  }, []);

  useEffect(() => {
    if (state.success) {
      loadPages();
    }
  }, [state.success]);

  const titleLength = selected.meta_title?.length || 0;
  const descriptionLength = selected.meta_description?.length || 0;

  const previewUrl = useMemo(() => {
    const base = process.env.NEXT_PUBLIC_SITE_URL || "https://doktv.de";
    const route = selected.route || "/";
    return route.startsWith("http") ? route : `${base}${route}`;
  }, [selected.route]);

  async function handleDelete() {
    if (!selected.id || !selected.route) return;

    const ok = window.confirm("SEO-Eintrag wirklich löschen?");
    if (!ok) return;

    await deleteSeoPage(selected.id, selected.route);
    setSelected(emptySeoPage);
    await loadPages();
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div className="rounded-2xl border bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">SEO Seiten</h2>
          <button
            type="button"
            onClick={() => setSelected(emptySeoPage)}
            className="rounded-lg bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Neu
          </button>
        </div>

        {loading ? (
          <p className="text-sm text-gray-500">Lade SEO-Daten...</p>
        ) : (
          <div className="space-y-2">
            {pages.map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => setSelected(page)}
                className={`w-full rounded-xl border p-3 text-left transition ${
                  selected.id === page.id
                    ? "border-black bg-gray-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <p className="font-medium text-gray-900">{page.page_name}</p>
                <p className="text-sm text-gray-500">{page.route}</p>
                {page.noindex && (
                  <span className="mt-2 inline-block rounded-full bg-red-100 px-2 py-1 text-xs text-red-700">
                    noindex
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold text-gray-900">
          SEO bearbeiten
        </h2>

        <form action={formAction} className="space-y-5">
          <input type="hidden" name="id" value={selected.id || ""} />

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Seitenname
              </label>
              <input
                name="page_name"
                value={selected.page_name || ""}
                onChange={(e) =>
                  setSelected({ ...selected, page_name: e.target.value })
                }
                className="w-full rounded-xl border px-3 py-2 outline-none focus:border-black"
                placeholder="Startseite"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Route
              </label>
              <input
                name="route"
                value={selected.route || ""}
                onChange={(e) =>
                  setSelected({ ...selected, route: e.target.value })
                }
                className="w-full rounded-xl border px-3 py-2 outline-none focus:border-black"
                placeholder="/kontakt"
                required
              />
            </div>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Meta Title
              </label>
              <span
                className={`text-xs ${
                  titleLength > 65 ? "text-red-600" : "text-gray-500"
                }`}
              >
                {titleLength}/65
              </span>
            </div>
            <input
              name="meta_title"
              value={selected.meta_title || ""}
              onChange={(e) =>
                setSelected({ ...selected, meta_title: e.target.value })
              }
              className="w-full rounded-xl border px-3 py-2 outline-none focus:border-black"
              placeholder="DokTV – Digital Signage für Apotheken"
              required
            />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Meta Description
              </label>
              <span
                className={`text-xs ${
                  descriptionLength > 160 ? "text-red-600" : "text-gray-500"
                }`}
              >
                {descriptionLength}/160
              </span>
            </div>
            <textarea
              name="meta_description"
              value={selected.meta_description || ""}
              onChange={(e) =>
                setSelected({
                  ...selected,
                  meta_description: e.target.value,
                })
              }
              className="min-h-28 w-full rounded-xl border px-3 py-2 outline-none focus:border-black"
              placeholder="Kurze Beschreibung für Google..."
              required
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                OG Title
              </label>
              <input
                name="og_title"
                value={selected.og_title || ""}
                onChange={(e) =>
                  setSelected({ ...selected, og_title: e.target.value })
                }
                className="w-full rounded-xl border px-3 py-2 outline-none focus:border-black"
                placeholder="Optional"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                OG Bild URL
              </label>
              <input
                name="og_image_url"
                value={selected.og_image_url || ""}
                onChange={(e) =>
                  setSelected({ ...selected, og_image_url: e.target.value })
                }
                className="w-full rounded-xl border px-3 py-2 outline-none focus:border-black"
                placeholder="https://..."
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              OG Description
            </label>
            <textarea
              name="og_description"
              value={selected.og_description || ""}
              onChange={(e) =>
                setSelected({ ...selected, og_description: e.target.value })
              }
              className="min-h-24 w-full rounded-xl border px-3 py-2 outline-none focus:border-black"
              placeholder="Optional für Social Media Vorschau"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Canonical URL
            </label>
            <input
              name="canonical_url"
              value={selected.canonical_url || ""}
              onChange={(e) =>
                setSelected({ ...selected, canonical_url: e.target.value })
              }
              className="w-full rounded-xl border px-3 py-2 outline-none focus:border-black"
              placeholder="/kontakt oder https://doktv.de/kontakt"
            />
          </div>

          <label className="flex items-center gap-2 rounded-xl border p-3 text-sm text-gray-700">
            <input
              type="checkbox"
              name="noindex"
              checked={!!selected.noindex}
              onChange={(e) =>
                setSelected({ ...selected, noindex: e.target.checked })
              }
            />
            Diese Seite auf noindex setzen
          </label>

          <div className="rounded-2xl border bg-gray-50 p-4">
            <p className="mb-2 text-sm font-medium text-gray-700">
              Google Vorschau
            </p>
            <p className="text-lg text-blue-700">
              {selected.meta_title || "Meta Title"}
            </p>
            <p className="text-sm text-green-700">{previewUrl}</p>
            <p className="mt-1 text-sm text-gray-600">
              {selected.meta_description || "Meta Description"}
            </p>
          </div>

          {state.message && (
            <p
              className={`rounded-xl p-3 text-sm ${
                state.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {state.message}
            </p>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={pending}
              className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-60"
            >
              {pending ? "Speichert..." : "Speichern"}
            </button>

            {selected.id && (
              <button
                type="button"
                onClick={handleDelete}
                className="rounded-xl border border-red-300 px-5 py-3 text-sm font-medium text-red-700 hover:bg-red-50"
              >
                Löschen
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}