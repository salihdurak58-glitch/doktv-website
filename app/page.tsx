import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { generatePageMetadata } from "@/app/lib/seo/get-page-seo";
import { getSiteContent } from "@/app/lib/content/get-site-content";

export async function generateMetadata() {
  return generatePageMetadata("/");
}

const services = [
  {
    title: "Schaufenster Displays für Apotheken",
    text: "Digitale Schaufenster Displays helfen Apotheken dabei, Angebote, Aktionen, Gesundheitsinformationen und saisonale Kampagnen sichtbar zu präsentieren. Besonders bei Laufkundschaft erzeugen bewegte Inhalte deutlich mehr Aufmerksamkeit als klassische Plakate.",
    href: "/schaufenster-display-apotheken",
  },
  {
    title: "Wartezimmer TV für Arztpraxen",
    text: "Mit Wartezimmer TV informieren Arztpraxen ihre Patienten direkt im Wartebereich. Praxisleistungen, Hinweise, Gesundheitsthemen und organisatorische Informationen können verständlich und modern ausgespielt werden.",
    href: "/wartezimmer-tv-praxen",
  },
  {
    title: "Hersteller Werbung im Gesundheitsumfeld",
    text: "Hersteller und Marken können ihre Produkte und Kampagnen direkt in Apotheken und Arztpraxen sichtbar machen. So entsteht Werbung genau dort, wo Menschen sich mit Gesundheit, Pflege und Beratung beschäftigen.",
    href: "/hersteller-werbung",
  },
];

const benefits = [
  "Mehr Aufmerksamkeit durch digitale Inhalte",
  "Moderne Außenwirkung für Apotheken und Praxen",
  "Flexible Inhalte ohne neue Druckkosten",
  "Bessere Präsentation von Angeboten und Aktionen",
  "Geeignet für Schaufenster, Wartezimmer und Empfang",
  "Stärkere Sichtbarkeit für Herstellerkampagnen",
  "Professionelle Kommunikation direkt am Standort",
  "Persönliche Beratung für die passende Lösung",
];

const targetGroups = [
  "Apotheken",
  "Arztpraxen",
  "Facharztpraxen",
  "Gesundheitszentren",
  "OTC-Hersteller",
  "Kosmetikhersteller",
  "Pflege- und Gesundheitsmarken",
  "Lokale Unternehmen mit Gesundheitsbezug",
];

const faqs = [
  {
    q: "Was macht DokTV?",
    a: "DokTV bietet Digital Signage Lösungen für Apotheken, Arztpraxen und Hersteller. Dazu gehören digitale Schaufenster Displays, Wartezimmer TV und Werbung im Gesundheitsumfeld.",
  },
  {
    q: "Für wen eignet sich DokTV?",
    a: "DokTV eignet sich für Apotheken, Arztpraxen, Gesundheitszentren, Hersteller, Marken und lokale Unternehmen, die ihre Sichtbarkeit am Standort verbessern möchten.",
  },
  {
    q: "Was kann auf den Displays gezeigt werden?",
    a: "Möglich sind Angebote, Aktionen, Gesundheitsinformationen, Praxisleistungen, Herstellerwerbung, Öffnungszeiten, Notdienst-Hinweise und saisonale Kampagnen.",
  },
  {
    q: "Ist DokTV nur für Berlin?",
    a: "Nein. DokTV ist besonders für Berlin interessant, kann aber grundsätzlich deutschlandweit für Apotheken, Praxen und Hersteller eingesetzt werden.",
  },
];

