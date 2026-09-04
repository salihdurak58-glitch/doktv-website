import SeoLanding from "../components/SeoLanding";

export const metadata = { title: "Apotheke Werbung Berlin | Digitale Werbung für Apotheken | DokTV", description: "Digitale Werbung für Apotheken in Berlin mit echten DokTV Referenzen, klaren Preisen und laufender Content-Betreuung." };

export default function Page() {
  return <SeoLanding eyebrow="Apothekenwerbung in Berlin" title="Mehr Sichtbarkeit für Berliner Apotheken." intro="Digitale Schaufenster-Displays machen lokale Angebote und Gesundheitsinformationen im Straßenbild sichtbar. DokTV betreut Technik und Inhalte." sectionTitle="Was digitale Apothekenwerbung leistet" sectionText="Für gut frequentierte Lagen, wechselnde Aktionen und eine moderne Außenwirkung." items={["Schaufenster-Displays", "Lokale Angebote", "Gesundheitskampagnen", "Notdienst-Hinweise", "Produktwerbung", "Laufende Content-Pflege"]} image={{ src: "/referenzen/sky-apotheke-kreuzberg-2.jpg", alt: "Digitale Apothekenwerbung in Berlin Kreuzberg" }} secondaryHref="/referenzen" secondaryLabel="Berliner Referenzen" />;
}
