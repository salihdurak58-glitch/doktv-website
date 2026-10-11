import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Headset, Monitor, Palette } from "lucide-react";
import { Container, Eyebrow, PrimaryButton, SecondaryButton } from "../../components/PublicUI";
import { doktvReferences } from "../../lib/references";
import { formatEuro, pricing } from "../../lib/pricing";
import { generatePageMetadata } from "../../lib/seo/get-page-seo";
import { canonicalUrl } from "../../lib/seo/site";
import DisplaySelection from "./DisplaySelection";
import styles from "./preise.module.css";

const pageTitle = "Digital Signage für Apotheken: Preise & Kosten | DokTV";
const pageDescription = `55-Zoll-Display ${formatEuro(pricing.displays[55].price)}, 65-Zoll-Display ${formatEuro(pricing.displays[65].price)} einmalig. DokTV-Service ${formatEuro(pricing.service.price)} monatlich. Größen vergleichen und beraten lassen.`;
const pageUrl = canonicalUrl("/preise");
const pageImage = "/home/apotheke-hero-visualisierung.jpg";
const hardwareDifference = pricing.displays[65].price - pricing.displays[55].price;

export async function generateMetadata() {
  const existing = await generatePageMetadata("/preise", {
    title: pageTitle,
    description: pageDescription,
    image: pageImage,
  });
  return {
    ...existing,
    title: pageTitle,
    description: pageDescription,
    alternates: { ...existing.alternates, canonical: pageUrl },
    robots: { index: true, follow: true },
    openGraph: {
      ...existing.openGraph,
      title: existing.openGraph?.title || pageTitle,
      description: pageDescription,
      url: pageUrl,
    },
    twitter: {
      ...existing.twitter,
      card: "summary_large_image" as const,
      title: existing.twitter?.title || pageTitle,
      description: pageDescription,
    },
  };
}

const faqs = [
  { question: "Was kostet ein 55-Zoll-Apotheken-Display?", answer: `Das 55-Zoll-Display kostet ${formatEuro(pricing.displays[55].price)} einmalig für die Hardware. Hinzu kommt der DokTV Content-Service für ${formatEuro(pricing.service.price)} monatlich.` },
  { question: "Was kostet ein 65-Zoll-Apotheken-Display?", answer: `Das 65-Zoll-Display kostet ${formatEuro(pricing.displays[65].price)} einmalig für die Hardware – ${formatEuro(hardwareDifference)} mehr als die 55-Zoll-Variante. Der monatliche Servicepreis ist bei beiden Größen gleich.` },
  { question: "Welche monatlichen Kosten kommen hinzu?", answer: `Der DokTV Content-Service kostet unabhängig von der Displaygröße ${formatEuro(pricing.service.price)} monatlich. Der Notdienstanzeiger kann für zusätzlich ${formatEuro(pricing.emergencyDisplay.price)} netto monatlich angefragt werden.` },
  { question: "Was umfasst der DokTV Content-Service?", answer: "DokTV gestaltet abgestimmte Werbeinhalte für Ihre Apotheke und betreut deren Ausspielung und Aktualisierung." },
  { question: "Kann der Notdienstanzeiger ergänzt werden?", answer: `Ja. Der digitale Apotheken-Notdienstanzeiger ist eine optionale Ergänzung für ${formatEuro(pricing.emergencyDisplay.price)} netto pro Monat.` },
  { question: "Wer entscheidet über die Inhalte?", answer: "Sie entscheiden, welche Angebote, Aktionen und Informationen Ihre Apotheke zeigt. DokTV setzt die abgestimmten Inhalte um." },
  { question: "Was kostet die Installation?", answer: "Details zur Installation und zu weiteren Leistungen besprechen wir im persönlichen Angebot." },
  { question: "Wie finde ich die passende Displaygröße?", answer: "Entscheidend sind verfügbare Fläche, Platzierung, Blickwinkel, Betrachtungsabstand und die Darstellungsgröße Ihrer Inhalte. Wir besprechen das passend zu Ihrem Standort." },
];

const schemas = [
  {
    "@context": "https://schema.org", "@type": "WebPage", name: pageTitle, description: pageDescription, url: pageUrl,
    isPartOf: { "@type": "WebSite", name: "DokTV", url: canonicalUrl("/") },
    publisher: { "@type": "Organization", name: "DokTV UG (haftungsbeschränkt)", url: canonicalUrl("/") },
  },
  {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: canonicalUrl("/") },
      { "@type": "ListItem", position: 2, name: "Preise", item: pageUrl },
    ],
  },
];