export default async function HomePage() {
  const content = await getSiteContent([
    "homepage_hero_eyebrow",
    "homepage_hero_title",
    "homepage_hero_subtitle",
    "homepage_hero_image",
    "homepage_primary_cta",
    "homepage_secondary_cta",
  ]);
  const heroTitle =
    content.homepage_hero_title ||
    "Digitale Schaufenster Displays und Wartezimmer TV für moderne Gesundheitskommunikation";
  const heroSubtitle =
    content.homepage_hero_subtitle ||
    "DokTV unterstützt Apotheken, Arztpraxen und Hersteller dabei, Informationen, Angebote und Werbung über digitale Displays sichtbar zu machen. Ob im Schaufenster, im Wartezimmer, am Empfang oder direkt am Point of Sale: Mit professioneller Digital Signage werden Inhalte aufmerksamkeitsstark, flexibel und modern präsentiert.";
  const heroImage = content.homepage_hero_image;

  return (
    <main className="bg-white text-slate-900">
      <Header />

      <section
        className="bg-slate-950 px-6 py-28 text-white"
        style={
          heroImage
            ? {
                backgroundImage: `linear-gradient(90deg, rgba(2, 6, 23, 0.94), rgba(2, 6, 23, 0.72)), url(${heroImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }
            : undefined
        }
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            {content.homepage_hero_eyebrow ||
              "Digital Signage für Apotheken, Praxen & Hersteller"}
          </p>

          <h1 className="max-w-6xl text-4xl font-black leading-tight tracking-tight md:text-7xl">
            {heroTitle}
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-300 md:text-xl">
            {heroSubtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-2xl bg-blue-600 px-8 py-4 text-center font-bold text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500"
            >
              {content.homepage_primary_cta || "Kostenlose Beratung anfragen"}
            </Link>

            <Link
              href="/schaufenster-display-apotheken"
              className="rounded-2xl border border-white/20 px-8 py-4 text-center font-bold text-white transition hover:bg-white/10"
            >
              {content.homepage_secondary_cta || "Lösungen ansehen"}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_420px]">
          <div className="space-y-7 text-lg leading-9 text-slate-700">
            <p className="font-semibold text-blue-600">Warum DokTV?</p>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Digitale Kommunikation wird für Apotheken und Praxen immer
              wichtiger.
            </h2>

            <p>
              Kunden und Patienten nehmen Informationen heute anders wahr als
              früher. Klassische Plakate, gedruckte Aushänge oder einfache
              Aufsteller gehen im Alltag schnell unter. Digitale Displays
              schaffen hier einen klaren Vorteil: Sie bewegen sich, fallen auf
              und können Inhalte genau dort zeigen, wo Menschen warten,
              vorbeigehen oder Kaufentscheidungen treffen.
            </p>

            <p>
              Für Apotheken bedeutet das mehr Sichtbarkeit für Angebote,
              Gesundheitsaktionen, Kosmetikprodukte, saisonale Themen und
              wichtige Hinweise. Für Arztpraxen entsteht ein moderner
              Informationskanal im Wartezimmer, der Patienten informiert und die
              Praxis professioneller wirken lässt.
            </p>

            <p>
              Für Hersteller entsteht ein Werbeumfeld, das näher an der
              Gesundheitsentscheidung kaum sein könnte. Produkte und Kampagnen
              werden nicht irgendwo ausgespielt, sondern direkt in Apotheken,
              Praxen und Gesundheitsstandorten sichtbar gemacht.
            </p>

            <p>
              DokTV verbindet diese Bereiche zu einer klaren Lösung: digitale
              Schaufenster Displays, Wartezimmer TV und Herstellerwerbung im
              Gesundheitsumfeld. Ziel ist nicht nur ein Bildschirm an der Wand,
              sondern eine sichtbare Kommunikationsfläche, die im Alltag
              wirklich genutzt wird.
            </p>
          </div>

          <aside className="rounded-3xl bg-slate-100 p-8">
            <h3 className="text-2xl font-black text-slate-950">
              Geeignet für
            </h3>

            <div className="mt-6 grid gap-3">
              {targetGroups.map((item) => (
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
            <p className="font-semibold text-blue-600">Unsere Leistungen</p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Digital Signage Lösungen für mehr Sichtbarkeit im
              Gesundheitsbereich
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              DokTV konzentriert sich auf drei zentrale Einsatzbereiche:
              digitale Schaufenster Displays für Apotheken, Wartezimmer TV für
              Arztpraxen und gezielte Werbung für Hersteller. Jede Lösung
              verfolgt ein klares Ziel: relevante Inhalte sichtbarer machen und
              Kommunikation am Standort verbessern.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/70"
              >
                <h3 className="text-2xl font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.text}
                </p>

                <Link
                  href={service.href}
                  className="mt-8 inline-flex rounded-2xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-blue-600"
                >
                  Mehr erfahren
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-600">Vorteile</p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Warum digitale Displays besser wirken als klassische Aushänge.
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Ein Display ist nicht einfach nur ein Bildschirm. Richtig
              eingesetzt wird es zu einer digitalen Verkaufs-, Informations- und
              Werbefläche. Inhalte können jederzeit angepasst werden, ohne neue
              Plakate zu drucken oder Aushänge manuell auszutauschen.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Besonders in Apotheken und Praxen ist das wertvoll, weil sich
              Angebote, Gesundheitsthemen und Hinweise regelmäßig ändern. Ein
              digitales System spart Zeit, wirkt professioneller und macht
              wichtige Botschaften sichtbarer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl space-y-7 text-lg leading-9 text-slate-300">
          <p className="font-semibold text-blue-300">Digital Signage Berlin</p>

          <h2 className="text-3xl font-black text-white md:text-5xl">
            Digital Signage in Berlin und deutschlandweit
          </h2>

          <p>
            DokTV richtet sich an Unternehmen, die digitale Sichtbarkeit im
            Gesundheitsbereich aufbauen möchten. Besonders in Berlin ist der
            Wettbewerb um Aufmerksamkeit hoch. Apotheken, Arztpraxen und lokale
            Anbieter müssen ihre Leistungen klar präsentieren, damit sie im
            Alltag wahrgenommen werden.
          </p>

          <p>
            Digitale Displays können im Schaufenster, am Empfang, im
            Wartezimmer oder im Verkaufsbereich eingesetzt werden. Sie zeigen
            Angebote, Hinweise, Kampagnen, Gesundheitsinformationen oder Werbung
            genau dort, wo Menschen sie sehen.
          </p>

          <p>
            Für lokale Suchanfragen haben wir zusätzlich eine eigene Unterseite
            zu{" "}
            <Link
              href="/digital-signage-berlin"
              className="font-bold text-blue-300 underline underline-offset-4"
            >
              Digital Signage Berlin
            </Link>
            . Dort geht es speziell um digitale Displaylösungen für Apotheken,
            Arztpraxen und lokale Unternehmen in Berlin.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-8 text-lg leading-9 text-slate-700">
          <p className="font-semibold text-blue-600">Apotheken Display</p>

          <h2 className="text-3xl font-black text-slate-950 md:text-5xl">
            Werbung mit Displays in Apotheken gezielt nutzen
          </h2>

          <p>
            Für Apotheken ist Sichtbarkeit ein entscheidender Faktor. Viele
            Angebote, Gesundheitsaktionen und Produktinformationen gehen im
            Alltag unter, wenn sie nur auf kleinen Aufstellern oder klassischen
            Plakaten gezeigt werden.
          </p>

          <p>
            Ein digitales Display im Schaufenster kann Passanten aktiv
            ansprechen und Angebote deutlich besser sichtbar machen. Besonders
            für Kosmetikprodukte, OTC-Produkte, saisonale Kampagnen,
            Erkältungsaktionen, Allergiethemen oder Sonnenschutz eignet sich
            digitale Werbung in Apotheken sehr gut.
          </p>

          <p>
            Mehr Informationen zu diesem SEO-Thema finden Sie auf unserer
            Unterseite{" "}
            <Link
              href="/werbung-apotheke-display"
              className="font-bold text-blue-600 underline underline-offset-4"
            >
              Werbung Apotheke Display
            </Link>
            . Für die Hauptlösung besuchen Sie unsere Seite zu{" "}
            <Link
              href="/schaufenster-display-apotheken"
              className="font-bold text-blue-600 underline underline-offset-4"
            >
              Schaufenster Displays für Apotheken
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-600">Preise & Beratung</p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Welche Lösung passt zu Ihrem Standort?
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Die passende Lösung hängt vom Standort, vom Einsatzbereich, von
              der Displaygröße, vom Content und vom gewünschten Ziel ab. Ein
              Schaufenster Display für eine Apotheke hat andere Anforderungen
              als ein Wartezimmer TV in einer Arztpraxis oder eine Kampagne für
              Hersteller.
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
              Typische Fragen in der Beratung
            </h3>

            <ul className="mt-6 space-y-4 leading-8 text-slate-700">
              <li>• Wo soll das Display eingesetzt werden?</li>
              <li>• Geht es um Apotheke, Arztpraxis oder Herstellerwerbung?</li>
              <li>• Soll das Display im Schaufenster oder Innenbereich stehen?</li>
              <li>• Welche Inhalte sollen regelmäßig gezeigt werden?</li>
              <li>• Wird eine einzelne Fläche oder mehrere Standorte benötigt?</li>
              <li>• Soll DokTV bei Content und Gestaltung unterstützen?</li>
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
            <p className="font-semibold text-blue-600">Häufige Fragen</p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Fragen zu DokTV und Digital Signage
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-black text-slate-950">
                  {faq.q}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black md:text-5xl">
            Bereit für mehr Sichtbarkeit mit DokTV?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Lassen Sie uns gemeinsam prüfen, welche Display-Lösung zu Ihrem
            Standort passt. Kostenlos, unverbindlich und klar verständlich.
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
