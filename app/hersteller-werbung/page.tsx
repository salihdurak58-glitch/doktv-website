import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Hersteller Werbung in Apotheken & Praxen | DokTV",
  description:
    "Digitale Hersteller Werbung in Apotheken und Arztpraxen. Platzieren Sie OTC-Produkte, Gesundheitsprodukte und Kampagnen direkt im relevanten Umfeld.",
};

const benefits = [
  "Werbung direkt im Gesundheitsumfeld",
  "Sichtbarkeit in Apotheken und Arztpraxen",
  "Ideal für OTC-Produkte und Gesundheitsmarken",
  "Regionale Kampagnen in Berlin möglich",
  "Digitale Ausspielung statt klassischer Plakate",
  "Gezielte Ansprache von Patienten und Kunden",
  "Flexibel für saisonale Kampagnen",
  "Starkes Umfeld für Gesundheit, Pflege und Beratung",
];

const industries = [
  "OTC-Produkte",
  "Nahrungsergänzungsmittel",
  "Kosmetikhersteller",
  "Pflegeprodukte",
  "Gesundheitsprodukte",
  "Medizinische Dienstleistungen",
  "Lokale Gesundheitsanbieter",
  "Apotheken- und Praxispartner",
];

const campaignTypes = [
  "Produktkampagnen",
  "Markenbekanntheit",
  "Saisonale Gesundheitskampagnen",
  "Regionale Werbung",
  "Neue Produkteinführungen",
  "Aktionswerbung",
  "Apothekenkampagnen",
  "Praxisnahe Informationskampagnen",
];

const faqs = [
  {
    q: "Was ist Hersteller Werbung mit DokTV?",
    a: "Hersteller Werbung mit DokTV bedeutet, Produkte, Marken oder Kampagnen über digitale Displays in Apotheken und Arztpraxen sichtbar zu machen.",
  },
  {
    q: "Für welche Hersteller eignet sich DokTV?",
    a: "DokTV eignet sich besonders für Hersteller von OTC-Produkten, Nahrungsergänzungsmitteln, Kosmetik, Pflegeprodukten und Gesundheitsprodukten.",
  },
  {
    q: "Kann eine Kampagne regional ausgespielt werden?",
    a: "Ja. Kampagnen können regional geplant werden, zum Beispiel für Berlin oder bestimmte Standorte im Gesundheitsumfeld.",
  },
  {
    q: "Welche Inhalte können Hersteller zeigen?",
    a: "Möglich sind Produktwerbung, Markenbotschaften, saisonale Kampagnen, Aktionshinweise, Gesundheitsthemen und neue Produkteinführungen.",
  },
];

