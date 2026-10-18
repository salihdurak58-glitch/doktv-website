import { readdir, writeFile } from "node:fs/promises";

// Keep the expected canonical domain separate from the preview transport origin.
const base = new URL(process.env.SEO_BASE_URL || "https://doktv.de/");
const canonicalOrigin = new URL(process.env.SEO_CANONICAL_ORIGIN || "https://doktv.de").origin;
const allowPreviewHeader = process.env.SEO_ALLOW_PREVIEW_NOINDEX === "1" && base.origin !== canonicalOrigin;
const errors = [];
const warnings = [];
const pages = [];
const links = new Map();
const images = new Set();
const redirects = new Map([
  ["/schaufenster-display-apotheken", "/apotheken"],
  ["/blog/digital-signage-apotheken", "/blog/digital-signage-apotheke"],
]);

function decode(value = "") {
  return value.replace(/&(?:amp|quot|apos|lt|gt|nbsp);|&#(?:x[0-9a-f]+|[0-9]+);/gi, (entity) => {
    const named = { "&amp;": "&", "&quot;": '"', "&apos;": "'", "&lt;": "<", "&gt;": ">", "&nbsp;": " " };
    if (named[entity.toLowerCase()]) return named[entity.toLowerCase()];
    const hex = entity[2].toLowerCase() === "x";
    const point = parseInt(entity.slice(hex ? 3 : 2, -1), hex ? 16 : 10);
    return point <= 0x10ffff ? String.fromCodePoint(point) : entity;
  });
}
function attrs(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map((m) => [m[1].toLowerCase(), decode(m[2] ?? m[3] ?? m[4])]));
}
function tags(html, name) { return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map(([tag]) => attrs(tag)); }
function text(html) { return decode(html.replace(/<(script|style|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim(); }
function transport(url) { const parsed = new URL(url, canonicalOrigin); return parsed.origin === canonicalOrigin ? new URL(parsed.pathname + parsed.search, base.origin) : parsed; }
async function request(url, options = {}) {
  const target = new URL(url);
  const headers = { "User-Agent": "Googlebot" };
  // Optional short-lived preview cookie; never log it or send it to another host.
  if (target.origin === base.origin && process.env.SEO_COOKIE) headers.Cookie = process.env.SEO_COOKIE;
  return fetch(target, { ...options, headers, signal: AbortSignal.timeout(30000) });
}
async function staticRoutes(directory, segments = []) {
  const routes = [];
  for (const item of await readdir(directory, { withFileTypes: true })) {
    if (item.isDirectory() && !item.name.startsWith("[") && !item.name.startsWith("_") && !item.name.startsWith("@")) {
      routes.push(...await staticRoutes(new URL(`${item.name}/`, directory), item.name.startsWith("(") ? segments : [...segments, item.name]));
    } else if (item.isFile() && /^page\.(tsx|jsx|js|ts)$/.test(item.name)) routes.push("/" + segments.join("/"));
  }
  return routes;
}

const sitemapResponse = await request(new URL("/sitemap.xml", base));
if (!sitemapResponse.ok) throw new Error(`Sitemap HTTP ${sitemapResponse.status}`);
const sitemapText = await sitemapResponse.text();
const urls = [...sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1]));
if (!urls.length) throw new Error("Sitemap ist leer");
if (new Set(urls).size !== urls.length) errors.push("Doppelte Sitemap-URLs");
const advertised = new Set(urls);
const pathsFromSource = await staticRoutes(new URL("../app/(public)/", import.meta.url));
const allUrls = new Set([...urls, ...pathsFromSource.filter((path) => !redirects.has(path)).map((path) => new URL(path, canonicalOrigin).href)]);

for (const url of allUrls) {
  const path = new URL(url).pathname;
  const localErrors = [];
  if (new URL(url).origin !== canonicalOrigin) { errors.push(`${url}: fremde Domain in Sitemap`); continue; }
  try {
    const response = await request(transport(url), { redirect: "manual" });
    if (response.status !== 200) { errors.push(`${path}: HTTP ${response.status} statt 200`); continue; }
    const html = await response.text();
    const metas = tags(html, "meta");
    const meta = (name) => metas.filter((m) => m.name?.toLowerCase() === name || m.property?.toLowerCase() === name).map((m) => m.content || "");
    const title = text(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "");
    const descriptions = meta("description");
    const canonicals = tags(html, "link").filter((t) => t.rel === "canonical").map((t) => t.href);
    const htmlRobots = [...meta("robots"), ...meta("googlebot")].join(",");
    const headerRobots = response.headers.get("x-robots-tag") || "";
    const blockedByMeta = /\b(noindex|none)\b/i.test(htmlRobots);
    const blockedByHeader = /\b(noindex|none)\b/i.test(headerRobots);
    if (canonicals.length !== 1 || canonicals[0] !== url) localErrors.push(`Canonical: ${JSON.stringify(canonicals)}`);
    if (advertised.has(url) && blockedByMeta) localErrors.push("noindex im HTML trotz Sitemap");
    if (blockedByHeader && !allowPreviewHeader) localErrors.push("noindex im HTTP-Header");
    if (!advertised.has(url) && !blockedByMeta && canonicals[0] === url) localErrors.push("Indexierbare öffentliche Route fehlt in der Sitemap");
    if (!title) localErrors.push("Title fehlt");
    if (descriptions.length !== 1 || !descriptions[0]?.trim()) localErrors.push("Description fehlt oder ist doppelt");
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || "";
    const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => text(m[1]));
    if (h1s.length !== 1 || !h1s[0]) localErrors.push("H1 fehlt oder ist mehrfach vorhanden");
    const words = text(main).split(/\s+/).filter(Boolean).length;
    if (!words) localErrors.push("Kein lesbarer Hauptinhalt im Server-HTML");
    const ids = tags(html, "[a-z][a-z0-9:-]*").filter((t) => t.id).map((t) => t.id);
    if (new Set(ids).size !== ids.length) warnings.push(`${path}: doppelte HTML-IDs prüfen`);
    const ogImages = meta("og:image");
    if (!ogImages.length) localErrors.push("OG-Bild fehlt");
    for (const image of ogImages) images.add(new URL(image, canonicalOrigin).href);
    for (const image of tags(html, "img")) if (!("alt" in image)) localErrors.push("Bild ohne alt-Attribut");
    for (const [, json] of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
      try { JSON.parse(json); } catch { localErrors.push("Ungültiges JSON-LD"); }
    }
    for (const anchor of tags(html, "a")) {
      if (!anchor.href) continue;
      let linked;
      try { linked = new URL(anchor.href, url); } catch { warnings.push(`${path}: ungültiger Link`); continue; }
      if (linked.origin !== canonicalOrigin || /^\/(?:_next|api)\//.test(linked.pathname) || /\.[a-z0-9]+$/i.test(linked.pathname)) continue;
      const key = linked.pathname;
      if (!links.has(key)) links.set(key, new Set());
      links.get(key).add(path);
      if (redirects.has(key)) warnings.push(`${path}: interner Link auf Weiterleitung ${key}`);
      if (key === path && linked.hash && !ids.includes(decodeURIComponent(linked.hash.slice(1)))) warnings.push(`${path}: Sprungziel ${linked.hash} fehlt`);
    }
    pages.push({ path, status: response.status, words, title, description: descriptions[0], canonical: canonicals[0], h1: h1s[0], robots: htmlRobots, xRobotsTag: headerRobots, inSitemap: advertised.has(url), errors: localErrors });
    errors.push(...localErrors.map((error) => `${path}: ${error}`));
    console.log(`${localErrors.length ? "FEHLER" : "OK"} ${path} — ${words} Wörter im Hauptinhalt`);
  } catch (error) { errors.push(`${path}: ${error.message}`); }
}

for (const field of ["title", "description"]) {
  const seen = new Map();
  for (const page of pages) {
    if (page[field] && seen.has(page[field])) errors.push(`${page.path}: gleicher ${field} wie ${seen.get(page[field])}`);
    else if (page[field]) seen.set(page[field], page.path);
  }
}
for (const [path] of links) {
  try { const response = await request(transport(new URL(path, canonicalOrigin)), { redirect: "follow" }); if (response.status !== 200) errors.push(`Interner Link ${path}: HTTP ${response.status}`); }
  catch (error) { errors.push(`Interner Link ${path}: ${error.message}`); }
}
for (const page of pages) if (page.inSitemap && page.path !== "/" && ![...(links.get(page.path) || [])].some((source) => source !== page.path)) warnings.push(`${page.path}: kein eingehender HTML-Link im geprüften Seitensatz`);
for (const image of images) {
  try { const response = await request(transport(image), { method: "HEAD", redirect: "follow" }); if (!response.ok) errors.push(`OG-Bild: HTTP ${response.status} ${image}`); }
  catch (error) { errors.push(`OG-Bild ${image}: ${error.message}`); }
}
for (const [from, to] of redirects) {
  const response = await request(new URL(from, base), { redirect: "manual" });
  const location = response.headers.get("location");
  if (![301, 308].includes(response.status) || !location || new URL(location, base).pathname !== to) errors.push(`${from}: dauerhafte Weiterleitung auf ${to} fehlt`);
  if (advertised.has(new URL(from, canonicalOrigin).href)) errors.push(`${from}: Weiterleitung steht in Sitemap`);
}
const robotsResponse = await request(new URL("/robots.txt", base));
const robots = await robotsResponse.text();
if (!robotsResponse.ok || !robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`)) errors.push("robots.txt oder Sitemap-Verweis fehlerhaft");
if (/Disallow:\s*\/\s*$/im.test(robots)) errors.push("robots.txt enthält eine globale Crawl-Sperre; User-Agent-Gruppe prüfen");
const missing = await request(new URL("/doktv-seo-check-nicht-vorhanden", base));
if (missing.status !== 404) errors.push(`Nicht vorhandene Seite: HTTP ${missing.status} statt 404`);
const admin = await request(new URL("/admin/login", base));
const adminHtml = await admin.text();
if (!tags(adminHtml, "meta").some((m) => m.name === "robots" && /\bnoindex\b/.test(m.content || ""))) errors.push("Admin-Login ohne noindex");
if (base.origin === canonicalOrigin) {
  for (const path of ["/", "/preise"]) {
    const response = await request(new URL(path, "https://www.doktv.de"), { redirect: "manual" });
    if (![301, 308].includes(response.status) || response.headers.get("location") !== new URL(path, canonicalOrigin).href) errors.push(`www${path}: kanonische Weiterleitung fehlt`);
  }
}
const report = { checkedAt: new Date().toISOString(), baseUrl: base.origin, canonicalOrigin, sitemapCount: urls.length, publicPagesChecked: pages.length, internalLinkTargets: links.size, ogImagesChecked: images.size, pages, errors, warnings: [...new Set(warnings)], limitations: ["HTTP-Crawl mit Googlebot-User-Agent; kein Nachweis tatsächlicher Google-Indexierung.", "Keine feste Mindestwortzahl. Textumfang wird nur dokumentiert.", "Kein Ersatz für Search Console, Feldmessungen der Core Web Vitals oder vollständige Rich-Results-Validierung."] };
if (process.env.SEO_REPORT_PATH) await writeFile(process.env.SEO_REPORT_PATH, JSON.stringify(report, null, 2));
console.log(`\n${urls.length} Sitemap-URLs, ${pages.length} öffentliche Seiten, ${links.size} interne Ziele, ${images.size} OG-Bilder.`);
if (report.warnings.length) console.warn("Hinweise:\n" + report.warnings.join("\n"));
if (errors.length) { console.error("Fehler:\n" + errors.join("\n")); process.exitCode = 1; }
else console.log("SEO-Crawl ohne Fehler.");
