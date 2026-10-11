import type { Metadata } from "next";
import { createSupabaseServerClient } from "@/app/lib/supabase/server";
import { canonicalUrl, SITE_URL } from "@/app/lib/seo/site";
import { publicPageMetadata } from "@/app/lib/seo/public-metadata";

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

export async function generatePageMetadata(
  route: string,
  fallback?: { title: string; description: string; image?: string },
): Promise<Metadata> {
  const seo = await getPageSeo(route);
  if (!seo) {
    return publicPageMetadata(
      route,
      fallback?.title || "DokTV – Digital Signage",
      fallback?.description || "DokTV bietet Digital Signage für Apotheken und Praxen.",
      fallback?.image,
    );
  }

  const pageCanonicalUrl = canonicalUrl(seo.canonical_url || route);

  const ogImage = seo.og_image_url || fallback?.image || `${SITE_URL}/referenzen/sky-apotheke-wedding-2.jpg`;

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
