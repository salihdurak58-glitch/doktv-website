import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  CheckList,
  Container,
  CTASection,
  Eyebrow,
  PrimaryButton,
  SectionHeading,
} from "../components/PublicUI";
import { formatEuro, pricing } from "../lib/pricing";

export const metadata = {
  title: "Digital Signage Preise | DokTV Berlin",
  description:
    "Transparente DokTV Preise: Displays mit einmaligen Hardwarekosten und monatlicher Content-Service für Apotheken und Praxen.",
  alternates: { canonical: "https://doktv.de/preise" },
};

const displayFeatures = {
  55: [
    "55-Zoll-Display",
    "geeignet für Apotheken & Praxen",
    "professionelle Darstellung Ihrer Inhalte",
    "Vorbereitung für DokTV",
  ],
  65: [
    "65-Zoll-Display",
    "große Präsentationsfläche",
    "geeignet für Schaufenster & Innenbereich",
    "Vorbereitung für DokTV",
  ],
};

const serviceFeatures = [
  "Erstellung der Werbeinhalte",
  "Anpassung an Angebote und Aktionen der Apotheke",
  "Ausspielung der gewünschten Inhalte",
  "regelmäßige Aktualisierung",
  "zentrale Verwaltung",
  "persönlicher Ansprechpartner",
];

const faqs = [
  {
    q: "Was kostet ein DokTV Display?",
    a: `Das 55-Zoll-Display kostet ${formatEuro(pricing.displays[55].price)}, das 65-Zoll-Display ${formatEuro(pricing.displays[65].price)}. Beide Preise fallen einmalig für die Hardware an.`,
  },
  {
    q: "Welche monatlichen Kosten gibt es?",
    a: `Der DokTV Content-Service kostet ${formatEuro(pricing.service.price)} pro Monat. Der optionale Notdienstanzeiger kostet zusätzlich ${formatEuro(pricing.emergencyDisplay.price)} pro Monat.`,
  },
  {
    q: "Wer entscheidet, welche Werbung läuft?",
    a: "Ihre Apotheke oder Praxis entscheidet, welche Werbung und welche Inhalte ausgespielt werden. DokTV setzt Ihre Auswahl professionell um.",
  },
  {
    q: "Was kostet die Installation?",
    a: "Details zur Installation, zum Standort und zu möglichen Zusatzleistungen besprechen wir im persönlichen Angebot.",
  },
];

