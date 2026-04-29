"use client";

import { useEffect, useMemo, useState, useActionState } from "react";
import {
  deleteSeoPage,
  getSeoPages,
  saveSeoPage,
} from "@/app/admin/actions/seo";

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
    void Promise.resolve().then(loadPages);
  }, []);

  useEffect(() => {
    if (state.success) {
      void Promise.resolve().then(loadPages);
    }
  }, [state.success]);

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
      {/* LEFT */}
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
          <p className="text-sm text-gray-500">Lade...</p>
        ) : (
          <div className="space-y-2">
            {pages.map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => setSelected(page)}
                className={`w-full rounded-xl border p-3 text-left ${
                  selected.id === page.id
                    ? "border-black bg-gray-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <p className="font-medium">{page.page_name}</p>
                <p className="text-sm text-gray-500">{page.route}</p>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold">SEO bearbeiten</h2>

        <form action={formAction} className="space-y-5">
          <input type="hidden" name="id" value={selected.id || ""} />

          <input
            name="route"
            value={selected.route || ""}
            onChange={(e) =>
              setSelected({ ...selected, route: e.target.value })
            }
            placeholder="/kontakt"
            className="w-full rounded-xl border px-3 py-2"
            required
          />

          <input
            name="page_name"
            value={selected.page_name || ""}
            onChange={(e) =>
              setSelected({ ...selected, page_name: e.target.value })
            }
            placeholder="Seitenname"
            className="w-full rounded-xl border px-3 py-2"
            required
          />

          <input
            name="meta_title"
            value={selected.meta_title || ""}
            onChange={(e) =>
              setSelected({ ...selected, meta_title: e.target.value })
            }
            placeholder="Meta Title"
            className="w-full rounded-xl border px-3 py-2"
            required
          />

          <textarea
            name="meta_description"
            value={selected.meta_description || ""}
            onChange={(e) =>
              setSelected({
                ...selected,
                meta_description: e.target.value,
              })
            }
            placeholder="Meta Description"
            className="w-full rounded-xl border px-3 py-2"
            required
          />

          <input
            name="og_title"
            value={selected.og_title || ""}
            onChange={(e) =>
              setSelected({ ...selected, og_title: e.target.value })
            }
            placeholder="OG Title"
            className="w-full rounded-xl border px-3 py-2"
          />

          <input
            name="og_image_url"
            value={selected.og_image_url || ""}
            onChange={(e) =>
              setSelected({ ...selected, og_image_url: e.target.value })
            }
            placeholder="OG Image URL"
            className="w-full rounded-xl border px-3 py-2"
          />

          <textarea
            name="og_description"
            value={selected.og_description || ""}
            onChange={(e) =>
              setSelected({ ...selected, og_description: e.target.value })
            }
            placeholder="OG Description"
            className="w-full rounded-xl border px-3 py-2"
          />

          <input
            name="canonical_url"
            value={selected.canonical_url || ""}
            onChange={(e) =>
              setSelected({ ...selected, canonical_url: e.target.value })
            }
            placeholder="Canonical URL"
            className="w-full rounded-xl border px-3 py-2"
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="noindex"
              checked={!!selected.noindex}
              onChange={(e) =>
                setSelected({ ...selected, noindex: e.target.checked })
              }
            />
            noindex
          </label>

          {/* PREVIEW */}
          <div className="rounded-xl border p-4 bg-gray-50">
            <p className="text-blue-700 text-lg">
              {selected.meta_title || "Meta Title"}
            </p>
            <p className="text-green-700 text-sm">{previewUrl}</p>
            <p className="text-gray-600 text-sm">
              {selected.meta_description || "Meta Description"}
            </p>
          </div>

          {state.message && (
            <p
              className={
                state.success ? "text-green-600" : "text-red-600"
              }
            >
              {state.message}
            </p>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={pending}
              className="bg-black text-white px-4 py-2 rounded-xl"
            >
              Speichern
            </button>

            {selected.id && (
              <button
                type="button"
                onClick={handleDelete}
                className="border border-red-500 text-red-600 px-4 py-2 rounded-xl"
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