export default function PreisePage() {
  return (
    <main className={styles.page}>
      {schemas.map((schema) => <script key={schema["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}

      <section className={styles.hero} aria-labelledby="preise-title">
        <Image src={pageImage} alt="Visualisierung einer Apotheke mit digitalem Schaufenster-Display" fill priority sizes="100vw" className={styles.heroImage} />
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <Eyebrow>Digital Signage für Apotheken</Eyebrow>
            <h1 id="preise-title">Apotheken-Displays.<br />Größen &amp; Preise.</h1>
            <p className={styles.heroLead}>Einmal Hardware. Monatlich persönlicher Service.</p>
            <p className={styles.heroText}>Vergleichen Sie unsere 55- und 65-Zoll-Displays für Ihre Apotheke. DokTV gestaltet Ihre Werbeinhalte und betreut die Ausspielung – Sie entscheiden, was gezeigt wird.</p>
            <div className={styles.heroActions}><PrimaryButton href="#display-auswahl">Displays vergleichen</PrimaryButton><SecondaryButton href="/kontakt">Persönlich beraten lassen</SecondaryButton></div>
            <ul className={styles.heroFeatures} aria-label="Leistungsmerkmale">
              {["Individuelle Werbeinhalte", "Ausspielung & Betreuung", "Notdienstanzeiger optional", "55 und 65 Zoll"].map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
        </Container>
        <span className={styles.heroCaption}>Visualisierung</span>
      </section>

      <section id="display-auswahl" className={styles.selectionSection} aria-labelledby="display-auswahl-title">
        <Container>
          <h2 id="display-auswahl-title" className="sr-only">55- und 65-Zoll-Displays vergleichen und auswählen</h2>
          <DisplaySelection />
        </Container>
      </section>

      <section className={styles.serviceSection} aria-labelledby="service-title">
        <Container>
          <Eyebrow>Unser Service</Eyebrow>
          <h2 id="service-title">Sie wählen die Inhalte.<br />Wir kümmern uns um die Ausspielung.</h2>
          <p className={styles.servicePrice}>{formatEuro(pricing.service.price)} <span>/ Monat</span></p>
          <p className={styles.serviceIntro}>Sie teilen uns mit, welche Angebote, Aktionen und Informationen Ihre Apotheke zeigen möchte. DokTV gestaltet die Inhalte und betreut deren Ausspielung. Die Auswahl bleibt bei Ihnen.</p>
          <div className={styles.serviceGrid}>
            <article><span className={styles.iconCircle}><Palette size={29} aria-hidden="true" /></span><h3>Individuelle Werbeinhalte</h3><p>Passend zu Ihrer Apotheke, Ihren Angeboten und Ihren Zielgruppen.</p></article>
            <article><span className={styles.iconCircle}><Monitor size={29} aria-hidden="true" /></span><h3>Ausspielung &amp; Aktualisierung</h3><p>Wir planen und betreuen die Ausspielung der abgestimmten Inhalte.</p></article>
            <article><span className={styles.iconCircle}><Headset size={29} aria-hidden="true" /></span><h3>Persönliche Betreuung</h3><p>Wir bleiben Ihr Ansprechpartner rund um die Inhalte.</p></article>
          </div>
          <PrimaryButton href="/apotheken">Mehr über unsere Lösungen erfahren</PrimaryButton>
        </Container>
      </section>

      <section className={styles.contentSection} aria-labelledby="groessen-title">
        <Container>
          <div className={styles.splitHeading}>
            <div><Eyebrow>Größenvergleich</Eyebrow><h2 id="groessen-title">55 oder 65 Zoll: Welche Displaygröße passt zu Ihrer Apotheke?</h2></div>
            <p>Die passende Größe hängt von der verfügbaren Fläche, Platzierung, dem Blickwinkel und der Entfernung zum Betrachter ab. Auch die Darstellungsgröße Ihrer Inhalte spielt eine Rolle.</p>
          </div>
          <div className={styles.tableWrap}>
            <table>
              <caption className="sr-only">Vergleich der Displaygrößen und Kosten</caption>
              <thead><tr><th scope="col">Displaygröße</th><th scope="col">Hardware einmalig</th><th scope="col">DokTV-Service</th><th scope="col">Optionaler Notdienstanzeiger</th></tr></thead>
              <tbody>{([55, 65] as const).map((size) => <tr key={size}><th scope="row">{size} Zoll</th><td>{formatEuro(pricing.displays[size].price)}</td><td>{formatEuro(pricing.service.price)} / Monat</td><td>+{formatEuro(pricing.emergencyDisplay.price)} netto / Monat</td></tr>)}</tbody>
            </table>
          </div>
          <p className={styles.note}>Der optionale Notdienstanzeiger ist nicht vorausgewählt. Hardwarekosten und monatliche Kosten werden getrennt ausgewiesen.</p>
        </Container>
      </section>

      <section className={styles.referencesSection} aria-labelledby="referenzen-title">
        <Container>
          <div className={styles.splitHeading}>
            <div><Eyebrow>Im Einsatz</Eyebrow><h2 id="referenzen-title">So sehen DokTV-Displays im Apothekenalltag aus.</h2></div>
            <p>Diese Aufnahmen zeigen echte Installationen. Die gewählte Displaygröße für ein neues Projekt stimmen wir individuell ab.</p>
          </div>
          <div className={styles.referenceGrid}>
            {doktvReferences.map((reference) => <article key={reference.title} className={styles.referenceCard}>
              <div className={styles.referenceImage}><Image src={reference.images[1]?.src ?? reference.images[0].src} alt={reference.images[1]?.alt ?? reference.images[0].alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div>
              <div className={styles.referenceBody}><h3>{reference.title}</h3><p>{reference.location}</p></div>
            </article>)}
          </div>
          <Link href="/referenzen" className={styles.textLink}>Alle Referenzen ansehen <ArrowRight size={17} aria-hidden="true" /></Link>
        </Container>
      </section>

      <section className={styles.contentSection} aria-labelledby="kosten-title">
        <Container>
          <div className={styles.splitHeading}>
            <div><Eyebrow>Transparent kalkulieren</Eyebrow><h2 id="kosten-title">Welche Kosten entstehen für Digital Signage in einer Apotheke?</h2></div>
            <p>Einmalige Hardware, laufender Content-Service und eine optionale Notdienstanzeige sind verschiedene Kostenpositionen. So bleibt Ihr Angebot nachvollziehbar.</p>
          </div>
          <div className={styles.costGrid}>
            <article><span>01</span><h3>Hardware einmalig</h3><p>{formatEuro(pricing.displays[55].price)} für 55 Zoll oder {formatEuro(pricing.displays[65].price)} für 65 Zoll.</p></article>
            <article><span>02</span><h3>Content-Service monatlich</h3><p>{formatEuro(pricing.service.price)} pro Monat, unabhängig von der gewählten Größe.</p></article>
            <article><span>03</span><h3>Notdienstanzeiger optional</h3><p>Zusätzlich {formatEuro(pricing.emergencyDisplay.price)} netto pro Monat, wenn Sie ihn auswählen.</p></article>
          </div>
          <p className={styles.note}>Details zur Installation und zu weiteren Leistungen besprechen wir im persönlichen Angebot.</p>
          <div className={styles.relatedLinks}><Link href="/apotheken">Digital Signage für Apotheken</Link><Link href="/apotheken-notdienst-anzeiger">Mehr zum Notdienstanzeiger</Link><Link href="/werbung-apotheke-display">Werbung auf Apotheken-Displays</Link></div>
        </Container>
      </section>

      <section className={styles.faqSection} aria-labelledby="faq-title">
        <Container>
          <Eyebrow>Gut zu wissen</Eyebrow><h2 id="faq-title">Häufige Fragen zu Displaygrößen, Preisen und Service</h2>
          <div className={styles.faqGrid}>{faqs.map((faq) => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div>
        </Container>
      </section>

      <section className={styles.finalSection} aria-labelledby="final-title">
        <Container><div className={styles.finalPanel}>
          <div><Eyebrow>Persönlich beraten</Eyebrow><h2 id="final-title">Das passende Display für Ihre Apotheke.</h2><p>Wir besprechen gemeinsam Größe, Platzierung und Inhalte – persönlich und unverbindlich.</p></div>
          <PrimaryButton href="/kontakt">Kostenlose Beratung anfragen</PrimaryButton>
        </div></Container>
      </section>
    </main>
  );
}