export default function HerstellerWerbungPage() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      <section className="bg-slate-950 px-6 py-28 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Digitale Werbung für Hersteller
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Hersteller Werbung in Apotheken und Arztpraxen
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Mit DokTV platzieren Hersteller, Marken und Dienstleister ihre
            Werbung direkt im Gesundheitsumfeld. Digitale Displays in Apotheken
            und Arztpraxen schaffen Sichtbarkeit genau dort, wo Kunden und
            Patienten offen für Gesundheitsthemen sind.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-xl bg-blue-600 px-8 py-4 text-center font-bold text-white"
            >
              Kampagne anfragen
            </Link>

            <Link
              href="/standorte"
              className="rounded-xl border border-white px-8 py-4 text-center font-bold text-white"
            >
              Standorte ansehen
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-8 text-lg leading-9 text-slate-700">
          <p className="font-semibold text-blue-600">
            Werbung im Gesundheitsumfeld
          </p>

          <h2 className="text-3xl font-black text-slate-950 md:text-5xl">
            Werbung dort, wo Gesundheitsentscheidungen entstehen
          </h2>

          <p>
            Klassische Online-Werbung erreicht viele Menschen, aber nicht immer
            im passenden Moment. Im Gesundheitsbereich ist der Kontext besonders
            wichtig. Wer ein Gesundheitsprodukt, ein OTC-Produkt, ein
            Pflegeprodukt oder eine medizinische Dienstleistung bewirbt,
            profitiert davon, direkt im relevanten Umfeld sichtbar zu sein.
          </p>

          <p>
            Apotheken und Arztpraxen sind Orte, an denen Menschen aktiv über
            Gesundheit, Wohlbefinden, Vorsorge, Behandlung und Beratung
            nachdenken. Genau deshalb ist digitale Herstellerwerbung über DokTV
            besonders interessant für Marken, die nicht nur Reichweite, sondern
            Relevanz suchen.
          </p>

          <p>
            Über digitale Displays können Kampagnen modern,
            aufmerksamkeitsstark und flexibel ausgespielt werden. Inhalte lassen
            sich saisonal, regional oder thematisch planen und eignen sich damit
            deutlich besser für wechselnde Kampagnen als klassische
            Printwerbung.
          </p>

          <p>
            Für Apotheken gibt es zusätzlich eigene Lösungen für{" "}
            <Link
              href="/schaufenster-display-apotheken"
              className="font-bold text-blue-600 underline underline-offset-4"
            >
              Schaufenster Displays
            </Link>
            . Für Arztpraxen bieten wir außerdem{" "}
            <Link
              href="/wartezimmer-tv-praxen"
              className="font-bold text-blue-600 underline underline-offset-4"
            >
              Wartezimmer TV
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="font-semibold text-blue-600">Vorteile</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Warum Hersteller über digitale Displays werben sollten
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Digitale Werbung in Apotheken und Praxen verbindet Sichtbarkeit
              mit einem starken Gesundheitskontext. Statt Streuverlusten steht
              Ihre Marke genau dort im Fokus, wo Menschen sich bereits mit
              Gesundheit beschäftigen.
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
            <p className="font-semibold text-blue-600">Branchen</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Für welche Hersteller und Marken ist DokTV geeignet?
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              DokTV eignet sich besonders für Unternehmen, deren Produkte oder
              Dienstleistungen einen Bezug zu Gesundheit, Pflege, Wohlbefinden,
              Beratung oder lokaler Versorgung haben.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Dazu gehören Hersteller von OTC-Produkten,
              Nahrungsergänzungsmitteln, Kosmetikprodukten, Pflegeprodukten und
              Gesundheitsartikeln. Auch lokale Anbieter mit Gesundheitsbezug
              können über DokTV gezielt sichtbar werden.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((item) => (
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
          <p className="font-semibold text-blue-300">
            Berlin & deutschlandweit
          </p>

          <h2 className="text-3xl font-black text-white md:text-5xl">
            Hersteller Werbung in Berlin und deutschlandweit
          </h2>

          <p>
            Für regionale Kampagnen ist Berlin ein besonders interessanter
            Markt. Viele Apotheken, Arztpraxen und Gesundheitsstandorte
            befinden sich in gut sichtbaren Lagen mit hoher Kunden- und
            Patientennähe. Hersteller können dadurch gezielt regionale
            Sichtbarkeit aufbauen.
          </p>

          <p>
            Gleichzeitig eignet sich DokTV auch für deutschlandweite Kampagnen,
            wenn Produkte oder Botschaften in mehreren Apotheken und Praxen
            ausgespielt werden sollen. So entsteht ein skalierbares Werbenetz im
            Gesundheitsumfeld.
          </p>

          <p>
            Die digitale Ausspielung ermöglicht eine flexible Planung:
            saisonale Themen wie Erkältung, Allergie, Sonnenschutz, Hautpflege
            oder Immunsystem können zur passenden Zeit sichtbar gemacht werden.
          </p>

          <p>
            Ergänzend dazu gibt es unsere lokale SEO-Seite zu{" "}
            <Link
              href="/digital-signage-berlin"
              className="font-bold text-blue-300 underline underline-offset-4"
            >
              Digital Signage Berlin
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="font-semibold text-blue-600">Kampagnen</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Welche Kampagnen können ausgespielt werden?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Ob Produktlaunch, regionale Aktion oder langfristige
              Markenbekanntheit: Digitale Displays ermöglichen verschiedene
              Kampagnenarten, die flexibel geplant und umgesetzt werden können.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {campaignTypes.map((item) => (
              <div key={item} className="rounded-2xl border p-6 font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-600">Planung</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Was braucht eine erfolgreiche Kampagne?
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Eine erfolgreiche Kampagne braucht nicht nur ein gutes Produkt,
              sondern auch den richtigen Kontext. Entscheidend ist, welche
              Zielgruppe erreicht werden soll, welche Standorte passen und
              welche Botschaft auf dem Display gezeigt wird.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              DokTV unterstützt bei der Einschätzung, ob Apotheken,
              Arztpraxen, bestimmte Bezirke oder mehrere Standorte sinnvoll
              sind. Auch Content, Laufzeit und Platzierung sollten vorab klar
              geplant werden.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-black">
              Typische Fragen vor Kampagnenstart
            </h3>

            <ul className="mt-6 space-y-4 leading-8 text-slate-700">
              <li>• Welches Produkt oder welche Marke soll beworben werden?</li>
              <li>• Geht es um Apotheken, Arztpraxen oder beide Bereiche?</li>
              <li>• Soll die Kampagne regional oder breiter laufen?</li>
              <li>• Welche Zielgruppe soll erreicht werden?</li>
              <li>• Gibt es fertige Werbemittel oder braucht es Content?</li>
              <li>• Welche Laufzeit ist geplant?</li>
            </ul>

            <Link
              href="/kontakt"
              className="mt-8 inline-flex rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white"
            >
              Kampagne anfragen
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-semibold text-blue-600">FAQ</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Häufige Fragen zu Hersteller Werbung
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
            Ihre Marke sichtbar im Gesundheitsumfeld platzieren
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Fragen Sie eine Kampagne an und wir prüfen, welche Standorte,
            Zielgruppen und Inhalte für Ihre Marke sinnvoll sind.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-flex rounded-2xl bg-white px-10 py-5 font-black text-blue-700 shadow-2xl transition hover:bg-slate-100"
          >
            Kampagne anfragen
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}