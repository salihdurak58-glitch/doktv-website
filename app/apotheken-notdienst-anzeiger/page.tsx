import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Clock3,
  Eye,
  House,
  Info,
  MapPin,
  Monitor,
  Moon,
  Navigation,
  PanelsTopLeft,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Eyebrow, SectionHeading } from "../components/PublicUI";

const pageUrl = "https://doktv.de/apotheken-notdienst-anzeiger";

export const metadata: Metadata = {
  title: "Apotheken Notdienst Anzeiger | Digitales Display | DOKTV",
  description:
    "Digitaler Apotheken Notdienst Anzeiger von DOKTV: Notdienstinformationen modern und gut sichtbar auf Ihrem Display präsentieren. Nur 10 € netto/Monat.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Apotheken Notdienst Anzeiger | Digitales Display | DOKTV",
    description:
      "Notdienstinformationen modern und gut sichtbar auf Ihrem DOKTV Display präsentieren – für 10 € netto im Monat.",
    url: pageUrl,
    siteName: "DOKTV",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "https://doktv.de/notdienst/apotheken-notdienst-anzeiger-doktv.png",
        width: 1448,
        height: 1086,
        alt: "Digitaler Apotheken Notdienst Anzeiger auf einem DOKTV Display",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apotheken Notdienst Anzeiger | DOKTV",
    description:
      "Professionelle Notdienstinformationen auf Ihrem DOKTV Display – für 10 € netto im Monat.",
    images: ["https://doktv.de/notdienst/apotheken-notdienst-anzeiger-doktv.png"],
  },
};

const demoPharmacies = [
  {
    name: "Sonnen-Apotheke",
    address: "Musterstraße 18",
    city: "10115 Berlin",
    distance: "2,4 km entfernt",
  },
  {
    name: "Stadt-Apotheke",
    address: "Hauptstraße 42",
    city: "10117 Berlin",
    distance: "4,1 km entfernt",
  },
  {
    name: "Adler-Apotheke",
    address: "Berliner Allee 25",
    city: "10119 Berlin",
    distance: "5,8 km entfernt",
  },
];

const benefitCards = [
  {
    icon: Eye,
    title: "Sofort erkennbar",
    text: "Große Schrift und ein übersichtliches Layout sorgen dafür, dass wichtige Informationen schnell erfasst werden können.",
  },
  {
    icon: Sparkles,
    title: "Professioneller Auftritt",
    text: "Keine handgeschriebenen Zettel oder unübersichtlichen Aushänge. Ihre Apotheke präsentiert Informationen zeitgemäß und hochwertig.",
  },
  {
    icon: Monitor,
    title: "Direkt auf Ihrem DOKTV",
    text: "Der Notdienst Anzeiger fügt sich in Ihre bestehende digitale Apothekenkommunikation ein.",
  },
];

const priceFeatures = [
  "Moderne digitale Notdienstanzeige",
  "Darstellung auf Ihrem DOKTV Display",
  "Optimiert für große Bildschirme",
  "Klar lesbare Notdienstinformationen",
  "Professionelles Apotheken-Design",
  "Nahtlose Integration in DOKTV",
];

const steps = [
  {
    number: "01",
    icon: Monitor,
    title: "DOKTV nutzen",
    text: "Ihr digitales Apotheken-Display dient als zentrale Informationsfläche.",
  },
  {
    number: "02",
    icon: PanelsTopLeft,
    title: "Notdienst Anzeiger aktivieren",
    text: "Das Notdienst-Modul wird für Ihre Apotheke eingerichtet.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Kunden informieren",
    text: "Die Notdienstinformationen werden gut sichtbar und professionell auf Ihrem Display präsentiert.",
  },
];

