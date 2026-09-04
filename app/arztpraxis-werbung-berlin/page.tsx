import SeoLanding from "../components/SeoLanding";

export const metadata = { title: "Arztpraxis Werbung Berlin | Wartezimmer TV | DokTV", description: "Wartezimmer TV und digitale Patienteninformation für Arztpraxen in Berlin." };

export default function Page() {
  return <SeoLanding eyebrow="Für Berliner Praxen" title="Wartezimmer TV für moderne Patientenkommunikation." intro="Nutzen Sie die Wartezeit für klare Informationen zu Leistungen, Vorsorge und Praxisabläufen – professionell gestaltet und aktuell gehalten." sectionTitle="Ein Kanal für Ihre Praxis" sectionText="Gut lesbar, ruhig gestaltet und auf Ihre Patienten abgestimmt." items={["Patienteninformation", "Praxisleistungen", "Vorsorge", "Organisatorische Hinweise", "Gesundheitsthemen", "Laufende Aktualisierung"]} secondaryHref="/wartezimmer-tv-praxen" secondaryLabel="Wartezimmer TV ansehen" />;
}
