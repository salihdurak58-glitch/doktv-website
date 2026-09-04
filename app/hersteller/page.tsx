import SeoLanding from "../components/SeoLanding";

export const metadata = { title: "Gesundheitswerbung für Hersteller | DokTV", description: "Digitale Herstellerkampagnen an passenden Kontaktpunkten in Apotheken und Praxen." };

export default function HerstellerPage() {
  return <SeoLanding eyebrow="Für Hersteller" title="Werben Sie dort, wo Gesundheit bereits Thema ist." intro="DokTV plant digitale Herstellerkampagnen für ausgewählte Apotheken und Praxen – mit nachvollziehbarer Standortauswahl und abgestimmten Inhalten." sectionTitle="Geeignet für Gesundheitsmarken" sectionText="Wir prüfen Relevanz, Region und Freigabe gemeinsam mit den teilnehmenden Standorten." items={["OTC-Produkte", "Nahrungsergänzung", "Kosmetik", "Pflegeprodukte", "Gesundheitsservices", "Saisonale Kampagnen"]} image={{ src: "/referenzen/sky-apotheke-wedding-1.jpg", alt: "Sky Apotheke Wedding als DokTV Standort" }} primaryLabel="Kampagne anfragen" secondaryHref="/standorte" secondaryLabel="Standorte ansehen" />;
}
