import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Wartezimmer TV Arztpraxis | Digital Signage für Praxen – DokTV",
  description:
    "Wartezimmer TV für Arztpraxen: Patienten informieren, Wartezeiten angenehmer gestalten und Praxisleistungen modern präsentieren.",
};

const benefits = [
  "Patienten während der Wartezeit informieren",
  "Praxisleistungen verständlich präsentieren",
  "Moderne und professionelle Praxiswirkung",
  "Wartezeit angenehmer gestalten",
  "Flexible Inhalte ohne neue Aushänge",
  "Gesundheitsthemen sichtbar erklären",
  "Organisatorische Hinweise digital anzeigen",
  "Bessere Kommunikation direkt in der Praxis",
];

const useCases = [
  "Praxisvorstellung",
  "Leistungen und Behandlungen",
  "Gesundheitstipps",
  "Saisonale Themen",
  "Grippe- und Allergiehinweise",
  "Organisatorische Informationen",
  "Privatleistungen",
  "Vorsorgeuntersuchungen",
  "Patientenaufklärung",
];

const practiceTypes = [
  "Hausarztpraxen",
  "Facharztpraxen",
  "Zahnarztpraxen",
  "Kinderarztpraxen",
  "Physiotherapien",
  "Medizinische Versorgungszentren",
  "Privatpraxen",
  "Gesundheitszentren",
];

const faqs = [
  {
    q: "Was ist Wartezimmer TV?",
    a: "Wartezimmer TV ist ein digitales Informationssystem für Arztpraxen. Über Bildschirme im Wartebereich können Patienten über Leistungen, Hinweise, Gesundheitsthemen und Praxisabläufe informiert werden.",
  },
  {
    q: "Für welche Arztpraxen eignet sich Wartezimmer TV?",
    a: "Wartezimmer TV eignet sich für Hausarztpraxen, Facharztpraxen, Zahnarztpraxen, Kinderarztpraxen, Privatpraxen, MVZ und Gesundheitszentren.",
  },
  {
    q: "Welche Inhalte kann eine Praxis zeigen?",
    a: "Eine Praxis kann Leistungen, Behandlungen, Vorsorgeangebote, organisatorische Hinweise, Gesundheitstipps, saisonale Themen und individuelle Praxisinformationen zeigen.",
  },
  {
    q: "Lohnt sich Wartezimmer TV für kleinere Praxen?",
    a: "Ja, besonders wenn Patienten regelmäßig im Wartezimmer sitzen. Schon ein gut platzierter Bildschirm kann die Kommunikation verbessern und die Praxis moderner wirken lassen.",
  },
];

