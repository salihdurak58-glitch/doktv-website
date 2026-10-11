import SeoLanding from "../../components/SeoLanding";
import { publicPageMetadata } from "../../lib/seo/public-metadata";
import { Container } from "../../components/PublicUI";
import Link from "next/link";

export const metadata = publicPageMetadata("/arztpraxis-werbung-berlin", "Arztpraxis-Werbung Berlin | Wartezimmer-TV – DokTV", "Wartezimmer-TV für Berliner Arztpraxen: Praxisleistungen und Patienteninformationen klar darstellen und laufend aktualisieren lassen.");

export default function Page() {
  return <SeoLanding eyebrow="Für Berliner Praxen" title="Wartezimmer TV für moderne Patientenkommunikation." intro="Nutzen Sie die Wartezeit für klare Informationen zu Leistungen, Vorsorge und Praxisabläufen – professionell gestaltet und aktuell gehalten." sectionTitle="Ein Kanal für Ihre Praxis" sectionText="Gut lesbar, ruhig gestaltet und auf Ihre Patienten abgestimmt." items={["Patienteninformation", "Praxisleistungen", "Vorsorge", "Organisatorische Hinweise", "Gesundheitsthemen", "Laufende Aktualisierung"]} itemDescriptions={["Wichtige Hinweise können ohne volle Aushangflächen vermittelt werden.", "Erklären Sie Angebote und Abläufe in einer verständlichen Reihenfolge.", "Präventionsthemen benötigen klare, fachlich geprüfte Formulierungen.", "Sprechzeiten, Terminabläufe und Hinweise lassen sich aktualisieren.", "Die Praxis entscheidet, welche Inhalte medizinisch und rechtlich passend sind.", "Inhalte können nach Freigabe der Praxis gewechselt werden."]} secondaryHref="/wartezimmer-tv-praxen" secondaryLabel="Wartezimmer TV ansehen">
    <section className="bg-[#f7faf9] py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div><p className="text-sm font-black uppercase tracking-[.14em] text-teal-700">Für Berliner Arztpraxen</p><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Was im Wartezimmer wirklich zählt.</h2></div>
        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>Patientinnen und Patienten sollen Informationen auch aus einiger Entfernung erfassen können. Deshalb werden Schriftgrößen, Kontrast und ein ruhiger Wechsel der Inhalte an Raum und Sitzbereich angepasst. Für die Auswahl medizinischer Aussagen bleibt Ihre Praxis verantwortlich.</p>
          <p>Unsere öffentlich gezeigten Installationen stammen derzeit aus Berliner Apotheken; wir stellen sie nicht als Praxisreferenzen dar. Ob ein Bildschirm zu Ihren Räumen passt, klären wir in einem persönlichen Gespräch. <Link className="font-bold text-teal-700 underline underline-offset-4" href="/wartezimmer-tv-praxen">Mehr zum Wartezimmer-TV</Link> und zu den möglichen Inhalten.</p>
        </div>
      </Container>
    </section>
  </SeoLanding>;
}
