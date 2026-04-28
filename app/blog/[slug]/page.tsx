import { getPostBySlug } from "@/app/lib/blog/get-post";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!post) {
    return {
      title: "Artikel nicht gefunden",
      description: "Dieser Blogartikel wurde nicht gefunden.",
    };
  }

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || "",
    robots: {
      index: !post.noindex,
      follow: !post.noindex,
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || "",
      url: `${baseUrl}/blog/${post.slug}`,
      type: "article",
      images: post.og_image_url
        ? [
            {
              url: post.og_image_url,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta_title || post.title,
      description: post.meta_description || "",
      images: post.og_image_url ? [post.og_image_url] : [],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-3xl px-6 py-20">
        <p className="mb-4 text-sm font-bold text-blue-600">DokTV Blog</p>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
          {post.title}
        </h1>

        {post.meta_description && (
          <p className="mt-6 text-xl leading-8 text-slate-600">
            {post.meta_description}
          </p>
        )}

        <div className="mt-10 whitespace-pre-line text-lg leading-8 text-slate-700">
          {post.content}
        </div>
      </article>
    </main>
  );
}