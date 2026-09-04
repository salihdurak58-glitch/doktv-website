import SeoLanding from "../components/SeoLanding";

export const metadata = { title: "Wartezimmer TV für Arztpraxen | DokTV", description: "Digitale Patienteninformation im Wartezimmer – gestaltet und betreut von DokTV." };

export default function ArztpraxenPage() {
  return <SeoLanding eyebrow="Für Arztpraxen" title="Digitale Patienteninformation für Ihr Wartezimmer." intro="Informieren Sie verständlich über Leistungen, Vorsorge und Praxisabläufe. DokTV kümmert sich um Technik, Gestaltung und Aktualisierung." sectionTitle="Inhalte für Ihre Praxis" sectionText="Ein ruhiges Programm, das Patienten informiert und Ihr Team unterstützt." items={["Praxisleistungen", "Vorsorgehinweise", "Gesundheitstipps", "Abläufe & Termine", "Praxisvorstellung", "Saisonale Themen"]} secondaryHref="/wartezimmer-tv-praxen" secondaryLabel="Mehr zu Wartezimmer TV" />;
}