const cities = [
  "Berlin",
  "Hamburg",
  "München",
  "Köln",
  "Frankfurt am Main",
  "Stuttgart",
  "Düsseldorf",
  "Leipzig",
  "Dortmund",
  "Essen",
  "Bremen",
  "Dresden",
  "Hannover",
  "Nürnberg",
  "Duisburg",
  "Bochum",
  "Wuppertal",
  "Bielefeld",
  "Bonn",
  "Münster",
  "Mannheim",
  "Karlsruhe",
  "Augsburg",
  "Wiesbaden",
  "Mönchengladbach",
  "Gelsenkirchen",
  "Aachen",
  "Braunschweig",
  "Kiel",
  "Chemnitz",
  "Magdeburg",
  "Freiburg",
  "Mainz",
  "Lübeck",
  "Erfurt",
  "Rostock",
  "Potsdam",
];

const audiences = [
  {
    icon: Building2,
    title: "Innenstadt-Apotheken",
    text: "Ideal für gut frequentierte Standorte und große Schaufensterflächen.",
  },
  {
    icon: ShoppingBag,
    title: "Einkaufszentren",
    text: "Informationen professionell auf einem zentralen Display präsentieren.",
  },
  {
    icon: House,
    title: "Wohngebiet-Apotheken",
    text: "Auch außerhalb der Öffnungszeiten wichtige Informationen sichtbar machen.",
  },
  {
    icon: Monitor,
    title: "Apotheken mit Schaufenster-Display",
    text: "Das Display wird auch nach Geschäftsschluss zum Informationspunkt.",
  },
];

const faqs = [
  {
    question: "Was ist ein Apotheken Notdienst Anzeiger?",
    answer:
      "Ein Apotheken Notdienst Anzeiger stellt Informationen zum Apotheken-Notdienst übersichtlich auf einem digitalen Display dar. Dadurch können wichtige Informationen insbesondere außerhalb der regulären Öffnungszeiten gut sichtbar präsentiert werden.",
  },
  {
    question: "Was kostet der DOKTV Notdienst Anzeiger?",
    answer: "Der DOKTV Apotheken Notdienst Anzeiger kostet 10 € netto pro Monat.",
  },
  {
    question: "Wo wird die Notdienstanzeige dargestellt?",
    answer:
      "Die Anzeige wird auf dem für DOKTV verwendeten Display dargestellt und ist für große Bildschirmflächen optimiert.",
  },
  {
    question: "Ist die Notdienstanzeige auch für das Schaufenster geeignet?",
    answer:
      "Ja. Besonders Displays im Schaufenster eignen sich dazu, Informationen auch außerhalb der regulären Öffnungszeiten sichtbar zu präsentieren, sofern das Display entsprechend positioniert und betrieben wird.",
  },
  {
    question: "Für welche Apotheken ist der Notdienst Anzeiger geeignet?",
    answer:
      "Die Lösung eignet sich grundsätzlich für Apotheken, die bereits digitale Displays verwenden oder ihre Kundenkommunikation digitalisieren möchten.",
  },
  {
    question: "Kann der Notdienst Anzeiger in Berlin genutzt werden?",
    answer:
      "Ja. DOKTV ist nicht auf eine bestimmte Stadt beschränkt und kann von Apotheken beispielsweise in Berlin, Hamburg, München, Köln, Frankfurt, Stuttgart und vielen weiteren Städten eingesetzt werden.",
  },
  {
    question: "Kann ich den Notdienst Anzeiger zu DOKTV hinzubuchen?",
    answer:
      "Ja. Der Notdienst Anzeiger kann als Zusatzfunktion für 10 € netto monatlich zu DOKTV hinzugebucht werden.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DOKTV Apotheken Notdienst Anzeiger",
  description:
    "Digitale Darstellung von Notdienstinformationen auf einem DOKTV Display für Apotheken.",
  provider: {
    "@type": "Organization",
    name: "DOKTV UG (haftungsbeschränkt)",
    url: "https://doktv.de",
  },
  areaServed: {
    "@type": "Country",
    name: "Deutschland",
  },
  offers: {
    "@type": "Offer",
    price: "10.00",
    priceCurrency: "EUR",
    url: pageUrl,
    description: "10 € netto pro Monat als Zusatzfunktion zu DOKTV",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: "https://doktv.de",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Apotheken Notdienst Anzeiger",
      item: pageUrl,
    },
  ],
};

