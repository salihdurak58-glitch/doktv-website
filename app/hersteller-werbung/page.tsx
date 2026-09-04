import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckList, Container, CTASection, Eyebrow, FeatureCard, ImagePanel, PrimaryButton, SecondaryButton, SectionHeading } from "../components/PublicUI";

export const metadata = {
  title: "Hersteller Werbung in Apotheken & Praxen | DokTV",
  description: "Digitale Herstellerwerbung im Gesundheitsumfeld: Kampagnen planen, Inhalte gestalten und über passende DokTV Standorte ausspielen.",
};

const campaignTypes = ["OTC- und Gesundheitsprodukte", "Nahrungsergänzung und Pflege", "Kosmetik und Wohlbefinden", "Produktneuheiten und Aktionen", "Saisonale Gesundheitsthemen", "Regionale Kampagnen"];

export default function HerstellerWerbungPage() {
  return (
    <main className="bg-[#f7faf9] text-slate-900">
      <Header />
      <section className="page-hero py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow>Für Gesundheitsmarken</Eyebrow>
              <h1 className="mt-6 text-balance text-4xl font-black leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-6xl">Ihre Kampagne trifft auf den passenden Gesundheitskontext.</h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">DokTV bringt Herstellerinhalte auf digitale Flächen in Apotheken und Praxen. Standort, Laufzeit und Inhalt werden gemeinsam geplant – ohne unklare Reichweitenversprechen.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><PrimaryButton href="/kontakt">Kampagne anfragen</PrimaryButton><SecondaryButton href="/standorte">Standorte ansehen</SecondaryButton></div>
            </div>
            <ImagePanel src="/referenzen/sky-apotheke-wedding-1.jpg" alt="Sky Apotheke Wedding als realer DokTV Standort" priority className="min-h-[420px] lg:min-h-[570px]" />
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="So entsteht die Kampagne" title="Von Ihrer Botschaft bis zum Kontaktpunkt" text="DokTV verbindet Marke, Gestaltung und digitale Ausspielung mit passenden Gesundheitsstandorten." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {["Ziel & Region klären", "Standorte auswählen", "Inhalte abstimmen", "Kampagne ausspielen"].map((step, index) => <FeatureCard key={step} number={`0${index + 1}`} title={step}>Transparent geplant und persönlich begleitet.</FeatureCard>)}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div><SectionHeading eyebrow="Mögliche Themen" title="Für Produkte mit echtem Gesundheitsbezug" text="Die Apotheke oder Praxis behält die Kontrolle darüber, welche Inhalte am jeweiligen Standort gezeigt werden." /><div className="mt-8"><CheckList items={campaignTypes} /></div></div>
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-300">Was wir vorab klären</p>
              <ul className="mt-7 grid gap-5 text-lg leading-8 text-slate-300">
                <li>Welches Produkt und welches Kommunikationsziel stehen im Fokus?</li>
                <li>Welche Region und welche Standorte passen zur Kampagne?</li>
                <li>Welche Werbemittel gibt es – und was soll DokTV erstellen?</li>
                <li>Welche Laufzeit und zeitliche Taktung sind sinnvoll?</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-teal-50 py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ImagePanel src="/referenzen/sky-apotheke-kreuzberg-1.jpg" alt="Realer DokTV Standort der Sky Apotheke Kreuzberg" className="min-h-[420px]" />
            <SectionHeading eyebrow="Reale Standorte" title="Sichtbarkeit in einem glaubwürdigen Umfeld" text="Unsere Referenzen zeigen echte Installationen in Berlin. Verfügbarkeit und Auswahl weiterer Flächen stimmen wir konkret mit Ihnen ab." />
          </div>
        </Container>
      </section>

      <CTASection title="Planen wir Ihre Gesundheitskampagne." text="Sagen Sie uns Produkt, Region und Ziel – wir besprechen die passenden nächsten Schritte." />
      <Footer />
    </main>
  );
}
