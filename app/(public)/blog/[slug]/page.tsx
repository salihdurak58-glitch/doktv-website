import { getPostBySlug } from "@/app/lib/blog/get-post";
import { canonicalUrl } from "@/app/lib/seo/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

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
      canonical: canonicalUrl(`/blog/${post.slug}`),
    },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || "",
      url: canonicalUrl(`/blog/${post.slug}`),
      type: "article",
      images: [{ url: post.og_image_url || "/referenzen/sky-apotheke-wedding-2.jpg", alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta_title || post.title,
      description: post.meta_description || "",
      images: [post.og_image_url || "/referenzen/sky-apotheke-wedding-2.jpg"],
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    mainEntityOfPage: canonicalUrl(`/blog/${post.slug}`),
    author: { "@type": "Organization", name: "DokTV", url: canonicalUrl("/") },
    publisher: { "@type": "Organization", name: "DokTV", url: canonicalUrl("/") },
    dateModified: post.updated_at,
    description: post.meta_description || undefined,
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <article className="public-reading mx-auto px-6 py-20">
        <p className="mb-4 text-sm font-bold text-teal-700">DokTV Blog</p>

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

        <nav className="mt-12 flex flex-wrap gap-6 border-t border-slate-200 pt-6 text-sm font-bold text-teal-700" aria-label="Weiterführende Seiten">
          <Link href="/apotheken">Digital Signage für Apotheken</Link>
          <Link href="/preise">Displays und Preise</Link>
          <Link href="/kontakt">Beratung anfragen</Link>
        </nav>
      </article>
    </main>
  );
}