function DisplayPreview({ compact = false }: { compact?: boolean }) {
  return (
    <figure
      className={`notdienst-display relative mx-auto w-full ${
        compact ? "max-w-2xl" : "max-w-[50rem]"
      }`}
    >
      <Image
        src={
          compact
            ? "/notdienst/digitaler-apotheken-notdienst-display.png"
            : "/notdienst/apotheken-notdienst-anzeiger-doktv.png"
        }
        alt="Digitaler Apotheken Notdienst Anzeiger auf einem DOKTV Display"
        width={1448}
        height={1086}
        loading={compact ? "lazy" : "eager"}
        sizes={compact ? "(max-width: 1024px) 94vw, 48vw" : "(max-width: 1024px) 96vw, 52vw"}
        className="h-auto w-full drop-shadow-[0_34px_46px_rgba(15,118,110,0.16)]"
      />

      <div className="absolute left-[5.2%] right-[5.2%] top-[11.7%] h-[68.4%] overflow-hidden rounded-[0.35rem] bg-[#062f3b] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_10%,rgba(94,234,212,0.28),transparent_38%),linear-gradient(135deg,#073342_0%,#0d5d66_100%)]" />
        <div className="absolute -right-[3%] -top-[16%] h-[64%] w-[30%] rounded-full border border-white/10" />
        <div className="absolute -bottom-[38%] -left-[5%] h-[72%] w-[32%] rounded-full bg-teal-300/10 blur-2xl" />

        <div className="relative flex h-full flex-col px-[4.5%] py-[3.2%]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-[0.45em] font-black tracking-[0.13em] text-teal-200 [font-size:clamp(.34rem,1vw,.72rem)]">
                <Moon className="h-[1.2em] w-[1.2em]" aria-hidden="true" />
                APOTHEKEN NOTDIENST
              </div>
              <p className="mt-[0.25em] font-black tracking-[-0.03em] [font-size:clamp(.56rem,1.45vw,1.15rem)]">
                Heute für Sie im Notdienst
              </p>
            </div>
            <span className="rounded-full border border-white/25 bg-white/10 px-[0.8em] py-[0.45em] font-black uppercase tracking-[0.16em] text-white [font-size:clamp(.28rem,.72vw,.55rem)]">
              Demo
            </span>
          </div>

          <div className="mt-[3%] grid flex-1 grid-cols-3 gap-[1.3%]">
            {demoPharmacies.map((pharmacy, index) => (
              <article
                key={pharmacy.name}
                className="flex min-w-0 flex-col rounded-[clamp(.28rem,1vw,.7rem)] border border-white/15 bg-white/[0.09] p-[6.5%] shadow-lg backdrop-blur-sm"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="flex h-[clamp(.75rem,2vw,1.4rem)] w-[clamp(.75rem,2vw,1.4rem)] items-center justify-center rounded-full bg-teal-300 font-black text-[#073342] [font-size:clamp(.32rem,.8vw,.58rem)]">
                    {index + 1}
                  </span>
                  <Navigation className="h-[clamp(.48rem,1.25vw,.9rem)] w-[clamp(.48rem,1.25vw,.9rem)] text-teal-200" aria-hidden="true" />
                </div>
                <h3 className="mt-[7%] truncate font-black tracking-[-0.03em] [font-size:clamp(.35rem,1.05vw,.8rem)]">
                  {pharmacy.name}
                </h3>
                <p className="mt-[4%] leading-[1.35] text-slate-200 [font-size:clamp(.28rem,.72vw,.57rem)]">
                  {pharmacy.address}
                  <br />
                  {pharmacy.city}
                </p>
                <p className="mt-auto flex items-center gap-[0.35em] pt-[5%] font-bold text-teal-100 [font-size:clamp(.28rem,.7vw,.55rem)]">
                  <MapPin className="h-[1.05em] w-[1.05em] shrink-0" aria-hidden="true" />
                  {pharmacy.distance}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-[2.3%] flex items-end justify-between gap-3">
            <p className="font-bold text-teal-50 [font-size:clamp(.3rem,.82vw,.62rem)]">
              Im Notfall gut informiert.
            </p>
            <p className="text-slate-300 [font-size:clamp(.25rem,.62vw,.48rem)]">
              Beispielanzeige · Powered by DOKTV
            </p>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        Beispielansicht mit fiktiven Apotheken und Entfernungsangaben. Keine aktuellen Notdienstdaten.
      </figcaption>
    </figure>
  );
}

export default function ApothekenNotdienstAnzeigerPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="notdienst-hero relative overflow-hidden pb-16 pt-5 sm:pb-20 lg:pb-24 lg:pt-6">
        <div className="pointer-events-none absolute left-[-8rem] top-36 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="pointer-events-none absolute right-[-9rem] top-10 h-[30rem] w-[30rem] rounded-full bg-teal-100/70 blur-3xl" />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-9 text-sm font-bold text-slate-500 lg:mb-5 xl:mb-9">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-teal-700">
                  Startseite
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-300">
                /
              </li>
              <li aria-current="page" className="text-slate-800">
                Apotheken Notdienst Anzeiger
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 xl:gap-12">
            <div className="notdienst-hero-copy relative z-10">
              <Eyebrow>Digitaler Apotheken-Notdienst</Eyebrow>
              <h1 className="mt-6 max-w-3xl text-balance text-[2.8rem] font-black leading-[0.98] tracking-[-0.058em] text-slate-950 sm:text-6xl lg:text-[3rem] xl:text-[4.15rem]">
                Der Apotheken Notdienst Anzeiger, der sofort ins Auge fällt.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl lg:mt-4 lg:text-base lg:leading-7 xl:mt-7 xl:text-lg xl:leading-8">
                Informieren Sie Ihre Kunden auch außerhalb Ihrer Öffnungszeiten übersichtlich,
                professionell und gut sichtbar über den Apotheken-Notdienst – direkt auf Ihrem
                DOKTV Display.
              </p>

              <div className="mt-7 flex flex-wrap items-end gap-x-3 gap-y-1 lg:mt-4 xl:mt-7">
                <p className="text-3xl font-black tracking-[-0.04em] text-teal-800 sm:text-4xl">
                  Nur 10 €
                </p>
                <p className="pb-1 font-extrabold text-slate-700">netto / Monat</p>
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Einfach zu Ihrem DOKTV Service zubuchbar.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-5 lg:flex-col lg:items-start xl:mt-8 xl:flex-row">
                <Link href="/kontakt?display=notdienst#anfrage" className="button-primary">
                  Notdienst Anzeiger anfragen
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="#so-funktioniert-es" className="button-secondary">
                  So funktioniert es
                </Link>
              </div>

              <div className="mt-8 grid gap-3 text-sm font-bold text-slate-700 sm:grid-cols-2 lg:mt-5 xl:mt-8">
                {[
                  "Professionelle Darstellung",
                  "Klar strukturiert und gut lesbar",
                  "Für große Apotheken-Displays optimiert",
                  "Nur 10 € netto monatlich",
                ].map((point) => (
                  <p key={point} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {point}
                  </p>
                ))}
              </div>
            </div>

            <div className="notdienst-hero-visual relative -mx-4 sm:mx-0">
              <div className="pointer-events-none absolute left-[4%] top-[13%] h-12 w-12 rounded-2xl border border-teal-200 bg-white/80 p-3 text-teal-700 shadow-lg backdrop-blur-sm sm:h-14 sm:w-14">
                <Clock3 className="h-full w-full" aria-hidden="true" />
              </div>
              <div className="pointer-events-none absolute right-[2%] top-[6%] h-11 w-11 rounded-full border border-amber-200 bg-amber-50/90 p-2.5 text-amber-700 shadow-lg sm:h-14 sm:w-14">
                <Moon className="h-full w-full" aria-hidden="true" />
              </div>
              <DisplayPreview />
              <p className="mx-auto -mt-3 max-w-xl px-6 text-center text-xs leading-5 text-slate-500 sm:-mt-6 sm:text-sm">
                Beispielanzeige mit fiktiven Apothekendaten – keine aktuellen Notdienstinformationen.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="notdienst-reveal grid items-end gap-8 lg:grid-cols-[1fr_0.72fr]">
            <SectionHeading
              eyebrow="Orientierung nach Ladenschluss"
              title="Wenn Ihre Apotheke geschlossen ist, benötigen Kunden trotzdem Orientierung."
              text="Außerhalb der regulären Öffnungszeiten suchen Menschen häufig schnell nach einer dienstbereiten Apotheke. Besonders nachts, an Wochenenden und an Feiertagen muss die wichtigste Information auf einen Blick erkennbar sein."
            />
            <p className="rounded-[2rem] border border-teal-100 bg-teal-50/70 p-6 text-lg leading-8 text-slate-700 shadow-sm sm:p-8">
              Mit dem digitalen DOKTV Apotheken Notdienst Anzeiger präsentieren Sie die relevanten
              Informationen übersichtlich auf Ihrem Display – modern, professionell und auch aus
              größerer Entfernung gut lesbar.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefitCards.map(({ icon: Icon, title, text }) => (
              <article key={title} className="notdienst-reveal surface-card p-7 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-7 text-2xl font-black tracking-tight text-slate-950">{title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#eef9f6] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-amber-100/70 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Transparentes Zusatzmodul</Eyebrow>
            <h2 className="mt-6 text-balance text-4xl font-black leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Professioneller Notdienst Anzeiger. Kleiner Preis. Große Wirkung.
            </h2>
          </div>

          <article className="notdienst-reveal mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-[2.5rem] border border-white bg-white shadow-[0_35px_90px_-48px_rgba(15,118,110,0.5)] lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative overflow-hidden bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-teal-400/25 blur-3xl" />
              <p className="relative text-sm font-black uppercase tracking-[0.16em] text-teal-300">
                Apotheken Notdienst Anzeiger
              </p>
              <div className="relative mt-8 flex flex-wrap items-end gap-3">
                <p className="text-7xl font-black tracking-[-0.065em] sm:text-8xl">10 €</p>
                <p className="pb-3 font-bold text-slate-300">netto / Monat</p>
              </div>
              <p className="relative mt-6 max-w-md text-lg leading-8 text-slate-300">
                Als Zusatzfunktion für Ihren bestehenden DOKTV Service.
              </p>
              <Link
                href="/kontakt?display=notdienst#anfrage"
                className="relative mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-teal-300 px-6 py-4 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200"
              >
                Für 10 € / Monat anfragen
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <p className="relative mt-4 text-sm text-slate-400">zzgl. gesetzlicher MwSt.</p>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
                Im Zusatzmodul enthalten
              </p>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {priceFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3 font-bold leading-7 text-slate-700">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
                <Link href="/preise" className="text-teal-800 underline decoration-teal-300 underline-offset-4">
                  Alle DOKTV Preise ansehen
                </Link>
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
                <Link
                  href="/schaufenster-display-apotheken"
                  className="text-teal-800 underline decoration-teal-300 underline-offset-4"
                >
                  Apotheken-Displays entdecken
                </Link>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section id="so-funktioniert-es" className="scroll-mt-28 py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="In drei Schritten"
            title="So wird Ihr Display zur digitalen Notdienstanzeige."
            text="Die Lösung fügt sich in Ihre bestehende DOKTV Kommunikation ein – klar, nachvollziehbar und ohne komplizierte Bedienoberfläche für Ihre Kunden."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, text }) => (
              <article
                key={number}
                className="notdienst-reveal group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.45)] sm:p-8"
              >
                <span className="absolute -right-2 -top-7 text-[8rem] font-black leading-none text-teal-50 transition group-hover:text-teal-100/80">
                  {number}
                </span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-teal-200">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="relative mt-8 text-sm font-black tracking-[0.2em] text-teal-700">{number}</p>
                <h2 className="relative mt-3 text-2xl font-black tracking-tight text-slate-950">{title}</h2>
                <p className="relative mt-4 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#fbf7f0] py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Vorher / Nachher"
            title="Vom klassischen Aushang zur digitalen Notdienstanzeige."
            text="Beide Wege vermitteln Informationen. Die digitale Darstellung macht sie jedoch klarer, größer und professionell in Ihre Apothekenkommunikation integrierbar."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="notdienst-reveal rounded-[2.25rem] border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/45 sm:p-9">
              <div className="mx-auto max-w-md -rotate-1 rounded-sm border border-stone-200 bg-[#fffefa] p-7 shadow-[0_16px_40px_-24px_rgba(71,55,38,0.35)] sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Notdienst-Aushang</p>
                <p className="mt-5 font-serif text-2xl font-bold text-stone-800">Apotheken-Notdienst</p>
                <div className="mt-6 space-y-3 text-sm leading-6 text-stone-600">
                  <p className="border-b border-stone-200 pb-3">Apotheke · Anschrift · Entfernung</p>
                  <p className="border-b border-stone-200 pb-3">Apotheke · Anschrift · Entfernung</p>
                  <p>Apotheke · Anschrift · Entfernung</p>
                </div>
              </div>
              <h2 className="mt-9 text-2xl font-black text-slate-950">Klassischer Aushang</h2>
              <ul className="mt-5 grid gap-3 text-slate-600">
                {[
                  "schwerer aus der Entfernung zu lesen",
                  "wenig Aufmerksamkeit",
                  "begrenzte Gestaltungsmöglichkeiten",
                  "wirkt schnell unübersichtlich",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="notdienst-reveal rounded-[2.25rem] border border-teal-200 bg-gradient-to-b from-white to-teal-50/60 p-4 shadow-xl shadow-teal-100/60 sm:p-7">
              <DisplayPreview compact />
              <div className="px-2 pb-3 sm:px-3">
                <h2 className="text-2xl font-black text-slate-950">DOKTV Notdienst Anzeiger</h2>
                <ul className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2">
                  {[
                    "auf einen Blick erfassbar",
                    "große, klare Darstellung",
                    "professionelles Erscheinungsbild",
                    "digital in Ihre Apothekenkommunikation integriert",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" strokeWidth={2.5} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Für moderne Apotheken</Eyebrow>
            <h2 className="mt-6 text-balance text-4xl font-black leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Digitaler Apotheken Notdienst Anzeiger für moderne Apotheken
            </h2>
            <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
              <Info className="h-7 w-7 text-teal-300" aria-hidden="true" />
              <p className="mt-5 leading-7 text-slate-300">
                DOKTV verbindet den Apotheken Notdienst Bildschirm mit Ihrer bestehenden Digital
                Signage Apotheke – als klar gestaltetes Zusatzmodul für 10 € netto monatlich.
              </p>
            </div>
          </div>

          <div className="notdienst-reveal space-y-6 text-lg leading-9 text-slate-600">
            <p>
              Der Apotheken-Notdienst ist besonders außerhalb regulärer Öffnungszeiten eine wichtige
              Orientierung für Patientinnen und Patienten. Ein digitaler Apotheken Notdienst Anzeiger
              ermöglicht es, entsprechende Informationen übersichtlich und gut sichtbar auf einem
              großen Bildschirm in der Apotheke oder im Schaufenster darzustellen.
            </p>
            <p>
              Mit DOKTV wird die klassische Notdienstanzeige Teil Ihrer digitalen
              Apothekenkommunikation. Statt einer unauffälligen Darstellung erhalten Ihre Kunden eine
              moderne, klar strukturierte Ansicht, die speziell für große Displays entwickelt wurde.
              Das Notdienst Display der Apotheke ergänzt damit Angebote, Öffnungszeiten und weitere
              Inhalte im digitalen Schaufenster.
            </p>
            <p>
              Ob Apotheke in Berlin, Hamburg, München, Köln, Frankfurt am Main oder einer kleineren
              Stadt: Eine gut sichtbare Notdienstanzeige unterstützt Apotheken dabei, wichtige
              Informationen professionell zu kommunizieren. Der digitale Notdienstanzeiger ist dabei
              keine separate Insel, sondern Teil des vorhandenen Apotheken Displays.
            </p>
            <p>
              Sie möchten neben der Notdienstanzeige auch weitere Inhalte zeigen? Erfahren Sie mehr
              über das <Link href="/schaufenster-display-apotheken">digitale Schaufenster für Apotheken</Link>,
              unsere <Link href="/preise">Preise</Link> oder sprechen Sie direkt mit uns über Ihre
              gewünschte Lösung.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-teal-500/20 blur-3xl" />
        <Container className="relative">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.65fr]">
            <SectionHeading
              eyebrow="Deutschlandweit"
              title="Apotheken Notdienst Anzeiger – deutschlandweit einsetzbar"
              text="DOKTV richtet sich an Apotheken in ganz Deutschland. Unser digitaler Notdienst Anzeiger kann beispielsweise von Apotheken in folgenden Städten eingesetzt werden:"
              light
            />
            <div className="hidden justify-end lg:flex">
              <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.06] text-teal-300">
                <MapPin className="h-11 w-11" aria-hidden="true" />
              </div>
            </div>
          </div>

          <ul className="notdienst-reveal mt-12 flex flex-wrap gap-2.5" aria-label="Beispielstädte in Deutschland">
            {cities.map((city, index) => (
              <li
                key={city}
                className={`rounded-full border px-4 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-300 hover:text-slate-950 ${
                  index % 5 === 0
                    ? "border-teal-300/35 bg-teal-300/10 text-teal-100"
                    : "border-white/10 bg-white/[0.05] text-slate-200"
                }`}
              >
                {city}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-400">
            Die genannten Orte sind Beispiele für den deutschlandweiten Einsatz und keine Aussage über
            bestehende Installationen an jedem dieser Standorte.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Passend für Ihren Standort"
            title="Entwickelt für Apotheken, die Informationen sichtbar machen möchten."
            text="Ob Innenstadt, Wohngebiet oder Einkaufszentrum: Entscheidend ist eine gut platzierte, klar lesbare Informationsfläche."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {audiences.map(({ icon: Icon, title, text }) => (
              <article key={title} className="notdienst-reveal surface-card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-7 text-xl font-black leading-tight text-slate-950">{title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f8f7] py-20 sm:py-24 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          <div>
            <Eyebrow>Häufige Fragen</Eyebrow>
            <h2 className="mt-6 text-balance text-4xl font-black leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Alles Wichtige zum Notdienst Anzeiger.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Die häufigsten Fragen zu Darstellung, Preis und Einsatz auf Ihrem DOKTV Display.
            </p>
          </div>

          <div className="notdienst-reveal grid gap-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white px-5 shadow-sm open:border-teal-200 open:shadow-md sm:px-6"
                open={index === 0}
              >
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 font-black text-slate-950 marker:hidden">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-teal-700 transition duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="border-t border-slate-100 pb-6 pt-5 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:py-28">
        <Container className="relative overflow-hidden rounded-[2.75rem] bg-gradient-to-br from-[#083d47] via-[#07565c] to-[#0f766e] px-6 py-14 text-white shadow-[0_35px_90px_-45px_rgba(15,118,110,0.7)] sm:px-10 lg:px-16 lg:py-20">
          <div className="absolute -right-32 -top-36 h-96 w-96 rounded-full border border-white/10 bg-teal-200/10" />
          <div className="absolute -bottom-28 left-[38%] h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-200">
                Bereit für den nächsten Schritt?
              </p>
              <h2 className="mt-5 text-balance text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Machen Sie Ihren Apotheken-Notdienst sichtbar.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-teal-50/85">
                Mit dem DOKTV Notdienst Anzeiger präsentieren Sie wichtige Informationen modern,
                übersichtlich und professionell – für nur 10 € netto im Monat.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kontakt?display=notdienst#anfrage"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-50"
                >
                  Notdienst Anzeiger jetzt anfragen
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="/schaufenster-display-apotheken" className="button-secondary-dark min-h-14">
                  DOKTV kennenlernen
                </Link>
              </div>
            </div>
            <div className="-mx-8 -mb-16 lg:-mr-20 lg:-mb-24">
              <DisplayPreview compact />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
