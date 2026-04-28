import { generatePageMetadata } from "@/app/lib/seo/get-page-seo";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export async function generateMetadata() {
  return generatePageMetadata("/kontakt");
}

const reasons = [
  "Beratung für Schaufenster Displays in Apotheken",
  "Wartezimmer TV für Arztpraxen planen",
  "Herstellerwerbung in Apotheken und Praxen anfragen",
  "Digital Signage Lösung für einen Standort besprechen",
  "Preise, Pakete und Umsetzung klären",
  "Individuelles Angebot für DokTV erhalten",
];

const services = [
  {
    title: "Schaufenster Display",
    text: "Für Apotheken, die Angebote, Aktionen und Gesundheitsinformationen sichtbar im Schaufenster präsentieren möchten.",
    href: "/schaufenster-display-apotheken",
  },
  {
    title: "Wartezimmer TV",
    text: "Für Arztpraxen, die Patienten im Wartezimmer modern informieren und die Praxis professioneller darstellen möchten.",
    href: "/wartezimmer-tv-praxen",
  },
  {
    title: "Hersteller Werbung",
    text: "Für Hersteller und Marken, die Produkte und Kampagnen direkt im Gesundheitsumfeld platzieren möchten.",
    href: "/hersteller-werbung",
  },
  {
    title: "Werbung Apotheke Display",
    text: "Für Apotheken, die gezielt digitale Display-Werbung im Schaufenster oder Verkaufsraum einsetzen möchten.",
    href: "/werbung-apotheke-display",
  },
  {
    title: "Digital Signage Berlin",
    text: "Für Unternehmen in Berlin, die digitale Displays für mehr Sichtbarkeit am Standort einsetzen möchten.",
    href: "/digital-signage-berlin",
  },
  {
    title: "Preise ansehen",
    text: "Für alle, die zuerst einen Überblick über mögliche Pakete, Leistungen und Kosten bekommen möchten.",
    href: "/preise",
  },
];

