import type { Metadata } from "next";
import { canonicalUrl } from "./site";

const defaultImage = "/referenzen/sky-apotheke-wedding-2.jpg";

export function publicPageMetadata(
  route: string,
  title: string,
  description: string,
  image = defaultImage,
  type: "website" | "article" = "website",
): Metadata {
  const url = canonicalUrl(route);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "DokTV",
      locale: "de_DE",
      type,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
