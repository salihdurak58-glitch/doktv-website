import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, Headset, Monitor, Moon, Palette, Settings2, Store } from "lucide-react";
import { Container } from "../../components/PublicUI";
import { doktvReferences } from "../../lib/references";
import { formatEuro, pricing } from "../../lib/pricing";
import styles from "./page.module.css";

const pageUrl = "https://doktv.de/apotheken";
const title = "Digital Signage für Apotheken | Schaufenster-Displays & Werbung – DokTV";
const description = "DokTV bietet Digital Signage für Apotheken: moderne Schaufenster-Displays, digitale Werbung, individuelle Inhalte und laufende Betreuung. Jetzt beraten lassen.";

export const metadata: Metadata = {
  title, description, alternates: { canonical: pageUrl },
  openGraph: { title, description, url: pageUrl, siteName: "DokTV", locale: "de_DE", type: "website", images: [{ url: "/referenzen/sky-apotheke-wedding-2.jpg", width: 1600, height: 1200, alt: "Echte DokTV-Installation in der Sky Apotheke Wedding" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/referenzen/sky-apotheke-wedding-2.jpg"] },
};

const areas = [
  { id: "schaufenster", icon: Store, title: "Schaufenster-Displays", text: "Angebote und Gesundheitsthemen werden schon vor dem Betreten Ihrer Apotheke sichtbar. Die Inhalte können passend zu Saison und Standort wechseln.", href: "/referenzen", label: "Echte Schaufenster ansehen" },
  { id: "wartebereich", icon: Monitor, title: "Verkaufsraum & Wartebereich", text: "Im Innenbereich können Displays Services, saisonale Themen und ausgewählte Produkte verständlich präsentieren – dort, wo Kundinnen und Kunden Zeit haben hinzusehen.", href: "/wartezimmer-tv-praxen", label: "Mehr zum Wartezimmer-TV" },
  { id: "notdienst", icon: Moon, title: "Notdienstanzeiger", text: "Als optionale Ergänzung zeigt der digitale Notdienstanzeiger Informationen zum Apotheken-Notdienst – auch außerhalb der regulären Öffnungszeiten.", href: "/apotheken-notdienst-anzeiger", label: "Notdienstanzeiger entdecken" },
  { id: "inhalte", icon: Palette, title: "Individuelle Werbeinhalte", text: "Ihre Apotheke entscheidet über Angebote und Botschaften. DokTV gestaltet passende digitale Inhalte und übernimmt Ausspielung und Aktualisierung.", href: "/werbung-apotheke-display", label: "Inhalte im Detail" },
] as const;

const process = [
  { title: "Bedarf klären", text: "Wir sprechen über Standort, Flächen und Botschaften, die Sie zeigen möchten." },
  { title: "Display auswählen", text: "Gemeinsam wählen wir Größe und stimmen Position, Blickwinkel und Einrichtung ab." },
  { title: "Inhalte gestalten", text: "DokTV bereitet Ihre Angebote und Informationen für die digitale Darstellung auf." },
  { title: "Laufend betreuen", text: "Wir spielen freigegebene Inhalte aus und aktualisieren sie nach Ihren Vorgaben." },
] as const;

const faqs = [
  { q: "Was ist Digital Signage für Apotheken?", a: "Digital Signage bezeichnet die digitale Darstellung von Informationen und Werbung auf Displays. In einer Apotheke können Bildschirme im Schaufenster oder Innenbereich Angebote, Services und Gesundheitsthemen zeigen. DokTV verbindet die Displaytechnik mit Gestaltung und laufender Betreuung." },
  { q: "Was kostet ein Schaufenster-Display für eine Apotheke?", a: `Das 55-Zoll-Display kostet ${formatEuro(pricing.displays[55].price)} einmalig, das 65-Zoll-Display ${formatEuro(pricing.displays[65].price)} einmalig. Der DokTV-Service kostet unabhängig von der Displaygröße ${formatEuro(pricing.service.price)} monatlich. Details zur Installation besprechen wir im persönlichen Angebot.` },
  { q: "Welche Inhalte können auf dem Display gezeigt werden?", a: "Möglich sind zum Beispiel Angebote, OTC-Produkte, Kosmetik, saisonale Aktionen, Gesundheitsinformationen, Apothekenleistungen und Öffnungszeiten. Ihre Apotheke legt fest, welche Inhalte ausgespielt werden." },
  { q: "Ist ein Notdienstanzeiger möglich?", a: `Ja. Der Apotheken-Notdienstanzeiger kann optional für zusätzlich ${formatEuro(pricing.emergencyDisplay.price)} netto monatlich ergänzt werden.` },
  { q: "Gibt es 55- und 65-Zoll-Displays?", a: "Ja. Welche Größe und Platzierung für Ihr Schaufenster oder Ihren Innenbereich sinnvoll ist, klären wir anhand Ihres Standorts." },
  { q: "Übernimmt DokTV auch die Inhalte?", a: "Ja. DokTV gestaltet digitale Werbeinhalte und betreut deren Ausspielung. Sie entscheiden, welche Angebote und Informationen Ihre Apotheke kommuniziert." },
  { q: "Ist DokTV nur in Berlin verfügbar?", a: "Nein. Die gezeigten Installationen befinden sich in Berlin; die DokTV-Lösung ist nicht auf Berlin beschränkt. Ob und wie die Umsetzung an Ihrem Standort möglich ist, besprechen wir persönlich." },
] as const;

const schemas = [
  { "@context": "https://schema.org", "@type": "Service", name: "Digital Signage für Apotheken", serviceType: "Digitale Display-Lösungen für Apotheken", description, url: pageUrl, provider: { "@type": "Organization", name: "DokTV UG (haftungsbeschränkt)", url: "https://doktv.de/" }, areaServed: { "@type": "Country", name: "Deutschland" } },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Startseite", item: "https://doktv.de/" }, { "@type": "ListItem", position: 2, name: "Digital Signage für Apotheken", item: pageUrl }] },
];

export default function ApothekenPage() {
  return <main className={styles.page}>
    {schemas.map((schema) => <script key={schema["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}

    <section className={styles.hero} aria-labelledby="apotheken-title"><Container className={styles.heroGrid}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}><span />Digitale Sichtbarkeit für Ihre Apotheke</p>
        <h1 id="apotheken-title">Digital Signage für Apotheken.<span>Schaufenster-Displays, Inhalte & Betreuung aus einer Hand.</span></h1>
        <p className={styles.heroLead}>Machen Sie Ihr Schaufenster, Ihren Verkaufsraum und Ihre Notdienstkommunikation digital sichtbar. DokTV verbindet passende Displays mit individuellen Werbeinhalten und persönlicher Betreuung.</p>
        <div className={styles.heroActions}><Link href="/kontakt" className={styles.primaryButton}>Kostenlose Beratung <ArrowRight size={18} aria-hidden="true" /></Link><Link href="#referenzen" className={styles.secondaryButton}>Echte Installationen <ArrowRight size={18} aria-hidden="true" /></Link></div>
        <ul className={styles.heroPoints}><li><Check size={17} />Display & Einrichtung</li><li><Check size={17} />Individuelle Inhalte</li><li><Check size={17} />Laufende Betreuung</li></ul>
      </div>
      <div className={styles.heroVisual}><div className={styles.heroPhoto}><Image src="/referenzen/sky-apotheke-wedding-1.jpg" alt="Digitale Schaufenster-Displays an der Sky Apotheke Wedding in Berlin" fill priority sizes="(max-width: 900px) 100vw, 48vw" className={styles.coverImage} /></div><div className={styles.photoBadge}><span />Echte DokTV-Installation<small>Sky Apotheke Wedding · Berlin</small></div><p>Schaufensterwerbung, die tatsächlich im Einsatz ist.</p></div>
    </Container></section>

    <section className={styles.proofStrip} aria-label="DokTV in der Praxis"><Container className={styles.proofInner}><p><BadgeCheck size={22} /><strong>Echte Apotheken. Echte Installationen.</strong></p><span>Berlin-Wedding</span><span>Berlin-Kurfürstendamm</span><span>Berlin-Kreuzberg</span><Link href="/referenzen">Alle Referenzen <ArrowRight size={16} /></Link></Container></section>

    <section className={styles.introSection} id="digital-signage"><Container className={styles.introGrid}><div><p className={styles.sectionLabel}>Mehr als ein Bildschirm</p><h2>Was bedeutet Digital Signage für Ihre Apotheke?</h2></div><div><p>Digital Signage macht aus einer festen Werbefläche einen flexibel nutzbaren Kommunikationskanal. Statt Plakate für jede Aktion neu zu drucken, können Sie Angebote, Services und Gesundheitsthemen auf einem Apotheken-Display darstellen und bei Bedarf ändern.</p><p>Das Display kann im Schaufenster Aufmerksamkeit schaffen oder im Verkaufsraum Orientierung geben. Entscheidend ist nicht nur die Hardware: Inhalte müssen lesbar sein, zur Apotheke passen und aktuell bleiben. Diese Verbindung aus Technik, Gestaltung und laufender Ausspielung übernimmt DokTV.</p></div></Container></section>

    <section className={styles.windowSection} aria-labelledby="window-title"><Container className={styles.windowGrid}><div className={styles.windowImage}><Image src="/referenzen/sky-apotheke-kudamm-2.jpg" alt="Zwei beleuchtete Digital-Signage-Displays im Schaufenster der Sky Apotheke am Kurfürstendamm bei Nacht" fill sizes="(max-width: 900px) 100vw, 48vw" className={styles.coverImage} /><span>Echte Installation · Sky Apotheke Kudamm</span></div><div className={styles.windowCopy}><p className={styles.sectionLabel}>Ihr Schaufenster arbeitet mit</p><h2 id="window-title">Von der Straße aus sichtbar. Im Alltag flexibel.</h2><p>Ein Schaufenster-Display für Apotheken zeigt Ihre Botschaften dort, wo Passantinnen und Passanten Ihre Apotheke zuerst wahrnehmen. Wechselnde Inhalte können auf Angebote, Gesundheitsaktionen oder Leistungen aufmerksam machen – ohne dass für jede Änderung ein neues Plakat nötig ist.</p><div className={styles.benefitList}><div><Store size={22} /><span><strong>Präsenz am Standort</strong>Ihre Themen erhalten eine sichtbare Fläche im Straßenbild.</span></div><div><Settings2 size={22} /><span><strong>Aktuelle Kommunikation</strong>Aktionen und saisonale Themen können zeitnah ausgetauscht werden.</span></div><div><Palette size={22} /><span><strong>Passend zur Apotheke</strong>Inhalte, Displaygröße und Platzierung werden abgestimmt.</span></div></div><Link className={styles.textLink} href="#preise">Displaygrößen und Preise ansehen <ArrowRight size={17} /></Link></div></Container></section>

    <section className={styles.areasSection} id="einsatzbereiche" aria-labelledby="areas-title"><Container><div className={styles.sectionHeading}><p className={styles.sectionLabel}>Eine Lösung. Viele Einsatzbereiche.</p><h2 id="areas-title">Vom ersten Blick bis zur laufenden Kundeninformation.</h2><p>Digital Signage in der Apotheke ist keine zweite, getrennte Schaufenster-Leistung. Es ist ein abgestimmtes System aus Display, Inhalten und Betreuung – für die Flächen, die für Sie relevant sind.</p></div><div className={styles.areaGrid}>{areas.map(({ id, icon: Icon, title: areaTitle, text, href, label }, index) => <article className={styles.areaCard} id={id} key={id}><div className={styles.cardTop}><span><Icon size={26} /></span><small>0{index + 1} / 04</small></div><h3>{areaTitle}</h3><p>{text}</p><Link href={href}>{label} <ArrowRight size={16} /></Link></article>)}</div></Container></section>

    <section className={styles.gallerySection} id="referenzen" aria-labelledby="gallery-title"><Container><div className={styles.galleryHeader}><div><p className={styles.sectionLabel}>Aus der Praxis</p><h2 id="gallery-title">So sieht DokTV im echten Apothekenalltag aus.</h2></div><p>Die Fotos zeigen reale Installationen von DokTV. Keine Renderings, Stockbilder oder erfundenen Ergebnisse.</p></div><div className={styles.galleryGrid}>{[doktvReferences[1].images[1], doktvReferences[2].images[1], doktvReferences[0].images[0]].map((photo, index) => <figure className={`${styles.galleryCard} ${index === 0 ? styles.galleryLarge : ""}`} key={photo.src}><div><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 60vw" className={styles.coverImage} /></div><figcaption><span>{doktvReferences[[1, 2, 0][index]].location}</span><strong>{doktvReferences[[1, 2, 0][index]].title}</strong><small>Echte DokTV-Installation</small></figcaption></figure>)}</div><Link className={styles.galleryLink} href="/referenzen">Alle Installationen ansehen <ArrowRight size={18} /></Link></Container></section>

    <section className={styles.processSection} id="ablauf" aria-labelledby="process-title"><Container><div className={styles.sectionHeading}><p className={styles.sectionLabel}>Klarer Ablauf</p><h2 id="process-title">So wird aus einer Fläche ein digitaler Auftritt.</h2><p>Von der Standortfrage bis zum Wechsel Ihrer Inhalte haben Sie einen persönlichen Ansprechpartner.</p></div><div className={styles.processGrid}>{process.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></Container></section>

    <section className={styles.contentSection} aria-labelledby="content-title"><Container className={styles.contentGrid}><div><p className={styles.sectionLabel}>Ihre Botschaft im Mittelpunkt</p><h2 id="content-title">Welche Inhalte können auf einem Apotheken-Display laufen?</h2><p>Gute Bildschirmwerbung für Apotheken ist konkret, gut lesbar und relevant für den Moment. Sie bestimmen die Themen; DokTV setzt sie für das Display um.</p><Link className={styles.textLink} href="/werbung-apotheke-display">Mehr zur Inhaltserstellung <ArrowRight size={17} /></Link></div><div className={styles.contentCards}>{[
      { label: "Aktuell verkaufen", items: ["Angebote & Aktionen", "OTC-Produkte", "Kosmetik & Pflege", "Saisonale Sortimente"] },
      { label: "Kompetenz zeigen", items: ["Gesundheitsthemen", "Beratungsangebote", "Apothekenleistungen", "Herstellerkampagnen"] },
      { label: "Orientierung geben", items: ["Öffnungszeiten", "Service-Hinweise", "Notdienstinformationen", "Standortbezogene Botschaften"] },
    ].map((group, index) => <article key={group.label}><span>0{index + 1}</span><h3>{group.label}</h3><ul>{group.items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></article>)}</div></Container></section>

    <section className={styles.whySection} aria-labelledby="why-title"><Container className={styles.whyGrid}><div><p className={styles.sectionLabel}>Warum DokTV?</p><h2 id="why-title">Technik, die Sie nicht allein lässt.</h2><p>Ein Display ist erst dann sinnvoll, wenn Inhalte, Ausspielung und Betreuung im Alltag zusammenpassen. DokTV verbindet diese Aufgaben in einer Lösung für Apotheken.</p></div><div className={styles.whyList}>{[
      { icon: Monitor, title: "Passende Hardware", text: "55 oder 65 Zoll – wir besprechen Größe und Position für Ihre Fläche." },
      { icon: Palette, title: "Individuelle Gestaltung", text: "Ihre Angebote und Leistungen werden für die digitale Darstellung aufbereitet." },
      { icon: Headset, title: "Persönliche Betreuung", text: "Ein Ansprechpartner begleitet Einrichtung und laufende Aktualisierungen." },
    ].map(({ icon: Icon, title: itemTitle, text }) => <article key={itemTitle}><Icon size={24} /><div><h3>{itemTitle}</h3><p>{text}</p></div></article>)}</div></Container></section>

    <section className={styles.pricingSection} id="preise" aria-labelledby="pricing-title"><Container><div className={styles.pricingHeading}><div><p className={styles.sectionLabel}>Transparent kalkuliert</p><h2 id="pricing-title">Die passende Displaygröße. Ein klarer Service.</h2></div><p>Die Hardware fällt einmalig an. Der monatliche DokTV-Service ist bei beiden Displaygrößen gleich.</p></div><div className={styles.pricingGrid}>{([55, 65] as const).map((size) => <article className={styles.priceCard} key={size}><span>Display · einmalig</span><h3>{size} Zoll</h3><p className={styles.priceValue}>{formatEuro(pricing.displays[size].price)}</p><p>{pricing.displays[size].description}</p><Link href={`/kontakt?display=${size}#anfrage`}>{size} Zoll anfragen <ArrowRight size={16} /></Link></article>)}<article className={`${styles.priceCard} ${styles.serviceCard}`}><span>Service · monatlich</span><h3>DokTV-Service</h3><p className={styles.priceValue}>{formatEuro(pricing.service.price)} <small>/ Monat</small></p><p>Werbeinhalte, Ausspielung und laufende Betreuung – unabhängig von der Displaygröße.</p><Link href="/preise">Alle Preisdetails <ArrowRight size={16} /></Link></article></div><div className={styles.optionalPrice}><Moon size={22} /><p><strong>Optional: Notdienstanzeiger +{formatEuro(pricing.emergencyDisplay.price)} netto monatlich.</strong> Die Zusatzfunktion ist unabhängig von der Displaygröße buchbar. <Link href="/apotheken-notdienst-anzeiger">Mehr erfahren <ArrowRight size={15} /></Link></p></div></Container></section>

    <section className={styles.faqSection} id="faq" aria-labelledby="faq-title"><Container className={styles.faqGrid}><div><p className={styles.sectionLabel}>Gut zu wissen</p><h2 id="faq-title">Häufige Fragen zu Digital Signage für Apotheken.</h2><p>Sie möchten wissen, ob ein Display zu Ihrer Apotheke passt? Wir beraten Sie gern persönlich.</p><Link className={styles.textLink} href="/kontakt">Frage direkt stellen <ArrowRight size={17} /></Link></div><div className={styles.faqList}>{faqs.map(({ q, a }) => <details key={q}><summary><span>{q}</span><b aria-hidden="true">+</b></summary><p>{a}</p></details>)}</div></Container></section>

    <section className={styles.finalSection} aria-labelledby="final-title"><Container><div className={styles.finalCard}><div><p className={styles.finalEyebrow}>Bereit für mehr Sichtbarkeit?</p><h2 id="final-title">Zeigen wir, was Ihre Apotheke besonders macht.</h2><p>Wir sprechen unverbindlich über Ihren Standort, Ihre Ziele und die passende Digital-Signage-Lösung. Persönlich und ohne vorgefertigtes Paket.</p><div className={styles.finalPoints}><span>Unverbindlich</span><span>Persönlich</span><span>Standortbezogen</span></div></div><Link href="/kontakt" className={styles.finalButton}>Kostenlose Beratung vereinbaren <ArrowRight size={19} /></Link></div></Container></section>
  </main>;
}
