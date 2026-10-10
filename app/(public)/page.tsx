import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BadgeCheck, CalendarDays, CircleCheck, Headset,
  Megaphone, Monitor, Moon, Palette, Settings2, Store,
} from "lucide-react";
import { getSiteContent } from "../lib/content/get-site-content";
import { generatePageMetadata } from "../lib/seo/get-page-seo";
import { doktvReferences } from "../lib/references";
import { formatEuro, pricing } from "../lib/pricing";
import styles from "../home.module.css";

const metaTitle = "Digital Signage für Apotheken | Displays & Inhalte – DokTV";
const metaDescription = "DokTV macht Ihre Apotheke digital sichtbar: Displays für Schaufenster, Wartezimmer und Notdienst, individuelle Inhalte und persönliche Betreuung. Jetzt beraten lassen.";
const previousMetaTitle = "DokTV – Digital Signage für Apotheken, Praxen & Schaufenster";
const previousMetaDescription = "DokTV macht Ihr Schaufenster digital: moderne Displays, professionelle Inhalte und einfache Verwaltung für Apotheken, Praxen und lokale Unternehmen.";
const previousOgDescription = "Moderne Schaufenster-Displays und Digital Signage Lösungen für lokale Unternehmen.";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await generatePageMetadata("/");
  // Replace only the previous homepage copy; future SEO edits in the admin area keep working.
  const title = metadata.title === previousMetaTitle ? metaTitle : metadata.title || metaTitle;
  const description = metadata.description === previousMetaDescription ? metaDescription : metadata.description || metaDescription;
  return {
    ...metadata,
    title,
    description,
    // Next.js 16 normalizes a root canonical URL to the bare origin. The
    // exact trailing-slash homepage canonical is rendered below instead.
    alternates: { ...metadata.alternates, canonical: null },
    openGraph: {
      ...metadata.openGraph,
      title: metadata.openGraph?.title === previousMetaTitle ? metaTitle : metadata.openGraph?.title || title,
      description: metadata.openGraph?.description === previousMetaDescription || metadata.openGraph?.description === previousOgDescription ? metaDescription : metadata.openGraph?.description || description,
    },
    twitter: {
      ...metadata.twitter,
      title: metadata.twitter?.title === previousMetaTitle ? metaTitle : metadata.twitter?.title || title,
      description: metadata.twitter?.description === previousMetaDescription ? metaDescription : metadata.twitter?.description || description,
    },
  };
}

const solutions = [
  {
    icon: Store, title: "Schaufenster-Displays",
    text: "Angebote und Gesundheitsthemen fallen schon vor dem Betreten Ihrer Apotheke ins Auge.",
    href: "/schaufenster-display-apotheken",
  },
  {
    icon: Monitor, title: "Wartezimmer-TV",
    text: "Nutzen Sie Wartezeiten für verständliche Informationen und wechselnde Inhalte.",
    href: "/wartezimmer-tv-praxen",
  },
  {
    icon: Moon, title: "Notdienstanzeiger",
    text: "Informieren Sie zuverlässig über Notdienste und wichtige Hinweise – auch außerhalb der Öffnungszeiten.",
    href: "/apotheken-notdienst-anzeiger",
  },
  {
    icon: Palette, title: "Individuelle Inhalte",
    text: "Wir gestalten digitale Werbung, die zu Ihrer Apotheke, Ihren Angeboten und Ihrer Saison passt.",
    href: "/werbung-apotheke-display",
  },
];

const reference = doktvReferences[1];

