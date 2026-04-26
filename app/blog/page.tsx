import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "DokTV Blog | Digital Signage, Apotheken-Marketing & Sichtbarkeit",
  description:
    "Wissen rund um Digital Signage, Apotheken-Marketing, Schaufenster-Displays und lokale Sichtbarkeit für Apotheken und Arztpraxen.",
  alternates: {
    canonical: "https://doktv.de/blog",
  },
};

const posts = [
  {
    title: "Digital Signage für Apotheken: Warum digitale Displays wirken",
    slug: "digital-signage-apotheke",
    description:
      "Wie Apotheken mit digitalen Displays mehr Aufmerksamkeit, bessere Kundeninformation und stärkere Sichtbarkeit erreichen.",
  },
  {
    title: "Schaufenster-Display Apotheke: Mehr Sichtbarkeit am Standort",
    slug: "schaufenster-display-apotheke",
    description:
      "Warum das Apothekenschaufenster eine der wichtigsten Werbeflächen für lokale Kunden ist.",
  },
  {
    title: "Apotheken-Marketing in Berlin: Lokal sichtbar werden",
    slug: "apotheken-marketing-berlin",
    description:
      "Wie Berliner Apotheken mit Website, Google Unternehmensprofil und Digital Signage mehr Anfragen gewinnen.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-slate-950 text-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-700/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-200">
            DokTV Blog
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Digital Signage, Apotheken-Marketing & lokale Sichtbarkeit
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            In unserem Blog zeigen wir, wie Apotheken, Arztpraxen und lokale
            Unternehmen mit Digital Signage mehr Aufmerksamkeit erzeugen,
            professioneller wirken und gezielt mehr Kunden gewinnen können.
            Alle Inhalte sind praxisnah, verständlich und direkt umsetzbar.
          </p>
        </div>
      </section>

      {/* BLOG CARDS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10"
            >
              <div className="mb-4 text-sm text-blue-300">
                Blog Artikel
              </div>

              <h2 className="text-2xl font-bold leading-tight group-hover:text-blue-400">
                {post.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                {post.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-blue-400 font-semibold">
                  Beitrag lesen →
                </span>

                <span className="text-xs text-slate-500">
                  5 min lesen
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SEO TEXT */}
      <section className="bg-white text-slate-900 py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-6 text-lg leading-8">
          <h2 className="text-3xl font-bold">
            Digital Signage & Marketing für Apotheken und Arztpraxen verstehen
          </h2>

          <p>
            Die Anforderungen an lokale Unternehmen haben sich in den letzten
            Jahren stark verändert. Kunden informieren sich online, vergleichen
            Angebote und erwarten gleichzeitig vor Ort einen modernen und
            professionellen Eindruck. Genau hier setzt Digital Signage an.
          </p>

          <p>
            Digitale Displays im Schaufenster oder im Innenbereich bieten eine
            Möglichkeit, Inhalte flexibel darzustellen und gezielt auf Kunden
            einzugehen. Besonders Apotheken profitieren davon, da sie regelmäßig
            wechselnde Angebote, Gesundheitskampagnen und Serviceleistungen
            kommunizieren müssen.
          </p>

          <p>
            Auch Arztpraxen nutzen zunehmend digitale Lösungen, um Patienten
            besser zu informieren und gleichzeitig den Empfang zu entlasten.
            Hinweise zu Sprechzeiten, Leistungen oder organisatorischen Abläufen
            lassen sich klar und verständlich darstellen.
          </p>

          <p>
            Neben der klassischen Nutzung vor Ort spielt auch die digitale
            Sichtbarkeit eine immer größere Rolle. Eine Kombination aus Website,
            Google Präsenz und Digital Signage sorgt dafür, dass Unternehmen
            sowohl online als auch offline sichtbar sind und Vertrauen
            aufbauen.
          </p>

          <p>
            Unser Blog zeigt konkrete Strategien, Beispiele und Ansätze, wie
            lokale Unternehmen diese Möglichkeiten nutzen können. Dabei geht es
            nicht um Theorie, sondern um praktische Lösungen, die sich direkt im
            Alltag umsetzen lassen.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">
            Mehr Sichtbarkeit für dein Geschäft
          </h2>

          <p className="mt-4 text-blue-100">
            Lass uns gemeinsam schauen, wie Digital Signage bei dir eingesetzt
            werden kann – kostenlos und unverbindlich.
          </p>

          <a
            href="/kontakt"
            className="mt-8 inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-slate-100 transition"
          >
            Jetzt Beratung anfragen
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}