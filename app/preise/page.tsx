import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Digital Signage Preise | DokTV Berlin",
  description:
    "Digital Signage Preise für Apotheken, Arztpraxen und lokale Geschäfte in Berlin. Transparente Pakete, Beratung und individuelle Angebote von DokTV.",
  alternates: {
    canonical: "https://doktv.de/preise",
  },
};

const packages = [
  {
    name: "Starter",
    price: "ab 149 €",
    note: "monatlich",
    text: "Für kleine Geschäfte, die mit einem professionellen Display starten möchten.",
    features: [
      "1 Display-Konzept",
      "Basis-Beratung",
      "Start-Design für Inhalte",
      "Geeignet für Schaufenster",
      "Einfache Angebotsdarstellung",
    ],
  },
  {
    name: "Business",
    price: "ab 249 €",
    note: "monatlich",
    text: "Für Apotheken, Arztpraxen und Geschäfte, die regelmäßig Inhalte zeigen möchten.",
    features: [
      "Strategische Beratung",
      "Mehrere Content-Vorlagen",
      "Angebote & Aktionen",
      "Saisonale Kampagnen",
      "Optimierung für bessere Wirkung",
      "Ideal für Apotheken & Praxen",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "Individuell",
    note: "auf Anfrage",
    text: "Für Unternehmen mit mehreren Standorten oder anspruchsvoller Content-Strategie.",
    features: [
      "Mehrere Displays oder Standorte",
      "Individuelle Kampagnenplanung",
      "Laufende Content-Betreuung",
      "SEO- und Website-Verknüpfung",
      "Premium Design",
      "Persönliche Betreuung",
    ],
  },
];

const included = [
  "Kostenlose Erstberatung",
  "Analyse deines Standorts",
  "Empfehlung zur passenden Display-Lösung",
  "Struktur für Angebote und Inhalte",
  "Design-orientierte Umsetzung",
  "Beratung für Apotheken, Arztpraxen und lokale Geschäfte",
  "Klare Handlungsempfehlung",
  "Optional laufende Betreuung",
];

const factors = [
  {
    title: "Display-Größe",
    text: "Ein kleines Display für den Innenbereich ist günstiger als ein großes, helles Schaufenster-Display.",
  },
  {
    title: "Standort & Einsatzbereich",
    text: "Schaufenster, Wartebereich, Empfang oder Verkaufsraum haben unterschiedliche Anforderungen.",
  },
  {
    title: "Content-Umfang",
    text: "Je mehr Angebote, Kampagnen und Vorlagen benötigt werden, desto höher ist der Aufwand.",
  },
  {
    title: "Betreuung",
    text: "Einmalige Einrichtung ist günstiger als laufende Pflege, Anpassung und Optimierung.",
  },
];

const faqs = [
  {
    q: "Was kostet Digital Signage?",
    a: "Die Kosten hängen von Display-Größe, Standort, Content-Umfang und Betreuung ab. Kleine Lösungen starten günstiger, während größere Schaufenster-Lösungen individuell kalkuliert werden.",
  },
  {
    q: "Gibt es monatliche Kosten?",
    a: "Ja, je nach Paket können monatliche Kosten für Betreuung, Content-Pflege, Kampagnenplanung oder technische Verwaltung entstehen.",
  },
  {
    q: "Kann ich erstmal klein starten?",
    a: "Ja. Viele Kunden starten mit einer einfachen Lösung und erweitern später Inhalte, Kampagnen oder weitere Displays.",
  },
  {
    q: "Ist die Beratung kostenlos?",
    a: "Ja. Die Erstberatung ist kostenlos und unverbindlich. Danach erhältst du eine Empfehlung, welche Lösung zu deinem Standort passt.",
  },
  {
    q: "Lohnt sich Digital Signage für kleine Geschäfte?",
    a: "Ja, besonders wenn Laufkundschaft vorhanden ist. Ein gutes Display kann Aufmerksamkeit erzeugen, Angebote sichtbarer machen und mehr Kundenkontakt schaffen.",
  },
];

export default function PreisePage() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      <section className="bg-slate-950 px-6 py-28 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Digital Signage Preise
          </p>

          <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            Transparente Preise für Digital Signage in Berlin
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-300">
            Jede Digital-Signage-Lösung ist anders. Ein kleines Display im
            Innenbereich hat andere Anforderungen als ein helles
            Schaufenster-Display für eine Apotheke. Deshalb bekommst du bei
            DokTV eine klare Beratung, verständliche Pakete und ein Angebot,
            das zu deinem Standort passt.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-2xl bg-blue-600 px-8 py-4 text-center font-bold text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500"
            >
              Kostenloses Angebot anfragen
            </Link>

            <Link
              href="/digital-signage-berlin"
              className="rounded-2xl border border-white/20 px-8 py-4 text-center font-bold text-white transition hover:bg-white/10"
            >
              Lösung ansehen
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="font-semibold text-blue-600">Pakete</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Wähle den Einstieg, der zu deinem Standort passt.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Die folgenden Preise dienen als Orientierung. Das finale Angebot
              hängt davon ab, ob du ein Display im Schaufenster, im Wartebereich
              oder im Verkaufsraum einsetzen möchtest und wie viel Content
              benötigt wird.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {packages.map((item) => (
              <div
                key={item.name}
                className={`rounded-3xl p-8 shadow-xl ${
                  item.highlight
                    ? "bg-slate-950 text-white shadow-slate-300"
                    : "border border-slate-200 bg-white shadow-slate-100"
                }`}
              >
                {item.highlight && (
                  <p className="mb-5 inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white">
                    Beliebt
                  </p>
                )}

                <h3 className="text-2xl font-black">{item.name}</h3>

                <div className="mt-5">
                  <p
                    className={`text-4xl font-black ${
                      item.highlight ? "text-white" : "text-blue-600"
                    }`}
                  >
                    {item.price}
                  </p>
                  <p
                    className={`mt-1 ${
                      item.highlight ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {item.note}
                  </p>
                </div>

                <p
                  className={`mt-6 leading-8 ${
                    item.highlight ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.text}
                </p>

                <ul className="mt-8 space-y-4">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                        ✓
                      </span>
                      <span
                        className={
                          item.highlight ? "text-slate-200" : "text-slate-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className={`mt-10 inline-flex w-full justify-center rounded-2xl px-6 py-4 font-bold transition ${
                    item.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "bg-slate-950 text-white hover:bg-blue-600"
                  }`}
                >
                  Angebot anfragen
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-600">Was ist enthalten?</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Du bekommst mehr als nur einen Bildschirm.
            </h2>
            <p className="mt-6 text-lg leading-9 text-slate-600">
              Ein Display allein bringt noch keine Ergebnisse. Entscheidend ist,
              dass Standort, Botschaft, Design und Zielgruppe zusammenpassen.
              Genau deshalb beraten wir dich nicht nur technisch, sondern auch
              strategisch.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {included.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-5 font-semibold shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="font-semibold text-blue-600">Preisfaktoren</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Warum Digital Signage nicht immer gleich viel kostet.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Die Kosten hängen nicht nur vom Display ab. Entscheidend sind
              Einsatzort, Helligkeit, Größe, Content, Betreuung und die Frage,
              ob du eine einfache Anzeige oder eine echte Marketing-Lösung
              möchtest.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {factors.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100"
              >
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl space-y-7 text-lg leading-9 text-slate-300">
          <p className="font-semibold text-blue-300">Ehrliche Einschätzung</p>
          <h2 className="text-3xl font-black text-white md:text-5xl">
            Was ist ein realistisches Budget?
          </h2>

          <p>
            Für einfache Digital-Signage-Lösungen solltest du mit einem Einstieg
            ab etwa 149 € monatlich rechnen. Das reicht für Unternehmen, die
            sichtbar starten möchten und eine klare, einfache Lösung brauchen.
          </p>

          <p>
            Für Apotheken, Arztpraxen und Geschäfte mit regelmäßig wechselnden
            Angeboten ist ein Business-Paket meist sinnvoller. Hier geht es
            nicht nur um Technik, sondern um Inhalte, Kampagnen und eine
            bessere Wirkung im Alltag.
          </p>

          <p>
            Wenn mehrere Standorte, mehrere Displays oder regelmäßige
            Content-Betreuung benötigt werden, ist ein individuelles Angebot
            sinnvoll. Dann planen wir gemeinsam, welche Lösung wirtschaftlich
            wirklich Sinn macht.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-semibold text-blue-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Häufige Fragen zu Digital Signage Preisen
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
            Lass uns dein passendes Angebot erstellen.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Kostenlos, unverbindlich und passend zu deinem Standort. Danach
            weißt du genau, welche Lösung für dich sinnvoll ist.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-flex rounded-2xl bg-white px-10 py-5 font-black text-blue-700 shadow-2xl transition hover:bg-slate-100"
          >
            Kostenloses Angebot anfragen
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}