export default function PreisePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <Header />

      <section className="page-hero py-18 sm:py-24 lg:py-28">
        <Container>
          <Eyebrow>Transparent. Einfach. Planbar.</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
            Wählen Sie Ihr Display.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-600">
            Einmalige Hardwarekosten. Monatlicher DokTV-Service. Keine komplizierten Pakete.
          </p>
          <div className="mt-9"><PrimaryButton href="/kontakt">Kostenlose Beratung</PrimaryButton></div>
        </Container>
      </section>

      <section className="pb-20 lg:pb-28">
        <Container>
          <SectionHeading eyebrow="Hardware-Auswahl" title="55 oder 65 Zoll? Sie entscheiden." text="Beide Displaygrößen sind für DokTV vorbereitet. Welche Größe zu Ihrem Standort passt, klären wir gern persönlich." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {([55, 65] as const).map((size) => {
              const display = pricing.displays[size];
              return (
                <article key={size} className={`relative rounded-[2.25rem] border p-7 shadow-xl sm:p-10 ${size === 65 ? "border-teal-300 bg-teal-50/60 shadow-teal-100/70" : "border-slate-200 bg-white shadow-slate-200/60"}`}>
                  {size === 65 ? <p className="absolute right-6 top-6 rounded-full bg-teal-700 px-3.5 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">Mehr Sichtbarkeit</p> : null}
                  <p className="text-lg font-black text-teal-800">{display.size}</p>
                  <p className="mt-8 text-6xl font-black tracking-[-0.055em] text-slate-950">{formatEuro(display.price)}</p>
                  <p className="mt-2 font-bold text-slate-500">einmalig für die Hardware</p>
                  <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600">{display.description}</p>
                  <div className="mt-8"><CheckList items={displayFeatures[size]} /></div>
                  <Link href={`/kontakt?display=${display.query}#anfrage`} className="button-primary mt-9 w-full sm:w-auto">{display.size} anfragen <span aria-hidden="true">→</span></Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#f6f9f8] py-20 lg:py-28">
        <Container>
          <article className="grid gap-10 rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-14">
            <div>
              <Eyebrow>Monatlicher Service</Eyebrow>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">{pricing.service.name}</h2>
              <div className="mt-7 flex items-end gap-2">
                <p className="text-6xl font-black tracking-[-0.055em] text-teal-700">{formatEuro(pricing.service.price)}</p>
                <p className="pb-2 font-bold text-slate-500">/ Monat</p>
              </div>
              <p className="mt-7 text-xl font-bold leading-8 text-slate-800">Wir kümmern uns um das, was auf Ihrem Display zu sehen ist.</p>
              <p className="mt-4 leading-8 text-slate-600">Sie teilen uns mit, welche Angebote, Aktionen oder Informationen Sie zeigen möchten. DokTV erstellt daraus professionelle Werbeinhalte und spielt diese auf Ihrem Display aus.</p>
            </div>
            <div className="rounded-[2rem] bg-[#f3f8f7] p-6 sm:p-8">
              <CheckList items={serviceFeatures} />
              <p className="mt-7 rounded-2xl border border-teal-200 bg-white p-5 font-bold leading-7 text-slate-800">Die Apotheke entscheidet, welche Werbung und welche Inhalte ausgespielt werden.</p>
            </div>
          </article>

          <article className="mt-6 grid items-center gap-7 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-[1fr_auto] sm:p-8">
            <div>
              <p className="inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-slate-600">Optional</p>
              <h3 className="mt-4 text-3xl font-black text-slate-950">{pricing.emergencyDisplay.name}</h3>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">Auf Wunsch ergänzen wir Ihre DokTV-Lösung um einen digitalen Notdienstanzeiger.</p>
            </div>
            <div className="md:text-right">
              <p className="text-4xl font-black text-slate-950">+{formatEuro(pricing.emergencyDisplay.price)}</p>
              <p className="mt-1 font-bold text-slate-500">/ Monat</p>
              <Link href="/kontakt?display=notdienst#anfrage" className="mt-5 inline-flex font-black text-teal-700">Notdienstanzeiger mit anfragen →</Link>
            </div>
          </article>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Preisbeispiel" title="So setzt sich Ihr Preis zusammen." text="Einmal Hardware auswählen, monatlichen Service ergänzen und den Notdienstanzeiger nur bei Bedarf dazunehmen." />
          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
            <div className="surface-card p-7"><p className="text-sm font-black text-teal-700">SCHRITT 1</p><h3 className="mt-4 text-2xl font-black">Display einmalig</h3><p className="mt-5 text-lg text-slate-600">55 Zoll → <strong>{formatEuro(pricing.displays[55].price)}</strong><br />oder 65 Zoll → <strong>{formatEuro(pricing.displays[65].price)}</strong></p></div>
            <div className="hidden items-center text-3xl font-light text-slate-300 lg:flex">+</div>
            <div className="surface-card p-7"><p className="text-sm font-black text-teal-700">SCHRITT 2</p><h3 className="mt-4 text-2xl font-black">DokTV Service</h3><p className="mt-5 text-lg text-slate-600"><strong>{formatEuro(pricing.service.price)}</strong> / Monat</p></div>
            <div className="hidden items-center text-3xl font-light text-slate-300 lg:flex">+</div>
            <div className="surface-card p-7"><p className="text-sm font-black text-slate-500">OPTIONAL</p><h3 className="mt-4 text-2xl font-black">Notdienstanzeiger</h3><p className="mt-5 text-lg text-slate-600">+<strong>{formatEuro(pricing.emergencyDisplay.price)}</strong> / Monat</p></div>
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-500">Details zur Installation und zu weiteren Leistungen besprechen wir im persönlichen Angebot.</p>
        </Container>
      </section>

      <section className="bg-slate-950 py-20 text-white lg:py-28">
        <Container>
          <SectionHeading eyebrow="Häufige Fragen" title="Preise ohne Kleingedrucktes erklärt." light />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => <article key={faq.q} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7"><h3 className="text-xl font-black">{faq.q}</h3><p className="mt-4 leading-7 text-slate-300">{faq.a}</p></article>)}
          </div>
        </Container>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
