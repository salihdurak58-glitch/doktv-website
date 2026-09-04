import { generatePageMetadata } from "@/app/lib/seo/get-page-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Eyebrow, FeatureCard, SectionHeading } from "../components/PublicUI";
import KontaktForm from "./KontaktForm";

export async function generateMetadata() {
  return generatePageMetadata("/kontakt");
}

const nextSteps = [
  { title: "Anfrage senden", text: "Sie nennen uns Standort, Einsatzbereich und Ihre gewünschte Displaygröße." },
  { title: "Persönlich abstimmen", text: "Wir klären Platzierung, Inhalte und die sinnvolle Lösung für Ihren Standort." },
  { title: "Passendes Angebot", text: "Sie erhalten eine nachvollziehbare Empfehlung mit klaren Hardware- und Servicekosten." },
];

export default async function KontaktPage({ searchParams }: { searchParams: Promise<{ display?: string | string[] }> }) {
  const params = await searchParams;
  const requestedDisplay = Array.isArray(params.display) ? params.display[0] : params.display;
  const initialDisplay = requestedDisplay === "55" || requestedDisplay === "65" ? requestedDisplay : undefined;

  return (
    <main className="min-h-screen bg-[#f7faf9] text-slate-900">
      <Header />

      <section className="page-hero overflow-hidden py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Direkter Kontakt</Eyebrow>
            <h1 className="mt-6 text-balance text-4xl font-black leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
              Erzählen Sie uns kurz von Ihrem Standort.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Wir beraten Apotheken, Praxen und Gesundheitsmarken persönlich – verständlich, unverbindlich und mit klaren nächsten Schritten.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-28">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="order-2 lg:order-1 lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="So geht es weiter"
                title="Einfach anfragen. Persönlich planen."
                text="Schon wenige Angaben reichen für den ersten Austausch. Wenn Sie eine Displaygröße auf der Preisseite gewählt haben, ist sie im Formular bereits vorausgewählt."
              />
              <div className="mt-8 grid gap-4">
                {nextSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-black text-teal-800">{index + 1}</span>
                    <div>
                      <h2 className="font-black text-slate-950">{step.title}</h2>
                      <p className="mt-1 leading-6 text-slate-600">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-3xl bg-slate-950 p-7 text-white">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-300">Gut zu wissen</p>
                <p className="mt-3 leading-7 text-slate-300">Die Erstberatung ist kostenlos und unverbindlich. Wir melden uns persönlich statt mit einer automatischen Verkaufskette.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <KontaktForm initialDisplay={initialDisplay} />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Ihr Thema" title="Wobei können wir Sie unterstützen?" text="DokTV verbindet passende Displaytechnik mit Inhalten und laufender Betreuung." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <FeatureCard title="Apotheken">Digitale Schaufenster für Angebote, Gesundheitsinformationen und saisonale Inhalte.</FeatureCard>
            <FeatureCard title="Arztpraxen">Ruhige, verständliche Patienteninformation für Wartezimmer und Empfang.</FeatureCard>
            <FeatureCard title="Hersteller">Kampagneninhalte für relevante Kontaktpunkte im Gesundheitsumfeld.</FeatureCard>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
