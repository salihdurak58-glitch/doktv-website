import SeoLanding from "../components/SeoLanding";

export const metadata = { title: "Digital Signage für Apotheken | DokTV", description: "Digitale Schaufenster-Displays für Apotheken mit professionellen Inhalten und laufender Betreuung." };

export default function ApothekenPage() {
  return <SeoLanding eyebrow="Für Apotheken" title="Machen Sie Ihr Apotheken-Schaufenster digital sichtbar." intro="DokTV bringt Angebote, Leistungen und Gesundheitsinformationen auf helle Displays – inklusive Inhaltserstellung und laufender Betreuung." sectionTitle="Das kann Ihr digitales Schaufenster zeigen" sectionText="Aktuell, gut lesbar und passend zu Ihrer Apotheke." items={["Angebote & Aktionen", "Notdienst & Öffnungszeiten", "Gesundheitsthemen", "OTC & Kosmetik", "Apothekenleistungen", "Herstellerkampagnen"]} image={{ src: "/referenzen/sky-apotheke-kudamm-2.jpg", alt: "Digitales Apotheken-Schaufenster am Kurfürstendamm" }} secondaryHref="/referenzen" secondaryLabel="Referenzen ansehen" />;
}