const faqs = [
  {
    q: "Wie kann ich DokTV anfragen?",
    a: "Sie können das Kontaktformular nutzen und kurz beschreiben, ob es um eine Apotheke, Arztpraxis, Herstellerkampagne oder allgemeine Digital Signage Beratung geht.",
  },
  {
    q: "Welche Angaben helfen bei der Anfrage?",
    a: "Hilfreich sind Standort, Einsatzbereich, gewünschte Lösung, Anzahl der Displays und ob Inhalte bereits vorhanden sind oder erstellt werden sollen.",
  },
  {
    q: "Kann ich erstmal nur eine Beratung bekommen?",
    a: "Ja. Eine erste Anfrage ist unverbindlich. Danach kann geprüft werden, welche Lösung zu Ihrem Standort oder Ihrer Kampagne passt.",
  },
  {
    q: "Ist DokTV nur für Berlin?",
    a: "Nein. DokTV ist besonders für Berlin interessant, kann aber grundsätzlich auch deutschlandweit eingesetzt werden.",
  },
];

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Kontakt zu DokTV
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight md:text-6xl">
            Kontakt für Digital Signage, Schaufenster Displays und Wartezimmer
            TV
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Sie möchten DokTV für Ihre Apotheke, Arztpraxis oder Werbekampagne
            nutzen? Senden Sie uns eine Anfrage. Wir prüfen gemeinsam, welche
            Lösung zu Ihrem Standort, Ihrer Zielgruppe und Ihrem Budget passt.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_420px]">
        <div>
          <p className="font-semibold text-blue-600">Anfrage senden</p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Anfrage stellen und passende Lösung finden
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Ob digitales Schaufenster Display für eine Apotheke, Wartezimmer TV
            für eine Arztpraxis oder Herstellerwerbung im Gesundheitsumfeld:
            Über das Kontaktformular können Sie uns Ihr Anliegen kurz schildern.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Je genauer Ihre Nachricht ist, desto besser können wir einschätzen,
            welche Lösung sinnvoll ist. Hilfreich sind Angaben zum Standort,
            Einsatzbereich, gewünschtem Display-Typ und ob es um eine einzelne
            Fläche oder mehrere Standorte geht.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Für Apotheken ist oft die Seite{" "}
            <Link
              href="/schaufenster-display-apotheken"
              className="font-bold text-blue-600 underline underline-offset-4"
            >
              Schaufenster Displays für Apotheken
            </Link>{" "}
            relevant. Für Praxen empfehlen wir{" "}
            <Link
              href="/wartezimmer-tv-praxen"
              className="font-bold text-blue-600 underline underline-offset-4"
            >
              Wartezimmer TV
            </Link>
            . Hersteller und Marken finden weitere Informationen unter{" "}
            <Link
              href="/hersteller-werbung"
              className="font-bold text-blue-600 underline underline-offset-4"
            >
              Hersteller Werbung
            </Link>
            .
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <form className="mt-10 space-y-5 rounded-3xl border bg-slate-50 p-8">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-black"
                placeholder="Dein Name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                E-Mail
              </label>
              <input
                name="email"
                type="email"
                className="w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-black"
                placeholder="deine@email.de"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Nachricht
              </label>
              <textarea
                name="message"
                className="min-h-36 w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-black"
                placeholder="Worum geht es?"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-black px-6 py-3 text-sm font-bold text-white hover:bg-slate-800"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-blue-600">Leistungen</p>

          <h2 className="mt-3 max-w-4xl text-3xl font-black md:text-5xl">
            Wofür möchten Sie DokTV nutzen?
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            DokTV kann für unterschiedliche Ziele eingesetzt werden: mehr
            Sichtbarkeit im Apotheken-Schaufenster, bessere Patienteninformation
            im Wartezimmer oder gezielte Werbung für Hersteller im
            Gesundheitsumfeld.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-white p-8 shadow"
              >
                <h3 className="text-2xl font-black">{service.title}</h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {service.text}
                </p>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex font-bold text-blue-600"
                >
                  Mehr erfahren
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-8 text-lg leading-9 text-slate-700">
          <p className="font-semibold text-blue-600">Beratung</p>

          <h2 className="text-3xl font-black text-slate-950 md:text-5xl">
            Welche Anfrage ist sinnvoll?
          </h2>

          <p>
            Wenn Sie eine Apotheke betreiben, ist meistens ein digitales
            Schaufenster Display der richtige Einstieg. Damit lassen sich
            Angebote, Aktionen, Gesundheitsinformationen und Herstellerkampagnen
            direkt sichtbar machen. Ergänzend gibt es unsere SEO-Unterseite zu{" "}
            <Link
              href="/werbung-apotheke-display"
              className="font-bold text-blue-600 underline underline-offset-4"
            >
              Werbung Apotheke Display
            </Link>
            .
          </p>

          <p>
            Wenn Sie eine Arztpraxis betreiben, ist Wartezimmer TV häufig die
            passendere Lösung. Damit können Sie Patienten informieren,
            Praxisleistungen vorstellen und organisatorische Hinweise sichtbar
            machen.
          </p>

          <p>
            Wenn Sie Hersteller, Marke oder Dienstleister sind, kann DokTV dabei
            helfen, Ihre Kampagne im Gesundheitsumfeld sichtbar zu platzieren.
            Dafür können Apotheken, Praxen oder ausgewählte Standorte relevant
            sein.
          </p>

          <p>
            Einen ersten Kostenüberblick finden Sie auf unserer Seite{" "}
            <Link
              href="/preise"
              className="font-bold text-blue-600 underline underline-offset-4"
            >
              Digital Signage Preise
            </Link>
            . Für lokale Informationen gibt es außerdem unsere Seite zu{" "}
            <Link
              href="/digital-signage-berlin"
              className="font-bold text-blue-600 underline underline-offset-4"
            >
              Digital Signage Berlin
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-semibold text-blue-300">FAQ</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Häufige Fragen zur Kontaktaufnahme
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-xl font-black text-white">{faq.q}</h3>
                <p className="mt-4 leading-8 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}