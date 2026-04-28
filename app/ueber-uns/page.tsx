import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Über DokTV | Digital Signage für Apotheken & Praxen",
  description:
    "DokTV ist Ihr Partner für digitale Schaufenster Displays, Wartezimmer TV und Herstellerwerbung im Gesundheitsumfeld.",
};

const values = [
  "Klare Beratung statt komplizierter Technik",
  "Fokus auf Apotheken, Arztpraxen und Gesundheitswerbung",
  "Moderne Inhalte statt veralteter Aushänge",
  "Persönliche Betreuung und verständliche Umsetzung",
  "Digitale Sichtbarkeit für lokale Standorte",
  "Praxisnahe Lösungen für echte Alltagssituationen",
  "Content-Struktur statt leerer Bildschirme",
  "Lösungen für Berlin und deutschlandweit",
];

const focusAreas = [
  {
    title: "Schaufenster Displays für Apotheken",
    href: "/schaufenster-display-apotheken",
  },
  {
    title: "Wartezimmer TV für Arztpraxen",
    href: "/wartezimmer-tv-praxen",
  },
  {
    title: "Hersteller Werbung im Gesundheitsumfeld",
    href: "/hersteller-werbung",
  },
  {
    title: "Werbung Apotheke Display",
    href: "/werbung-apotheke-display",
  },
  {
    title: "Digital Signage Berlin",
    href: "/digital-signage-berlin",
  },
  {
    title: "Preise & Beratung",
    href: "/preise",
  },
];

const faqs = [
  {
    q: "Was ist DokTV?",
    a: "DokTV ist eine Digital Signage Lösung für Apotheken, Arztpraxen und Hersteller im Gesundheitsumfeld.",
  },
  {
    q: "Worauf ist DokTV spezialisiert?",
    a: "DokTV konzentriert sich auf digitale Schaufenster Displays, Wartezimmer TV und Herstellerwerbung in Apotheken und Praxen.",
  },
  {
    q: "Ist DokTV nur für Berlin?",
    a: "Nein. DokTV ist besonders für Berlin interessant, kann aber auch deutschlandweit eingesetzt werden.",
  },
  {
    q: "Hilft DokTV auch bei den Inhalten?",
    a: "Ja. Ein Display wirkt nur dann gut, wenn die Inhalte sinnvoll aufgebaut sind. Deshalb ist die Content-Struktur ein wichtiger Teil der Beratung.",
  },
];

