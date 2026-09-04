import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, CTASection, Eyebrow, FeatureCard, ImagePanel, PrimaryButton, SecondaryButton, SectionHeading } from "../components/PublicUI";

export const metadata = {
  title: "Über DokTV | Digital Signage für Apotheken & Praxen",
  description: "DokTV verbindet Displaytechnik, Werbeinhalte und laufende Betreuung für Apotheken, Praxen und Gesundheitsmarken.",
};

export default function UeberUnsPage() {
  return (
    <main className="bg-[#f7faf9] text-slate-900">
      <Header />
      <section className="page-hero py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Über DokTV</Eyebrow>
              <h1 className="mt-6 text-balance text-4xl font-black leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-6xl">Digitale Kommunikation, die im Alltag wirklich funktioniert.</h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">DokTV ist in Berlin zuhause und auf digitale Displays im Gesundheitsumfeld spezialisiert. Wir verbinden Technik, Inhalte und persönliche Betreuung zu einer einfachen Lösung.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><PrimaryButton href="/kontakt">Uns kennenlernen</PrimaryButton><SecondaryButton href="/referenzen">Referenzen ansehen</SecondaryButton></div>
            </div>
            <ImagePanel src="/referenzen/sky-apotheke-kudamm-1.jpg" alt="Sky Apotheke Kudamm mit einer DokTV Installation" priority className="min-h-[430px] lg:min-h-[570px]" />
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading eyebrow="Warum DokTV?" title="Ein Bildschirm allein schafft noch keine Wirkung." />
            <div className="prose-public space-y-6 text-lg leading-9 text-slate-600">
              <p>Viele Apotheken und Praxen haben gute Angebote, wichtige Informationen und besondere Leistungen – doch gedruckte Aushänge gehen im Alltag schnell unter.</p>
              <p>DokTV macht daraus eine digitale Kommunikationsfläche. Wir betrachten Standort, Blickwinkel, Zielgruppe und Inhalte zusammen. So entsteht kein Technikprojekt, sondern ein System, das sich im Tagesgeschäft sinnvoll nutzen lässt.</p>
              <p>Die Apotheke oder Praxis entscheidet, was gezeigt wird. Wir kümmern uns darum, dass es professionell aussieht, technisch läuft und aktuell bleibt.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Unser Prinzip" title="Persönlich, klar und nah am Standort" text="Wir versprechen keine erfundenen Reichweiten. Wir zeigen reale Installationen und sprechen konkret über das, was für Ihren Standort sinnvoll ist." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <FeatureCard number="01" title="Verstehen">Ziel, Standort und Alltag zuerst kennenlernen.</FeatureCard>
            <FeatureCard number="02" title="Umsetzen">Hardware, Montage und Inhalte sinnvoll verbinden.</FeatureCard>
            <FeatureCard number="03" title="Betreuen">Ausspielung und Aktualisierung dauerhaft begleiten.</FeatureCard>
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div><Eyebrow light>Berlin & darüber hinaus</Eyebrow><h2 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl">Entstanden für echte Gesundheitsstandorte.</h2><p className="mt-6 text-lg leading-8 text-slate-300">Unsere sichtbaren Referenzen stehen in Berlin – in Wedding, am Kurfürstendamm und in Kreuzberg. Weitere Projekte planen wir abhängig von Standort und Anforderung auch über Berlin hinaus.</p></div>
            <ImagePanel src="/referenzen/sky-apotheke-kreuzberg-2.jpg" alt="DokTV Display in der Sky Apotheke Kreuzberg" className="min-h-[380px] border-white/10" />
          </div>
        </Container>
      </section>

      <CTASection title="Lassen Sie uns über Ihren Standort sprechen." text="Wir erklären Ihnen ehrlich, welche Lösung passt und wie die Umsetzung abläuft." />
      <Footer />
    </main>
  );
}
