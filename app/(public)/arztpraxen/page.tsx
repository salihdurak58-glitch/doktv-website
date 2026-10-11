import SeoLanding from "../../components/SeoLanding";
import { publicPageMetadata } from "../../lib/seo/public-metadata";

export const metadata = publicPageMetadata("/arztpraxen", "Digitale Patienteninformation für Praxen | DokTV", "Digitale Patienteninformation im Wartezimmer: Praxisleistungen, Vorsorge und Abläufe verständlich zeigen – mit Gestaltung und Betreuung von DokTV.");

export default function ArztpraxenPage() {
  return <SeoLanding eyebrow="Für Arztpraxen" title="Digitale Patienteninformation für Ihr Wartezimmer." intro="Informieren Sie verständlich über Leistungen, Vorsorge und Praxisabläufe. DokTV kümmert sich um Technik, Gestaltung und Aktualisierung." sectionTitle="Inhalte für Ihre Praxis" sectionText="Ein ruhiges Programm, das Patienten informiert und Ihr Team unterstützt." items={["Praxisleistungen", "Vorsorgehinweise", "Gesundheitstipps", "Abläufe & Termine", "Praxisvorstellung", "Saisonale Themen"]} itemDescriptions={["Erklären Sie eigene Leistungen in verständlichen Worten und gut lesbaren Schritten.", "Vorsorgethemen sollten fachlich geprüft und für Ihre Patientengruppe relevant sein.", "Zeigen Sie nur Hinweise, die Ihr Praxisteam inhaltlich freigegeben hat.", "Sprechzeiten, Terminabläufe und organisatorische Hinweise lassen sich aktuell halten.", "Stellen Sie Team und Praxisräume vor, ohne das Wartezimmer zu überladen.", "Passen Sie Themen an Jahreszeit und Bedarf Ihrer Praxis an."]} secondaryHref="/wartezimmer-tv-praxen" secondaryLabel="Mehr zu Wartezimmer TV" />;
}
