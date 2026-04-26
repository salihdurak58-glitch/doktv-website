import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title:
    "Digital Signage Berlin | Displays für Apotheken, Arztpraxen & Geschäfte",
  description:
    "DokTV bietet Digital Signage in Berlin: moderne Schaufenster-Displays für Apotheken, Arztpraxen und lokale Geschäfte. Mehr Sichtbarkeit, mehr Kunden, mehr Anfragen.",
  alternates: {
    canonical: "https://doktv.de/digital-signage-berlin",
  },
};

const benefits = [
  "Mehr Aufmerksamkeit im Schaufenster",
  "Digitale Werbung statt statischer Plakate",
  "Ideal für Apotheken, Arztpraxen und lokale Geschäfte",
  "Moderne Außenwirkung für mehr Vertrauen",
  "Flexible Inhalte für Angebote, Aktionen und Hinweise",
  "Sichtbarkeit auch außerhalb der Öffnungszeiten",
];

const districts = [
  "Berlin Mitte",
  "Charlottenburg",
  "Kreuzberg",
  "Neukölln",
  "Tempelhof",
  "Schöneberg",
  "Spandau",
  "Wedding",
  "Prenzlauer Berg",
  "Friedrichshain",
  "Steglitz",
  "Reinickendorf",
];

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      <section className="bg-slate-950 px-6 py-28 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 inline-flex rounded-full bg-blue-500/15 px-4 py-2 text-sm font-semibold text-blue-300">
            Digital Signage Berlin
          </p>

          <h1 className="max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">
            Digital Signage in Berlin: Mehr Sichtbarkeit für Apotheken,
            Arztpraxen und lokale Geschäfte
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            DokTV entwickelt moderne Digital-Signage-Lösungen für Unternehmen in
            Berlin, die mehr Aufmerksamkeit vor Ort gewinnen möchten. Mit
            digitalen Schaufenster-Displays, professioneller Gestaltung und
            klarer Strategie wird Ihr Standort sichtbarer, moderner und
            wirkungsvoller.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-2xl bg-blue-600 px-8 py-4 text-center font-semibold text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500"
            >
              Kostenlos beraten lassen
            </Link>

            <Link
              href="/blog/digital-signage-apotheke"
              className="rounded-2xl border border-white/20 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Beispiel für Apotheken ansehen
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {[
            ["24/7", "Ihr Schaufenster arbeitet auch nach Ladenschluss."],
            ["Berlin", "Lokale Lösung für Unternehmen in Ihrer Umgebung."],
            ["Mehr Leads", "Mehr Sichtbarkeit bedeutet mehr Anfragen."],
          ].map(([number, text]) => (
            <div
              key={number}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
            >
              <p className="text-4xl font-black text-blue-600">{number}</p>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-semibold text-blue-600">Warum DokTV?</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black md:text-5xl">
            Digitale Werbung, die direkt am Standort wirkt.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            In Berlin laufen täglich tausende Menschen an Schaufenstern,
            Praxen, Apotheken und lokalen Geschäften vorbei. Die entscheidende
            Frage ist: Wird Ihr Standort wahrgenommen? Ein digitales Display
            sorgt dafür, dass Ihre Botschaft nicht untergeht. Bewegte Inhalte,
            klare Angebote und moderne Gestaltung erzeugen Aufmerksamkeit genau
            dort, wo Kaufentscheidungen entstehen.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  ✓
                </span>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-8 text-lg leading-9 text-slate-700">
          <h2 className="text-3xl font-black text-slate-950 md:text-5xl">
            Für wen eignet sich Digital Signage in Berlin?
          </h2>

          <p>
            Digital Signage eignet sich besonders für Unternehmen, die vor Ort
            sichtbar sein müssen. Dazu gehören Apotheken, Arztpraxen,
            Kosmetikstudios, Friseure, Optiker, Restaurants, Cafés,
            Einzelhändler und Dienstleister. Überall dort, wo Menschen
            vorbeilaufen oder warten, kann ein digitales Display Aufmerksamkeit
            erzeugen und Informationen besser vermitteln.
          </p>

          <p>
            Für Apotheken ist Digital Signage besonders wertvoll, weil Angebote,
            Gesundheitskampagnen, saisonale Produkte und Serviceleistungen
            sichtbar kommuniziert werden können. Arztpraxen profitieren durch
            bessere Patienteninformation, weniger Rückfragen und einen
            professionelleren ersten Eindruck.
          </p>

          <p>
            Der große Vorteil gegenüber klassischen Plakaten liegt in der
            Flexibilität. Inhalte können aktualisiert, geplant und regelmäßig
            ausgetauscht werden. Dadurch bleibt Ihr Standort lebendig, aktuell
            und professionell.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="font-semibold text-blue-300">Einsatzbereiche</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Digital Signage Lösungen für Berliner Unternehmen
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Apotheken",
                text: "Angebote, Notdienst-Hinweise, Gesundheitskampagnen, Kosmetikprodukte und Services sichtbar präsentieren.",
              },
              {
                title: "Arztpraxen",
                text: "Patienten informieren, Leistungen darstellen, Abläufe erklären und den Empfang entlasten.",
              },
              {
                title: "Lokale Geschäfte",
                text: "Aktionen, Neuheiten, Öffnungszeiten und Angebote modern im Schaufenster zeigen.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-5 leading-8 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-5xl">
            Digital Signage in Berlin und Umgebung
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            DokTV unterstützt Unternehmen in ganz Berlin. Besonders interessant
            ist Digital Signage für Standorte mit Laufkundschaft, gut sichtbarem
            Schaufenster oder Wartebereich.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {districts.map((district) => (
              <div
                key={district}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-semibold"
              >
                {district}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black md:text-5xl">
            Mehr Sichtbarkeit für Ihr Unternehmen in Berlin
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Lassen Sie uns gemeinsam prüfen, welche Digital-Signage-Lösung zu
            Ihrem Standort passt. Kostenlos, unverbindlich und direkt auf Ihr
            Geschäft zugeschnitten.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-flex rounded-2xl bg-white px-10 py-5 font-bold text-blue-700 shadow-2xl transition hover:bg-slate-100"
          >
            Jetzt Beratung anfragen
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}