import type { Metadata } from "next";
import { createSupabaseServerClient } from "@/lib/supabase/server";

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
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://doktv.de";

export async function getPageSeo(route: string): Promise<PageSeo | null> {
  const supabase = await createSupabaseServerClient();

  const { data } = await supabase
    .from("page_seo")
    .select("*")
    .eq("route", route)
    .maybeSingle();

  return data;
}

export async function generatePageMetadata(route: string): Promise<Metadata> {
  const seo = await getPageSeo(route);

  if (!seo) {
    return {
      title: siteName,
      description:
        "DokTV bietet moderne Digital Signage Lösungen für Apotheken, Praxen und lokale Unternehmen.",
    };
  }

  const canonicalPath = seo.canonical_url || route;
  const canonicalUrl = canonicalPath.startsWith("http")
    ? canonicalPath
    : `${siteUrl}${canonicalPath}`;

  const ogImage = seo.og_image_url || `${siteUrl}/og-image.jpg`;

  return {
    title: seo.meta_title,
    description: seo.meta_description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !seo.noindex,
      follow: !seo.noindex,
    },
    openGraph: {
      title: seo.og_title || seo.meta_title,
      description: seo.og_description || seo.meta_description,
      url: canonicalUrl,
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