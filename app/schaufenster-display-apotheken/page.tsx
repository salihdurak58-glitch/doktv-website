import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckList, Container, CTASection, Eyebrow, FeatureCard, ImagePanel, PrimaryButton, PricingTeaser, SecondaryButton, SectionHeading } from "../components/PublicUI";

export const metadata = {
  title: "Schaufenster Display Apotheke | Digital Signage Apotheke – DokTV",
  description: "Digitale Schaufenster Displays für Apotheken. Hardware, Werbeinhalte und laufende Betreuung aus einer Hand.",
};

const benefits = [
  { title: "Sichtbar im Vorbeigehen", text: "Bewegte Inhalte geben Angeboten, Aktionen und Gesundheitsinformationen mehr Präsenz im Straßenbild." },
  { title: "Schnell aktualisiert", text: "Inhalte wechseln ohne Druck, Versand oder manuelles Austauschen im Schaufenster." },
  { title: "Professionell betreut", text: "DokTV erstellt die Werbeinhalte und übernimmt die technische Ausspielung für Ihren Standort." },
];

const content = ["Angebote und Aktionen", "OTC- und Kosmetikprodukte", "Saisonale Gesundheitskampagnen", "Notdienst-Hinweise", "Service- und Öffnungszeiten", "Gesundheitsinformationen"];

export default function SchaufensterDisplayPage() {
  return (
    <main className="bg-[#f7faf9] text-slate-900">
      <Header />
      <section className="page-hero overflow-hidden py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow>Digital Signage für Apotheken</Eyebrow>
              <h1 className="mt-6 text-balance text-4xl font-black leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-6xl">Ihr digitales Schaufenster arbeitet auch nach Ladenschluss.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Helle Schaufenster-Displays bringen Angebote, Gesundheitsthemen und Services in Bewegung. DokTV liefert Display, Inhalte und laufende Betreuung aus einer Hand.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/kontakt">Kostenlose Beratung</PrimaryButton>
                <SecondaryButton href="/referenzen">Echte Installationen</SecondaryButton>
              </div>
            </div>
            <ImagePanel src="/referenzen/sky-apotheke-kudamm-2.jpg" alt="Digitales Schaufenster-Display der Sky Apotheke am Kurfürstendamm" priority className="min-h-[420px] lg:min-h-[580px]" />
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Mehr als ein Bildschirm" title="Vom Schaufenster zur digitalen Fläche" text="Die Technik bleibt im Hintergrund. Im Vordergrund stehen Inhalte, die zu Ihrer Apotheke und zum Moment passen." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => <FeatureCard key={benefit.title} title={benefit.title}>{benefit.text}</FeatureCard>)}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ImagePanel src="/referenzen/sky-apotheke-kreuzberg-2.jpg" alt="Schaufenster-Display der Sky Apotheke Kreuzberg bei Nacht" className="min-h-[420px] lg:min-h-[540px]" />
            <div>
              <SectionHeading eyebrow="Ihre Inhalte" title="Relevant für Alltag, Saison und Standort" text="Sie entscheiden, welche Werbung gezeigt wird. DokTV gestaltet und steuert die Inhalte passend zu Ihrer Apotheke." />
              <div className="mt-8"><CheckList items={content} /></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <Container>
          <SectionHeading eyebrow="Alles aus einer Hand" title="Ein Ansprechpartner für Technik und Inhalte" text="Von der Größenwahl bis zur laufenden Ausspielung bleibt der Prozess einfach und nachvollziehbar." light />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Standort & Display planen", "Montage & Einrichtung", "Inhalte laufend betreuen"].map((item, index) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-7"><span className="text-sm font-black text-teal-300">0{index + 1}</span><h3 className="mt-5 text-xl font-black">{item}</h3></div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Klare Kosten" title="Die passende Größe für Ihr Schaufenster" text="Einmalige Hardware, transparenter monatlicher Service und eine optionale Notdienstanzeige." align="center" />
          <div className="mt-12"><PricingTeaser /></div>
          <div className="mt-8 text-center"><SecondaryButton href="/preise">Alle Preisdetails</SecondaryButton></div>
        </Container>
      </section>

      <CTASection title="Machen wir Ihr Schaufenster sichtbar." text="Wir schauen gemeinsam auf Standort, Blickwinkel und die passende Displaygröße." />
      <Footer />
    </main>
  );
}
