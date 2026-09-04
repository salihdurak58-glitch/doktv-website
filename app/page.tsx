import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Container,
  CTASection,
  Eyebrow,
  FeatureCard,
  ImagePanel,
  PrimaryButton,
  PricingTeaser,
  SecondaryButton,
  SectionHeading,
} from "./components/PublicUI";
import { generatePageMetadata } from "@/app/lib/seo/get-page-seo";
import { getSiteContent } from "@/app/lib/content/get-site-content";
import { doktvReferences } from "@/app/lib/references";

export async function generateMetadata() {
  return generatePageMetadata("/");
}

const serviceSteps = [
  { number: "01", title: "Display", text: "Passende 55- oder 65-Zoll-Hardware für Ihren Standort." },
  { number: "02", title: "Einrichtung", text: "Wir richten das System für Ihre Apotheke oder Praxis ein." },
  { number: "03", title: "Werbung & Content", text: "Wir erstellen die Werbeinhalte. Sie entscheiden, was auf Ihrem Display läuft." },
  { number: "04", title: "Laufende Betreuung", text: "Inhalte können regelmäßig aktualisiert und angepasst werden." },
];

const faqs = [
  { q: "Was macht DokTV?", a: "DokTV verbindet professionelle Displays, Einrichtung und Content-Service für Apotheken und Praxen. Hersteller können Kampagnen im Gesundheitsumfeld besprechen." },
  { q: "Was kann auf den Displays gezeigt werden?", a: "Möglich sind Angebote, Aktionen, Gesundheitsinformationen, Praxisleistungen, Öffnungszeiten, Notdienst-Hinweise, Herstellerwerbung und saisonale Inhalte." },
  { q: "Wer entscheidet über die Inhalte?", a: "Die Apotheke oder Praxis entscheidet, welche Werbung und welche Inhalte ausgespielt werden. DokTV übernimmt die professionelle Gestaltung und Ausspielung." },
  { q: "Ist DokTV nur für Berlin?", a: "DokTV hat echte Installationen in Berlin und kann grundsätzlich auch für Standorte außerhalb Berlins angefragt werden." },
];

