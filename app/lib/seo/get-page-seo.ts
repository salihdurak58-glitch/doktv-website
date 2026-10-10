import type { Metadata } from "next";
import { createSupabaseServerClient } from "@/app/lib/supabase/server";
import { canonicalUrl, SITE_URL } from "@/app/lib/seo/site";

type PageSeo = {
  route: string;
  page_name: string;
  meta_title: string;
  meta_description: string;
  og_title: string | null;
  og_description: string | null;
  og_image_url: string | null;
  canonical_url: string | null;
  noindex: boolean;
};

const siteName = "DokTV";

export async function getPageSeo(route: string): Promise<PageSeo | null> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("page_seo")
    .select("*")
    .eq("route", route)
    .maybeSingle();

  if (error) {
    console.error("SEO konnte nicht geladen werden:", error.message);
    return null;
  }

  return data;
}

export async function generatePageMetadata(route: string): Promise<Metadata> {
  const seo = await getPageSeo(route);
  const routeCanonicalUrl = canonicalUrl(route);

  if (!seo) {
    return {
      title: "DokTV – Digital Signage",
      description:
        "DokTV bietet moderne Digital Signage Lösungen für Apotheken, Praxen und lokale Unternehmen.",
      alternates: {
        canonical: routeCanonicalUrl,
      },
    };
  }

  const pageCanonicalUrl = canonicalUrl(seo.canonical_url || route);

  const ogImage = seo.og_image_url || `${SITE_URL}/og-image.jpg`;

  return {
    title: seo.meta_title,
    description: seo.meta_description,
    alternates: {
      canonical: pageCanonicalUrl,
    },
    robots: {
      index: !seo.noindex,
      follow: !seo.noindex,
    },
    openGraph: {
      title: seo.og_title || seo.meta_title,
      description: seo.og_description || seo.meta_description,
      url: pageCanonicalUrl,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: seo.og_title || seo.meta_title,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.og_title || seo.meta_title,
      description: seo.og_description || seo.meta_description,
      images: [ogImage],
    },
  };
}
