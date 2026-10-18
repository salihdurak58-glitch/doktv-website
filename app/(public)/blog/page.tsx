import { generatePageMetadata } from "@/app/lib/seo/get-page-seo";
import Link from "next/link";

export async function generateMetadata() {
  return generatePageMetadata("/blog", {
    title: "DokTV Blog: Digital Signage & Apothekenwerbung",
    description: "Ratgeber zu Apotheken-Displays, Schaufensterwerbung und lokalem Marketing: Einsatzorte, Inhalte und Planung verständlich erklärt.",
  });
}

const posts = [
  { title: "Digital Signage für Apotheken", description: "Grundlagen zur Planung: Welche Aufgabe soll ein Display übernehmen und wie passen Einsatzort, Inhalte und Betreuung zusammen?", href: "/blog/digital-signage-apotheke", label: "Grundlagen zu Digital Signage lesen" },
  { title: "Schaufenster-Displays für Apotheken", description: "Die vorgesehene Displayfläche aus Sicht der Passanten betrachten und die Gestaltung auf die Blicksituation abstimmen.", href: "/blog/schaufenster-display-apotheke", label: "Ratgeber zu Schaufenster-Displays lesen" },
  { title: "Apotheken-Marketing in Berlin", description: "Lokale Kommunikation planen und die eigenen Angebote über Schaufenster, Verkaufsraum und weitere Kontaktpunkte verständlich zeigen.", href: "/blog/apotheken-marketing-berlin", label: "Berliner Apotheken-Marketing kennenlernen" },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-[1320px] px-6 py-16 sm:py-20 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-wider text-teal-700">Wissen und Planung</p>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">DokTV Blog: Digital Signage und Apothekenwerbung.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Sie planen ein Display für Ihre Apotheke und möchten die Möglichkeiten einordnen? Unsere Ratgeber erklären Einsatzorte, Inhalte und wichtige Entscheidungen vor der Umsetzung. Wählen Sie das Thema, das zu Ihrem nächsten Planungsschritt passt.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => <article key={post.href} className="surface-card p-7"><h2 className="text-xl font-extrabold text-slate-950"><Link href={post.href} className="hover:text-teal-700">{post.title}</Link></h2><p className="mt-4 leading-7 text-slate-600">{post.description}</p><Link href={post.href} className="mt-6 inline-block text-sm font-bold text-teal-700 underline-offset-4 hover:underline">{post.label} →</Link></article>)}
        </div>
        <section className="mt-16 grid gap-8 border-t border-slate-200 pt-12 lg:grid-cols-2" aria-labelledby="start-heading">
          <div><h2 id="start-heading" className="text-2xl font-extrabold text-slate-950">Mit welcher Frage sollten Sie anfangen?</h2><p className="mt-5 leading-8 text-slate-600">Beginnen Sie mit der Aufgabe des Displays: Soll ein Schaufenster auf ein Angebot aufmerksam machen, soll im Verkaufsraum ein Service erklärt werden oder benötigen Sie Patienteninformation im Wartezimmer? Erst danach lassen sich Technik und Gestaltung sinnvoll vergleichen.</p><p className="mt-4 leading-8 text-slate-600">Für ein Gespräch helfen Fotos des geplanten Einsatzorts, vorhandene technische Angaben und eine erste Themenliste. Ein Ratgeber bietet Orientierung; verbindliche Geräteangaben und Projektbedingungen gehören in Ihr individuelles Angebot.</p></div>
          <div className="rounded-3xl bg-teal-50 p-7"><h2 className="text-2xl font-extrabold text-slate-950">Von der Orientierung zur konkreten Lösung</h2><p className="mt-5 leading-8 text-slate-600">Die Leistungsseiten ergänzen die Ratgeber um das DokTV-Angebot. Dort finden Sie Displaygrößen, Betreuung und die optionale Notdienstanzeige. Die Referenzseite zeigt dokumentierte Installationen und hilft beim Vergleich unterschiedlicher Einsatzsituationen.</p><nav aria-label="Passende DokTV-Angebote" className="mt-6 flex flex-col gap-4 font-bold text-teal-800"><Link href="/apotheken">Digital Signage für Apotheken →</Link><Link href="/wartezimmer-tv-praxen">Wartezimmer-TV für Praxen →</Link><Link href="/preise">Hardware und monatliche Preise →</Link><Link href="/referenzen">Reale Installationen ansehen →</Link></nav></div>
        </section>
      </section>
    </main>
  );
}
