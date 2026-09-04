import Header from "./Header";
import Footer from "./Footer";
import { Container, CTASection, Eyebrow, FeatureCard, ImagePanel, PrimaryButton, SecondaryButton, SectionHeading } from "./PublicUI";

type SeoLandingProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sectionTitle: string;
  sectionText: string;
  items: string[];
  image?: { src: string; alt: string };
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function SeoLanding({ eyebrow, title, intro, sectionTitle, sectionText, items, image, primaryHref = "/kontakt", primaryLabel = "Kostenlose Beratung", secondaryHref = "/preise", secondaryLabel = "Preise ansehen" }: SeoLandingProps) {
  return (
    <main className="min-h-screen bg-[#f7faf9] text-slate-900">
      <Header />
      <section className="page-hero py-16 sm:py-20 lg:py-24">
        <Container>
          <div className={`grid items-center gap-10 ${image ? "lg:grid-cols-[0.9fr_1.1fr] lg:gap-16" : "mx-auto max-w-5xl text-center"}`}>
            <div>
              <Eyebrow>{eyebrow}</Eyebrow>
              <h1 className="mt-6 text-balance text-4xl font-black leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-6xl">{title}</h1>
              <p className={`mt-6 text-lg leading-8 text-slate-600 ${image ? "max-w-2xl" : "mx-auto max-w-3xl"}`}>{intro}</p>
              <div className={`mt-8 flex flex-col gap-3 sm:flex-row ${image ? "" : "justify-center"}`}><PrimaryButton href={primaryHref}>{primaryLabel}</PrimaryButton><SecondaryButton href={secondaryHref}>{secondaryLabel}</SecondaryButton></div>
            </div>
            {image ? <ImagePanel src={image.src} alt={image.alt} priority className="min-h-[400px] lg:min-h-[540px]" /> : null}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Im Überblick" title={sectionTitle} text={sectionText} align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => <FeatureCard key={item} number={`0${index + 1}`} title={item}>Individuell auf Standort, Zielgruppe und laufende Kommunikation abgestimmt.</FeatureCard>)}
          </div>
        </Container>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
