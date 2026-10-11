import SeoLanding from "../../components/SeoLanding";
import { publicPageMetadata } from "../../lib/seo/public-metadata";

export const metadata = publicPageMetadata("/werbung-apotheke-display", "Digitale Werbeinhalte für Apotheken-Displays | DokTV", "Digitale Apothekenwerbung: Angebote, Services und saisonale Themen auf Displays im Schaufenster oder Verkaufsraum aktuell halten.", "/referenzen/sky-apotheke-wedding-1.jpg");

export default function WerbungApothekeDisplayPage() {
  return <SeoLanding eyebrow="Werbung im Apotheken-Display" title="Aktuelle Inhalte statt statischer Plakate." intro="Digitale Displays machen Angebote, Services und Gesundheitsinformationen im Schaufenster oder Verkaufsraum sichtbar – flexibel und ohne neue Druckkosten." sectionTitle="Welche Inhalte sind möglich?" sectionText="Die Apotheke entscheidet, was gezeigt wird. DokTV erstellt und betreut die Ausspielung." items={["Monatsangebote", "OTC-Produkte", "Kosmetik & Pflege", "Saisonthemen", "Notdienst", "Herstellerkampagnen"]} image={{ src: "/referenzen/sky-apotheke-wedding-1.jpg", alt: "Digitales Werbedisplay der Sky Apotheke Wedding" }} secondaryHref="/apotheken#schaufenster" secondaryLabel="Apothekenlösung ansehen" />;
}
