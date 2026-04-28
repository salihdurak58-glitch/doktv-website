"use client";

import { useEffect, useState } from "react";
import {
  deleteBlogPost,
  getBlogPosts,
  saveBlogPost,
} from "@/app/admin/actions/blog";

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  content: string | null;
  meta_title: string | null;
  meta_description: string | null;
  og_image_url: string | null;
  noindex: boolean;
  created_at: string;
  updated_at: string;
};

const emptyPost: Partial<BlogPost> = {
  id: "",
  slug: "",
  title: "",
  content: "",
  meta_title: "",
  meta_description: "",
  og_image_url: "",
  noindex: false,
};

export default function BlogTab() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selected, setSelected] = useState<Partial<BlogPost>>(emptyPost);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function loadPosts() {
    setLoading(true);
    const data = await getBlogPosts();
    setPosts(data as BlogPost[]);
    setLoading(false);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    await saveBlogPost(formData);

    setMessage("Blogartikel gespeichert.");
    setSelected(emptyPost);
    await loadPosts();
  }

  async function handleDelete() {
    if (!selected.id) return;

    const ok = window.confirm("Blogartikel wirklich löschen?");
    if (!ok) return;

    await deleteBlogPost(selected.id);
    setMessage("Blogartikel gelöscht.");
    setSelected(emptyPost);
    await loadPosts();
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-slate-950">
            Blogartikel
          </h2>

          <button
            type="button"
            onClick={() => {
              setSelected(emptyPost);
              setMessage("");
            }}
            className="rounded-xl bg-black px-4 py-2 text-sm font-bold text-white hover:bg-slate-800"
          >
            Neu
          </button>
        </div>

        {loading ? (
          <p className="text-slate-500">Lade Blogartikel...</p>
        ) : posts.length === 0 ? (
          <p className="text-slate-500">Noch keine Blogartikel vorhanden.</p>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => {
                  setSelected(post);
                  setMessage("");
                }}
                className={`w-full rounded-2xl border p-4 text-left transition ${
                  selected.id === post.id
                    ? "border-black bg-slate-50"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                <p className="font-bold text-slate-950">{post.title}</p>
                <p className="mt-1 text-sm text-slate-500">
                  /blog/{post.slug}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-extrabold text-slate-950">
          Artikel bearbeiten
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="hidden" name="id" value={selected.id || ""} />

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Slug / URL
            </label>
            <input
              name="slug"
              value={selected.slug || ""}
              onChange={(e) =>
                setSelected({ ...selected, slug: e.target.value })
              }
              placeholder="digital-signage-apotheken"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
              required
            />
            <p className="mt-1 text-xs text-slate-500">
              Beispiel: /blog/digital-signage-apotheken
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Titel
            </label>
            <input
              name="title"
              value={selected.title || ""}
              onChange={(e) =>
                setSelected({ ...selected, title: e.target.value })
              }
              placeholder="Digital Signage für Apotheken"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Inhalt
            </label>
            <textarea
              name="content"
              value={selected.content || ""}
              onChange={(e) =>
                setSelected({ ...selected, content: e.target.value })
              }
              placeholder="Artikeltext..."
              className="min-h-72 w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Meta Title
            </label>
            <input
              name="meta_title"
              value={selected.meta_title || ""}
              onChange={(e) =>
                setSelected({ ...selected, meta_title: e.target.value })
              }
              placeholder="SEO Titel"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Meta Description
            </label>
            <textarea
              name="meta_description"
              value={selected.meta_description || ""}
              onChange={(e) =>
                setSelected({
                  ...selected,
                  meta_description: e.target.value,
                })
              }
              placeholder="SEO Beschreibung"
              className="min-h-24 w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              OG Bild URL
            </label>
            <input
              name="og_image_url"
              value={selected.og_image_url || ""}
              onChange={(e) =>
                setSelected({ ...selected, og_image_url: e.target.value })
              }
              placeholder="https://..."
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <label className="flex items-center gap-3 rounded-xl border p-4 text-sm font-bold text-slate-700">
            <input
              type="checkbox"
              name="noindex"
              checked={!!selected.noindex}
              onChange={(e) =>
                setSelected({ ...selected, noindex: e.target.checked })
              }
            />
            Diesen Artikel auf noindex setzen
          </label>

          {message && (
            <p className="rounded-xl bg-green-100 p-4 text-sm font-bold text-green-700">
              {message}
            </p>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-xl bg-black px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
            >
              Speichern
            </button>

            {selected.id && (
              <button
                type="button"
                onClick={handleDelete}
                className="rounded-xl border border-red-300 px-5 py-3 text-sm font-bold text-red-600 hover:bg-red-50"
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