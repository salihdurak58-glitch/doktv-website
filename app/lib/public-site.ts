export const publicContact = {
  phoneLabel: "0163 9400001",
  phoneHref: "tel:+491639400001",
  email: "info@doktv.de",
  company: "DokTV UG (haftungsbeschränkt)",
} as const;

export const solutionLinks = [
  { href: "/apotheken", label: "Digital Signage für Apotheken", level: "main" },
  { href: "/apotheken#schaufenster", label: "Schaufenster-Displays", level: "sub" },
  { href: "/apotheken-notdienst-anzeiger", label: "Notdienstanzeiger", level: "sub" },
  { href: "/werbung-apotheke-display", label: "Individuelle Werbeinhalte", level: "sub" },
  { href: "/wartezimmer-tv-praxen", label: "Wartezimmer-TV", level: "other" },
  { href: "/hersteller-werbung", label: "Herstellerwerbung", level: "other" },
] as const;

export const primaryLinks = [
  { href: "/referenzen", label: "Referenzen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/preise", label: "Preise" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const furtherLinks = [
  { href: "/arztpraxen", label: "Arztpraxen" },
  { href: "/hersteller", label: "Für Hersteller" },
  { href: "/standorte", label: "Standorte" },
  { href: "/blog", label: "Blog" },
] as const;

export const knowledgeLinks = [
  { href: "/digital-signage-berlin", label: "Digital Signage Berlin" },
  { href: "/werbung-apotheke-display", label: "Apotheken-Display Werbung" },
  { href: "/blog/digital-signage-apotheke", label: "Digital Signage Apotheke" },
  { href: "/blog/schaufenster-display-apotheke", label: "Schaufenster-Display Apotheke" },
  { href: "/blog/apotheken-marketing-berlin", label: "Apotheken-Marketing Berlin" },
] as const;

export function isSolutionPath(pathname: string) {
  return solutionLinks.some(({ href }) => pathname === href || pathname.startsWith(`${href}/`));
}