export default async function HomePage() {
  const content = await getSiteContent([
    "homepage_hero_eyebrow",
    "homepage_hero_title",
    "homepage_hero_subtitle",
    "homepage_primary_cta",
    "homepage_secondary_cta",
  ]);
  const legacyTitle = content.homepage_hero_title?.includes("Mehr Sichtbarkeit");
  const heroTitle = content.homepage_hero_title && !legacyTitle ? content.homepage_hero_title : "Ihr Schaufenster kann mehr.";
  const heroSubtitle = content.homepage_hero_subtitle && !legacyTitle ? content.homepage_hero_subtitle : "Professionelle Displays, individuelle Werbeinhalte und laufende Betreuung – alles aus einer Hand.";

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <Header />

      <section className="page-hero py-14 sm:py-18 lg:py-24">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow>{content.homepage_hero_eyebrow || "Digital Signage für Apotheken & Praxen"}</Eyebrow>
            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[5.4rem]">{heroTitle}</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">{heroSubtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/kontakt">{content.homepage_primary_cta || "Kostenlose Beratung"}</PrimaryButton>
              <SecondaryButton href="/referenzen">{content.homepage_secondary_cta || "Echte Installationen ansehen"}</SecondaryButton>
            </div>
            <div className="mt-8 grid gap-3 text-sm font-bold text-slate-700 sm:grid-cols-3">
              {["Installation & Einrichtung", "Individuelle Werbeinhalte", "Laufende Betreuung"].map((point) => (
                <p key={point} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-xs text-teal-800">✓</span>
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="relative">
            <ImagePanel
              src="/referenzen/sky-apotheke-kudamm-2.jpg"
              alt="Zwei digitale DokTV Schaufenster-Displays in der Sky Apotheke am Kurfürstendamm"
              priority
              className="aspect-[4/3] min-h-[24rem] lg:min-h-[36rem]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-slate-950/75 p-4 text-white shadow-xl backdrop-blur-md sm:left-7 sm:right-auto sm:max-w-xs sm:p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-300">Echt installiert</p>
              <p className="mt-2 text-lg font-black">Sky Apotheke Kudamm</p>
              <p className="mt-1 text-sm text-slate-300">Kurfürstendamm 139 · Berlin</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f6f9f8] py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Echte Installationen" title="So sieht DokTV im echten Einsatz aus." text="Keine Renderings. Keine Stockfotos. Echte Display-Installationen in Berliner Apotheken." />
          <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
            <Link href="/referenzen" className="group relative min-h-[32rem] overflow-hidden rounded-[2rem] lg:col-span-7 lg:row-span-2">
              <Image src={doktvReferences[1].images[1].src} alt={doktvReferences[1].images[1].alt} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-sm font-bold text-teal-200">Berlin-Kudamm</p>
                <h3 className="mt-2 text-3xl font-black">{doktvReferences[1].title}</h3>
                <p className="mt-2 text-slate-200">{doktvReferences[1].address}</p>
              </div>
            </Link>
            {[doktvReferences[0], doktvReferences[2]].map((reference) => (
              <Link key={reference.title} href="/referenzen" className="group relative min-h-[19rem] overflow-hidden rounded-[2rem] lg:col-span-5">
                <Image src={reference.images[1].src} alt={reference.images[1].alt} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-200">{reference.location}</p>
                  <h3 className="mt-2 text-xl font-black">{reference.title}</h3>
                  <p className="mt-1 text-sm text-slate-200">{reference.address}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8"><SecondaryButton href="/referenzen">Alle Referenzen ansehen</SecondaryButton></div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Alles aus einer Hand" title="Display, Werbung und Betreuung. Alles aus einer Hand." text="Ein klarer Ablauf, ein persönlicher Ansprechpartner und Inhalte, die zu Ihrem Standort passen." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {serviceSteps.map((item) => <FeatureCard key={item.number} number={item.number} title={item.title}><p>{item.text}</p></FeatureCard>)}
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-20 text-white lg:py-28">
        <Container>
          <SectionHeading eyebrow="So funktioniert DokTV" title="Vom passenden Display zum fertigen Programm." text="Sie sagen uns, was Ihr Standort braucht. Wir kümmern uns um die technische und visuelle Umsetzung." light />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Display auswählen", "DokTV einrichten lassen", "Werbung auswählen & ausspielen"].map((step, index) => (
              <article key={step} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
                <p className="text-sm font-black tracking-[0.2em] text-teal-300">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-black">{step}</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {index === 0 && "55 oder 65 Zoll – passend für Schaufenster, Verkaufsbereich oder Wartezimmer."}
                  {index === 1 && "Wir bereiten Ihre DokTV-Lösung vor und stimmen die Einrichtung persönlich mit Ihnen ab."}
                  {index === 2 && "Sie bestimmen die Inhalte. DokTV gestaltet, verwaltet und aktualisiert sie."}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f6f9f8] py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Transparente Preise" title="Einmal Display. Monatlich Rundum-Service." text="Klare Hardwarepreise und ein Content-Service, der Ihre laufende Kommunikation übernimmt." />
          <div className="mt-12"><PricingTeaser /></div>
          <p className="mt-6 max-w-3xl leading-7 text-slate-600">Wir erstellen die Werbeinhalte für Ihr Display. Ihre Apotheke oder Praxis entscheidet, welche Werbung ausgespielt wird. Details zur Installation besprechen wir im persönlichen Angebot.</p>
          <div className="mt-8"><PrimaryButton href="/preise">Preise & Leistungen ansehen</PrimaryButton></div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ImagePanel src="/referenzen/sky-apotheke-kreuzberg-2.jpg" alt="DokTV Display in der Sky Apotheke Kreuzberg am Abend" className="aspect-[4/3]" />
          <div>
            <SectionHeading eyebrow="Digitale Gesundheitskommunikation" title="Ihre Angebote verdienen Aufmerksamkeit." text="Klassische Aushänge gehen im Alltag schnell unter. Digitale Displays machen wechselnde Angebote, Gesundheitsinformationen, Praxisleistungen und saisonale Kampagnen am Standort sichtbar." />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Apotheken", "Arztpraxen", "Gesundheitszentren", "Hersteller & Marken"].map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-bold text-slate-700 shadow-sm">{item}</div>)}
            </div>
            <p className="mt-7 leading-8 text-slate-600">DokTV verbindet digitale Schaufenster-Displays, Wartezimmer TV und Herstellerwerbung zu einer professionellen Kommunikationsfläche, die flexibel aktualisiert werden kann – in Berlin und grundsätzlich auch deutschlandweit.</p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f6f9f8] py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Häufige Fragen" title="Kurz erklärt, bevor wir persönlich sprechen." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => <article key={faq.q} className="surface-card p-7"><h3 className="text-xl font-black text-slate-950">{faq.q}</h3><p className="mt-4 leading-7 text-slate-600">{faq.a}</p></article>)}
          </div>
        </Container>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
