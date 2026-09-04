import SeoLanding from "../components/SeoLanding";

export const metadata = { title: "Digital Signage Berlin | DokTV", description: "Digital Signage in Berlin für Apotheken, Praxen und Gesundheitsmarken – mit realen Referenzen und persönlicher Betreuung." };

export default function Page() {
  return <SeoLanding eyebrow="Digital Signage Berlin" title="Digitale Sichtbarkeit für Gesundheitsstandorte in Berlin." intro="DokTV verbindet gut platzierte Displays mit professionellen Inhalten. Unsere Berliner Referenzen zeigen, wie digitale Kommunikation im realen Umfeld wirkt." sectionTitle="Für Schaufenster, Wartebereich und Kampagne" sectionText="Wir planen die Lösung passend zum Standort und betreuen sie im laufenden Betrieb." items={["Standortberatung", "Displaytechnik", "Montage", "Content-Erstellung", "Digitale Ausspielung", "Persönliche Betreuung"]} image={{ src: "/referenzen/sky-apotheke-kudamm-1.jpg", alt: "Digital Signage Referenz in Berlin am Kurfürstendamm" }} secondaryHref="/referenzen" secondaryLabel="Referenzen ansehen" />;
}
