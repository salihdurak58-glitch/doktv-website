const base = new URL(process.env.SEO_BASE_URL || "https://doktv.de/");
const origin = base.origin;
const failures = [];
const checkedLinks = new Set();
const checkedImages = new Set();
const headers = { "User-Agent": "Googlebot" };

function links(html, rel) {
  return [...html.matchAll(/<link\b[^>]*>/g)]
    .map(([tag]) => tag)
    .filter((tag) => tag.includes(`rel="${rel}"`))
    .map((tag) => tag.match(/href="([^"]+)"/)?.[1])
    .filter(Boolean);
}

function meta(html, property) {
  return [...html.matchAll(/<meta\b[^>]*>/g)]
    .map(([tag]) => tag)
    .filter((tag) => tag.includes(`property="${property}"`))
    .map((tag) => tag.match(/content="([^"]+)"/)?.[1])
    .filter(Boolean);
}

const sitemapResponse = await fetch(new URL("/sitemap.xml", origin), { headers });
if (!sitemapResponse.ok) throw new Error(`Sitemap HTTP ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (!urls.length) failures.push("Sitemap ist leer");
if (new Set(urls).size !== urls.length) failures.push("Doppelte Sitemap-URLs");

for (const url of urls) {
  if (!url.startsWith(origin + "/")) {
    failures.push(`${url}: fremde oder www-Domain in Sitemap`);
    continue;
  }
  const response = await fetch(url, { headers, redirect: "manual" });
  if (response.status !== 200) {
    failures.push(`${url}: HTTP ${response.status} statt 200`);
    continue;
  }
  const html = await response.text();
  const canonicals = links(html, "canonical");
  if (canonicals.length !== 1 || canonicals[0] !== url) failures.push(`${url}: Canonical ${JSON.stringify(canonicals)}`);
  if ((html.match(/<h1\b/g) || []).length !== 1) failures.push(`${url}: H1-Anzahl ungleich 1`);
  if (/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html)) failures.push(`${url}: noindex trotz Sitemap`);
  if (!/<title>[^<]+<\/title>/.test(html)) failures.push(`${url}: Title fehlt`);
  if (!/<meta\b[^>]*name="description"[^>]*content="[^"]+"/.test(html)) failures.push(`${url}: Description fehlt`);
  const ogImages = meta(html, "og:image");
  if (!ogImages.length) failures.push(`${url}: OG-Bild fehlt`);
  for (const image of ogImages) checkedImages.add(new URL(image, origin).toString());
  for (const [, href] of html.matchAll(/\bhref="(\/[^"]*)"/g)) {
    const path = new URL(href.replaceAll("&amp;", "&"), origin).pathname;
    if (!path.startsWith("/_next/") && !path.startsWith("/api/") && !path.match(/\.[a-z0-9]+$/i)) checkedLinks.add(path);
  }
  console.log(`OK ${new URL(url).pathname}`);
}

for (const path of checkedLinks) {
  const response = await fetch(new URL(path, origin), { headers, redirect: "follow" });
  if (response.status !== 200) failures.push(`Interner Link ${path}: HTTP ${response.status}`);
}

for (const image of checkedImages) {
  const response = await fetch(image, { method: "HEAD", redirect: "follow" });
  if (!response.ok) failures.push(`OG-Bild ${image}: HTTP ${response.status}`);
}

for (const path of ["/", "/preise"]) {
  const response = await fetch(`https://www.doktv.de${path}`, { redirect: "manual" });
  if (response.status !== 308 || response.headers.get("location") !== `${origin}${path}`) {
    failures.push(`www${path}: HTTP ${response.status}, Location ${response.headers.get("location")}`);
  }
}

const robotsResponse = await fetch(new URL("/robots.txt", origin));
const robots = await robotsResponse.text();
if (robotsResponse.status !== 200 || !robots.includes(`Sitemap: ${origin}/sitemap.xml`)) failures.push("robots.txt verweist nicht auf die kanonische Sitemap");

console.log(`\n${urls.length} Sitemap-Seiten, ${checkedLinks.size} interne Ziele und ${checkedImages.size} OG-Bilder geprüft.`);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("SEO-Crawl ohne Fehler.");
}
