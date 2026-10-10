export const SITE_URL = "https://doktv.de";

export function canonicalUrl(pathOrUrl: string) {
  const parsedUrl = new URL(pathOrUrl, SITE_URL);

  return new URL(parsedUrl.pathname, SITE_URL).toString();
}
