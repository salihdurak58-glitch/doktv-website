import SeoLanding from "../../components/SeoLanding";
import { generatePageMetadata } from "../../lib/seo/get-page-seo";
import { doktvReferences } from "../../lib/references";
import { Container } from "../../components/PublicUI";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  return generatePageMetadata("/digital-signage-berlin", {
    title: "Digital Signage Berlin | Echte Referenzen – DokTV",
    description: "Digital Signage für Berliner Gesundheitsstandorte: Displays, Inhalte und Betreuung mit echten Apothekenreferenzen aus Wedding, Kreuzberg und vom Kurfürstendamm.",
    image: "/referenzen/sky-apotheke-kudamm-1.jpg",
  });
}

export default function Page() {
  return <SeoLanding eyebrow="Digital Signage Berlin" title="Digitale Sichtbarkeit für Gesundheitsstandorte in Berlin." intro="DokTV verbindet gut platzierte Displays mit professionellen Inhalten. Unsere Berliner Referenzen zeigen, wie digitale Kommunikation im realen Umfeld wirkt." sectionTitle="Für Schaufenster, Wartebereich und Kampagne" sectionText="Wir planen die Lösung passend zum Standort und betreuen sie im laufenden Betrieb." items={["Standortberatung", "Displaytechnik", "Montage", "Content-Erstellung", "Digitale Ausspielung", "Persönliche Betreuung"]} itemDescriptions={["Wir prüfen Fläche, Sichtachse und Einsatzziel vor der Auswahl eines Displays.", "Displaygröße und Platzierung werden passend zum jeweiligen Standort abgestimmt.", "Die Einrichtung wird mit den Anforderungen des Standorts geplant.", "Botschaften werden gut lesbar und passend zur Apotheke oder Praxis gestaltet.", "Freigegebene Inhalte können zeitnah gewechselt und aktualisiert werden.", "Für Änderungen und Fragen bleibt ein Ansprechpartner erreichbar."]} image={{ src: "/referenzen/sky-apotheke-kudamm-1.jpg", alt: "Digital Signage Referenz in Berlin am Kurfürstendamm" }} secondaryHref="/referenzen" secondaryLabel="Referenzen ansehen">
    <section className="bg-[#f7faf9] py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[.14em] text-teal-700">Reale Installationen</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Digital Signage an drei Berliner Apothekenstandorten.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Die folgenden Bilder zeigen echte DokTV-Schaufensterdisplays. So können Sie Platzierung und Darstellung am Standort beurteilen, statt sich nur auf Visualisierungen zu verlassen.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {doktvReferences.map((reference) => <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white" key={reference.title}>
            <div className="relative aspect-[4/3]"><Image src={reference.images[0].src} alt={reference.images[0].alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
            <div className="p-6"><p className="text-sm font-bold text-teal-700">{reference.location}</p><h3 className="mt-2 text-xl font-black text-slate-950">{reference.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{reference.summary}</p></div>
          </article>)}
        </div>
        <Link className="mt-8 inline-block font-bold text-teal-700 underline underline-offset-4" href="/referenzen">Alle Berliner Installationen im Detail ansehen</Link>
      </Container>
    </section>
  </SeoLanding>;
}