export default function UeberUnsPage() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      <section className="bg-slate-950 px-6 py-28 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Über DokTV
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Digital Signage für Apotheken, Praxen und Gesundheitsmarken
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            DokTV unterstützt Apotheken, Arztpraxen und Hersteller dabei,
            Informationen, Angebote und Werbung über digitale Displays sichtbar
            zu machen. Unser Ziel ist eine moderne, verständliche und wirksame
            Kommunikation direkt am Standort.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-xl bg-blue-600 px-8 py-4 text-center font-bold text-white"
            >
              Kontakt aufnehmen
            </Link>

            <Link
              href="/schaufenster-display-apotheken"
              className="rounded-xl border border-white px-8 py-4 text-center font-bold text-white"
            >
              Lösungen ansehen
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-8 text-lg leading-9 text-slate-700">
          <p className="font-semibold text-blue-600">Warum DokTV?</p>

          <h2 className="text-3xl font-black text-slate-950 md:text-5xl">
            Warum DokTV entstanden ist
          </h2>

          <p>
            Viele Apotheken und Arztpraxen haben ein ähnliches Problem: Sie
            haben wichtige Informationen, Angebote oder Leistungen, aber diese
            werden im Alltag zu wenig wahrgenommen. Gedruckte Aushänge,
            klassische Plakate und einfache Aufsteller wirken oft veraltet oder
            gehen zwischen anderen Informationen unter.
          </p>

          <p>
            Gleichzeitig erwarten Kunden und Patienten heute eine moderne,
            klare und visuelle Kommunikation. Genau hier setzt DokTV an. Wir
            möchten Gesundheitsstandorte dabei unterstützen, ihre Inhalte besser
            sichtbar zu machen – im Schaufenster, im Wartezimmer, am Empfang
            oder direkt im Verkaufsbereich.
          </p>

          <p>
            Der Fokus liegt nicht nur auf Technik. Ein Bildschirm allein bringt
            noch keine Wirkung. Entscheidend ist, welche Inhalte gezeigt werden,
            wie sie aufgebaut sind und ob sie zur Zielgruppe, zum Standort und
            zum Alltag der Apotheke oder Praxis passen.
          </p>

          <p>
            Deshalb verbindet DokTV Technik, Beratung und Content-Struktur. Das
            Ziel ist nicht einfach ein Display, sondern eine digitale
            Kommunikationsfläche, die wirklich genutzt wird und im Alltag
            sichtbare Wirkung erzeugt.
          </p>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-600">Unser Ansatz</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Verständliche Lösungen statt komplizierter Systeme
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Digital Signage soll im Alltag helfen und nicht zusätzliche
              Arbeit verursachen. Deshalb setzen wir auf klare Beratung,
              verständliche Strukturen und Lösungen, die zu Apotheken,
              Arztpraxen und Herstellern im Gesundheitsbereich passen.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Wir betrachten nicht nur das Display, sondern auch den Standort,
              die Zielgruppe, die Inhalte und das gewünschte Ziel: mehr
              Sichtbarkeit, bessere Information oder gezielte Werbung.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Für Apotheken steht meistens das Schaufenster im Mittelpunkt. Für
              Arztpraxen geht es häufig um die Kommunikation im Wartezimmer. Für
              Hersteller ist entscheidend, in einem passenden Gesundheitsumfeld
              sichtbar zu werden.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-5 font-semibold text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-600">Unsere Schwerpunkte</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Spezialisiert auf digitale Kommunikation im Gesundheitsumfeld
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              DokTV richtet sich gezielt an Unternehmen, die im
              Gesundheitsbereich sichtbar werden möchten. Dazu gehören
              Apotheken, Arztpraxen, Gesundheitszentren, Hersteller,
              Dienstleister und Marken mit Bezug zu Gesundheit, Pflege und
              Wohlbefinden.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Statt eine allgemeine Display-Lösung für jeden Bereich anzubieten,
              konzentrieren wir uns auf konkrete Situationen im
              Gesundheitsmarkt: Kunden im Apotheken-Schaufenster, Patienten im
              Wartezimmer und Markenbotschaften direkt im relevanten Umfeld.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold shadow-sm transition hover:border-blue-300 hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl space-y-7 text-lg leading-9 text-slate-300">
          <p className="font-semibold text-blue-300">Berlin & deutschlandweit</p>

          <h2 className="text-3xl font-black text-white md:text-5xl">
            DokTV in Berlin und deutschlandweit
          </h2>

          <p>
            DokTV ist besonders für Standorte interessant, an denen Sichtbarkeit
            im Alltag eine große Rolle spielt. In Berlin betrifft das viele
            Apotheken, Arztpraxen und lokale Gesundheitsanbieter, die täglich
            mit hoher Konkurrenz und viel Laufkundschaft arbeiten.
          </p>

          <p>
            Gleichzeitig sind unsere Lösungen nicht auf Berlin beschränkt.
            Digital Signage kann deutschlandweit eingesetzt werden – überall
            dort, wo Inhalte über Displays professionell präsentiert werden
            sollen.
          </p>

          <p>
            Für lokale Suchanfragen haben wir zusätzlich eine eigene Seite zu{" "}
            <Link
              href="/digital-signage-berlin"
              className="font-bold text-blue-300 underline underline-offset-4"
            >
              Digital Signage Berlin
            </Link>
            . Dort geht es gezielt um digitale Displaylösungen für Apotheken,
            Praxen und lokale Unternehmen in Berlin.
          </p>

          <p>
            Unser Ziel ist es, digitale Displaylösungen verständlich,
            bezahlbar und wirksam zu machen. Nicht als technische Spielerei,
            sondern als echte Kommunikationsfläche für Unternehmen.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-8 text-lg leading-9 text-slate-700">
          <p className="font-semibold text-blue-600">Unsere Arbeitsweise</p>

          <h2 className="text-3xl font-black text-slate-950 md:text-5xl">
            Erst verstehen, dann sinnvoll umsetzen
          </h2>

          <p>
            Eine gute Digital Signage Lösung beginnt nicht mit dem Kauf eines
            Bildschirms. Sie beginnt mit der Frage, was sichtbar gemacht werden
            soll. Geht es um Angebote? Um Patienteninformationen? Um
            Herstellerkampagnen? Um einen besseren ersten Eindruck?
          </p>

          <p>
            Danach wird geprüft, wo das Display eingesetzt wird, welche Inhalte
            sinnvoll sind und wie häufig diese aktualisiert werden müssen. Erst
            daraus entsteht eine Lösung, die wirklich zum Standort passt.
          </p>

          <p>
            Wer direkt starten möchte, kann sich über unsere{" "}
            <Link
              href="/preise"
              className="font-bold text-blue-600 underline underline-offset-4"
            >
              Preise
            </Link>{" "}
            informieren oder über die{" "}
            <Link
              href="/kontakt"
              className="font-bold text-blue-600 underline underline-offset-4"
            >
              Kontaktseite
            </Link>{" "}
            eine Beratung anfragen.
          </p>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-semibold text-blue-600">FAQ</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Häufige Fragen zu DokTV
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-xl font-black">{faq.q}</h3>
                <p className="mt-4 leading-8 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black md:text-5xl">
            Lernen Sie DokTV kennen
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Lassen Sie uns gemeinsam prüfen, welche digitale Displaylösung zu
            Ihrem Standort oder Ihrer Kampagne passt.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-flex rounded-2xl bg-white px-10 py-5 font-black text-blue-700 shadow-2xl transition hover:bg-slate-100"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}