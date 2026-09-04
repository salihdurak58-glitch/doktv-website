import SeoLanding from "../components/SeoLanding";

export const metadata = { title: "Werbung Apotheke Display | Digital Signage Apotheke – DokTV", description: "Werbung mit digitalen Displays in Apotheken: Angebote, Informationen und Kampagnen professionell zeigen.", alternates: { canonical: "https://doktv.de/werbung-apotheke-display" } };

export default function WerbungApothekeDisplayPage() {
  return <SeoLanding eyebrow="Werbung im Apotheken-Display" title="Aktuelle Inhalte statt statischer Plakate." intro="Digitale Displays machen Angebote, Services und Gesundheitsinformationen im Schaufenster oder Verkaufsraum sichtbar – flexibel und ohne neue Druckkosten." sectionTitle="Welche Inhalte sind möglich?" sectionText="Die Apotheke entscheidet, was gezeigt wird. DokTV erstellt und betreut die Ausspielung." items={["Monatsangebote", "OTC-Produkte", "Kosmetik & Pflege", "Saisonthemen", "Notdienst", "Herstellerkampagnen"]} image={{ src: "/referenzen/sky-apotheke-wedding-1.jpg", alt: "Digitales Werbedisplay der Sky Apotheke Wedding" }} secondaryHref="/schaufenster-display-apotheken" secondaryLabel="Apothekenlösung ansehen" />;
}