export default function WartezimmerTvPraxenPage() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      <section className="bg-slate-950 px-6 py-28 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Digital Signage für Arztpraxen
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Wartezimmer TV für Arztpraxen – Patienten modern informieren
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Mit Wartezimmer TV informieren Arztpraxen ihre Patienten direkt im
            Wartebereich. Praxisleistungen, Gesundheitsthemen, organisatorische
            Hinweise und wichtige Informationen werden modern, verständlich und
            professionell dargestellt.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-xl bg-blue-600 px-8 py-4 text-center font-bold text-white"
            >
              Beratung anfragen
            </Link>

            <Link
              href="/preise"
              className="rounded-xl border border-white px-8 py-4 text-center font-bold text-white"
            >
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_420px]">
          <div className="space-y-8 text-lg leading-9 text-slate-700">
            <p className="font-semibold text-blue-600">Warum Wartezimmer TV?</p>

            <h2 className="text-3xl font-black text-slate-950 md:text-5xl">
              Digitale Patienteninformation direkt im Wartezimmer
            </h2>

            <p>
              In vielen Arztpraxen entstehen Wartezeiten. Diese Zeit bleibt oft
              ungenutzt, obwohl sie ideal dafür geeignet ist, Patienten
              verständlich zu informieren. Klassische Aushänge werden häufig
              übersehen, wirken schnell veraltet und lassen sich nur mit Aufwand
              aktualisieren.
            </p>

            <p>
              Wartezimmer TV schafft hier eine moderne Lösung. Patienten können
              während der Wartezeit über Praxisleistungen, Vorsorgeangebote,
              Behandlungen, Abläufe und Gesundheitsthemen informiert werden.
              Dadurch entsteht ein besseres Verständnis für die Praxis und ihre
              Leistungen.
            </p>

            <p>
              Gleichzeitig wirkt die Praxis strukturierter und professioneller.
              Ein digitales Informationssystem zeigt, dass die Praxis modern
              kommuniziert und Patienten ernst nimmt.
            </p>

            <p>
              Für Arztpraxen ist Wartezimmer TV deshalb nicht nur ein Bildschirm
              zur Unterhaltung, sondern ein echter Kommunikationskanal im Alltag.
            </p>
          </div>

          <aside className="rounded-3xl bg-slate-100 p-8">
            <h3 className="text-2xl font-black text-slate-950">
              Geeignet für
            </h3>

            <div className="mt-6 grid gap-3">
              {practiceTypes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white px-5 py-4 font-semibold text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="font-semibold text-blue-600">Vorteile</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Vorteile von Wartezimmer TV für Arztpraxen
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Ein digitales Wartezimmer TV verbessert die Kommunikation zwischen
              Praxis und Patienten. Informationen werden sichtbarer, moderner
              und leichter verständlich präsentiert.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-6 font-semibold shadow"
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
            <p className="font-semibold text-blue-600">Inhalte</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Welche Inhalte können Praxen auf Wartezimmer TV zeigen?
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Wartezimmer TV ist besonders stark, wenn Inhalte regelmäßig
              angepasst werden. Praxen können saisonale Gesundheitsthemen,
              organisatorische Hinweise und eigene Leistungen gezielt
              präsentieren.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Statt Patienten nur warten zu lassen, kann die Praxis wichtige
              Informationen verständlich erklären. Das spart Rückfragen,
              verbessert die Wahrnehmung der Praxis und macht Leistungen
              sichtbarer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl space-y-7 text-lg leading-9 text-slate-300">
          <p className="font-semibold text-blue-300">Wartezimmer TV Berlin</p>

          <h2 className="text-3xl font-black text-white md:text-5xl">
            Wartezimmer TV für Arztpraxen in Berlin und deutschlandweit
          </h2>

          <p>
            Besonders in Berlin ist der Wettbewerb zwischen Arztpraxen,
            Gesundheitszentren und medizinischen Dienstleistern hoch. Patienten
            erwarten nicht nur eine gute Behandlung, sondern auch eine moderne,
            klare und professionelle Praxisumgebung.
          </p>

          <p>
            Ein Wartezimmer TV kann dabei helfen, die Praxis moderner wirken zu
            lassen und gleichzeitig wichtige Informationen strukturiert zu
            vermitteln. Besonders bei Praxen mit vielen Patienten, längeren
            Wartezeiten oder mehreren Leistungen ist ein digitales
            Informationssystem sinnvoll.
          </p>

          <p>
            Ergänzend dazu finden Sie weitere Informationen auf unserer lokalen
            SEO-Seite zu{" "}
            <Link
              href="/digital-signage-berlin"
              className="font-bold text-blue-300 underline underline-offset-4"
            >
              Digital Signage Berlin
            </Link>
            .
          </p>

          <p>
            Für Apotheken bieten wir zusätzlich eigene Lösungen für{" "}
            <Link
              href="/schaufenster-display-apotheken"
              className="font-bold text-blue-300 underline underline-offset-4"
            >
              Schaufenster Displays für Apotheken
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-8 text-lg leading-9 text-slate-700">
          <p className="font-semibold text-blue-600">Praxiskommunikation</p>

          <h2 className="text-3xl font-black text-slate-950 md:text-5xl">
            Warum ein Bildschirm allein nicht reicht
          </h2>

          <p>
            Viele Praxen denken bei Wartezimmer TV zuerst an einen Fernseher im
            Wartebereich. Entscheidend ist aber nicht nur der Bildschirm,
            sondern der Inhalt. Ein Display bringt nur dann Wirkung, wenn die
            gezeigten Informationen zur Praxis, zur Zielgruppe und zum Alltag
            passen.
          </p>

          <p>
            DokTV unterstützt deshalb nicht nur bei der technischen Umsetzung,
            sondern auch bei der Content-Struktur. Welche Leistungen sollen
            sichtbar werden? Welche Hinweise werden häufig vergessen? Welche
            Informationen können Patienten schon vor dem Termin verstehen?
            Genau diese Fragen sind wichtig.
          </p>

          <p>
            So wird aus einem einfachen Bildschirm ein sinnvolles digitales
            Informationssystem für die Arztpraxis.
          </p>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-600">Kosten & Beratung</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Was kostet Wartezimmer TV für eine Praxis?
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Die Kosten hängen davon ab, ob nur ein Display eingesetzt werden
              soll, wie umfangreich die Inhalte sind und ob eine laufende
              Betreuung gewünscht ist. Auch die Größe der Praxis und die Anzahl
              der Standorte spielen eine Rolle.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Einen ersten Überblick finden Sie auf unserer Seite zu{" "}
              <Link
                href="/preise"
                className="font-bold text-blue-600 underline underline-offset-4"
              >
                Digital Signage Preisen
              </Link>
              . Für eine genaue Einschätzung ist eine kurze Beratung sinnvoll.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-black">
              Typische Fragen vor dem Start
            </h3>

            <ul className="mt-6 space-y-4 leading-8 text-slate-700">
              <li>• Wie groß ist das Wartezimmer?</li>
              <li>• Wie viele Patienten warten täglich?</li>
              <li>• Welche Leistungen sollen sichtbarer werden?</li>
              <li>• Gibt es saisonale Gesundheitsthemen?</li>
              <li>• Soll DokTV bei Content und Gestaltung unterstützen?</li>
              <li>• Wird eine einzelne Praxis oder mehrere Standorte betreut?</li>
            </ul>

            <Link
              href="/kontakt"
              className="mt-8 inline-flex rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white"
            >
              Beratung anfragen
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-semibold text-blue-600">FAQ</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Häufige Fragen zu Wartezimmer TV
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
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
            Wartezimmer TV für Ihre Praxis planen
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Lassen Sie uns gemeinsam prüfen, welche digitale Displaylösung zu
            Ihrer Praxis passt.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-flex rounded-2xl bg-white px-10 py-5 font-black text-blue-700 shadow-2xl transition hover:bg-slate-100"
          >
            Beratung anfragen
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}