export default async function HomePage() {
  const content = await getSiteContent([
    "homepage_hero_eyebrow", "homepage_hero_title",
    "homepage_hero_subtitle", "homepage_primary_cta",
  ]);
  const storedTitle = content.homepage_hero_title?.trim();
  const hasCurrentTitle = storedTitle && !/Ihr Schaufenster kann mehr|Mehr Sichtbarkeit/i.test(storedTitle);
  const heroTitle = hasCurrentTitle ? storedTitle : "Digitale Sichtbarkeit für Apotheken.";
  const heroSubtitle = hasCurrentTitle && content.homepage_hero_subtitle
    ? content.homepage_hero_subtitle
    : "Moderne Displays für Schaufenster, Wartezimmer und Notdienstanzeige. DokTV gestaltet Ihre Werbeinhalte und betreut die Ausspielung – Sie entscheiden, was Ihre Apotheke zeigt.";
  const heroEyebrow = content.homepage_hero_eyebrow && !/Apotheken & Praxen/i.test(content.homepage_hero_eyebrow)
    ? content.homepage_hero_eyebrow : "Moderne Digital-Signage-Lösungen";

  return (
    <main className={styles.page}>
      <link rel="canonical" href="https://doktv.de/" />

      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroImage}>
          <Image
            src="/home/apotheke-hero-visualisierung.jpg"
            alt="Visualisierung eines digitalen Schaufenster-Displays an einer modernen Apotheke"
            fill priority sizes="100vw" className={styles.heroPhoto}
          />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span aria-hidden="true" />{heroEyebrow}</p>
            <h1 id="home-title">{heroTitle === "Digitale Sichtbarkeit für Apotheken." ? <>Digitale Sichtbarkeit <span>für Apotheken.</span></> : heroTitle}</h1>
            <p className={styles.heroLead}>{heroSubtitle}</p>
            <div className={styles.heroButtons}>
              <Link className={styles.primaryButton} href="/kontakt">
                {content.homepage_primary_cta && content.homepage_primary_cta !== "Kostenlose Beratung"
                  ? content.homepage_primary_cta : "Kostenlose Beratung vereinbaren"}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className={styles.secondaryButton} href="#loesungen">Lösungen ansehen <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
            <ul className={styles.heroUsps}>
              <li><Settings2 size={20} aria-hidden="true" /><span>Einrichtung &<br />Betreuung</span></li>
              <li><Palette size={20} aria-hidden="true" /><span>Individuelle<br />Werbeinhalte</span></li>
              <li><Moon size={20} aria-hidden="true" /><span>Notdienstanzeiger<br />optional</span></li>
              <li><Monitor size={20} aria-hidden="true" /><span>55 & 65 Zoll<br />Displays</span></li>
            </ul>
          </div>
          <div className={styles.heroPanel} aria-label="Einsatzbereiche">
            <p>Ihre Apotheke. Digital sichtbar.</p>
            <span><Store size={18} aria-hidden="true" /> Im Schaufenster</span>
            <span><Monitor size={18} aria-hidden="true" /> Im Wartebereich</span>
            <span><Moon size={18} aria-hidden="true" /> Im Notdienst</span>
          </div>
          <p className={styles.visualNote}>Visualisierung</p>
        </div>
      </section>

      <section className={styles.trustBar} aria-label="DokTV auf einen Blick">
        <div className={styles.container}>
          <div className={styles.trustIntro}>
            <strong>Echte Installationen in Berliner Apotheken</strong>
            <span>Technik, Inhalte und Betreuung aus einer Hand.</span>
          </div>
          <ul>
            <li><CircleCheck size={18} aria-hidden="true" /> Persönlich</li>
            <li><CircleCheck size={18} aria-hidden="true" /> Flexibel aktualisierbar</li>
            <li><CircleCheck size={18} aria-hidden="true" /> Vor Ort sichtbar</li>
          </ul>
        </div>
      </section>

      <section id="loesungen" className={styles.solutionsSection} aria-labelledby="solutions-title">
        <div className={styles.container}>
          <div className={styles.sectionTopline}>
            <div><p className={styles.sectionLabel}>Unsere Lösungen</p><h2 id="solutions-title">Eine Lösung. Viele Möglichkeiten.</h2></div>
            <p>Mit digitalen Displays machen Sie Ihre Apotheke zum Blickfang – im Schaufenster, im Wartebereich und beim Notdienst.</p>
          </div>
          <div className={styles.solutionGrid}>
            {solutions.map(({ icon: Icon, title, text, href }) => (
              <Link className={styles.solutionCard} href={href} key={title}>
                <span className={styles.solutionIcon}><Icon size={27} strokeWidth={2} aria-hidden="true" /></span>
                <span className={styles.solutionContent}><strong>{title}</strong><span>{text}</span></span>
                <span className={styles.cardArrow}><ArrowRight size={18} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
          <Link className={styles.textLink} href="/apotheken">Alle Lösungen für Apotheken ansehen <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className={styles.referenceSection} aria-labelledby="reference-title">
        <div className={styles.container}>
          <div className={styles.referenceHeading}>
            <p className={styles.sectionLabel}>Aus der Praxis</p>
            <h2 id="reference-title">Echte Apotheken. Echte Installationen.</h2>
            <p>Sehen Sie, wie digitale Schaufensterwerbung in einer Apotheke tatsächlich eingesetzt wird.</p>
          </div>
          <div className={styles.referenceCard}>
            <div className={styles.referenceImage}>
              <Image src={reference.images[1].src} alt={reference.images[1].alt} fill sizes="(max-width: 800px) 100vw, 38vw" className={styles.coverImage} />
            </div>
            <div className={styles.referenceCopy}>
              <span className={styles.referenceLocation}>{reference.location}</span>
              <h3>{reference.title}</h3>
              <p>{reference.description}</p>
              <Link className={styles.textLink} href="/referenzen">Referenz ansehen <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
            <div className={styles.referenceFacts} aria-label="Fakten zur Installation">
              <span><strong>2</strong> Schaufenster-Displays</span>
              <span><strong>Tag & Nacht</strong> sichtbar</span>
              <span><strong>Berlin</strong> Kurfürstendamm</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pricingSection} aria-labelledby="pricing-title">
        <div className={styles.container}>
          <div className={styles.pricingHeading}>
            <div><p className={styles.sectionLabel}>Transparente Preise</p><h2 id="pricing-title">Ein Display. Ein Service. Klare Kosten.</h2></div>
            <p>Wählen Sie die passende Displaygröße. Der DokTV Content-Service kommt monatlich hinzu; den Notdienstanzeiger können Sie optional ergänzen.</p>
          </div>
          <div className={styles.pricingGrid}>
            <article><span>Hardware · einmalig</span><h3>55-Zoll-Display</h3><p className={styles.priceValue}>{formatEuro(pricing.displays[55].price)}</p></article>
            <article><span>Hardware · einmalig</span><h3>65-Zoll-Display</h3><p className={styles.priceValue}>{formatEuro(pricing.displays[65].price)}</p></article>
            <article><span>Monatlich</span><h3>DokTV Content-Service</h3><p className={styles.priceValue}>{formatEuro(pricing.service.price)} <small>/ Monat</small></p></article>
          </div>
          <p className={styles.pricingNote}>Optional: Apotheken-Notdienstanzeiger für zusätzlich {formatEuro(pricing.emergencyDisplay.price)} netto pro Monat, zzgl. gesetzlicher MwSt. <Link href="/preise">Alle Preise im Detail ansehen <ArrowRight size={16} aria-hidden="true" /></Link></p>
        </div>
      </section>

      <section id="ablauf" className={styles.processSection} aria-labelledby="process-title">
        <div className={styles.container}>
          <div className={styles.processIntro}>
            <p className={styles.sectionLabel}>So funktioniert DokTV</p>
            <h2 id="process-title">Von der Idee zum sichtbaren Auftritt.</h2>
            <p>Wir besprechen Ihren Standort, richten die passende Lösung ein und kümmern uns anschließend um Ihre Inhalte.</p>
          </div>
          <div className={styles.processGrid}>
            <article><span><Megaphone size={23} aria-hidden="true" /></span><small>01</small><h3>Bedarf besprechen</h3><p>Gemeinsam klären wir, welche Flächen und Botschaften für Ihre Apotheke sinnvoll sind.</p></article>
            <article><span><Monitor size={23} aria-hidden="true" /></span><small>02</small><h3>Display einrichten</h3><p>DokTV stimmt Hardware und Installation mit Ihnen auf den Standort ab.</p></article>
            <article><span><Headset size={23} aria-hidden="true" /></span><small>03</small><h3>Inhalte betreuen</h3><p>Sie entscheiden über Ihre Werbung. Wir gestalten, spielen aus und aktualisieren die Inhalte.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="cta-title">
        <div className={styles.container}>
          <div><p className={styles.sectionLabel}>Gemeinsam mehr erreichen</p><h2 id="cta-title">Bereit für mehr Sichtbarkeit?</h2><p>Wir zeigen Ihnen unverbindlich, welche Digital-Signage-Lösung zu Ihrer Apotheke passt.</p></div>
          <Link className={styles.primaryButton} href="/kontakt">Kostenlose Beratung vereinbaren <ArrowRight size={18} aria-hidden="true" /></Link>
          <ul>
            <li><CalendarDays size={20} aria-hidden="true" /> Unverbindlich</li>
            <li><Headset size={20} aria-hidden="true" /> Persönlich</li>
            <li><BadgeCheck size={20} aria-hidden="true" /> Passend zu Ihrem Standort</li>
          </ul>
        </div>
      </section>

    </main>
  );
}
