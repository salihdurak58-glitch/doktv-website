"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Info, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { formatEuro, pricing } from "../../lib/pricing";
import styles from "./preise.module.css";

type DisplaySize = 55 | 65;

const descriptions: Record<DisplaySize, string> = {
  55: "Die kleinere der beiden Displaygrößen – für eine auf Ihren Standort abgestimmte Präsentation.",
  65: "Mehr Bildschirmfläche für Ihre Angebote und Informationen.",
};

export default function DisplaySelection() {
  const [size, setSize] = useState<DisplaySize>(55);
  const [notdienst, setNotdienst] = useState(false);
  const difference = pricing.displays[65].price - pricing.displays[55].price;
  const params = new URLSearchParams({ display: pricing.displays[size].query });
  if (notdienst) params.set("notdienst", "1");
  const requestHref = `/kontakt?${params.toString()}#anfrage`;

  return (
    <div className={styles.selectionGrid}>
      {([55, 65] as const).map((displaySize) => {
        const display = pricing.displays[displaySize];
        const active = displaySize === size;
        const directParams = new URLSearchParams({ display: display.query });
        if (notdienst) directParams.set("notdienst", "1");
        return (
          <article key={displaySize} className={`${styles.productCard} ${active ? styles.productCardActive : ""}`}>
            <div className={styles.productTop}>
              {active ? <span className={styles.selectedBadge}><Check size={13} aria-hidden="true" /> Ihre Auswahl</span> : <span className={styles.productTopSpacer} aria-hidden="true" />}
            </div>
            <div className={styles.productMain}>
              <div className={styles.deviceVisual}>
                <div className={`${styles.deviceSize} ${displaySize === 65 ? styles.deviceLarger : ""}`}>
                  <Image src="/preise/apotheken-display-schematische-visualisierung-v2.webp" alt={`Schematische Darstellung eines ${displaySize}-Zoll-Apotheken-Displays`} width={690} height={1470} sizes="(max-width: 700px) 140px, (max-width: 1250px) 180px, 220px" />
                </div>
              </div>
              <div className={styles.productInfo}>
                <h3>{displaySize}-Zoll-Display</h3>
                <p className={styles.productDescription}>{descriptions[displaySize]}</p>
                <p className={styles.productPrice}>{formatEuro(display.price)}</p>
                <p className={styles.productPriceCaption}>einmalig für die Hardware</p>
                <p className={styles.productService}>zzgl. <strong>{formatEuro(pricing.service.price)} DokTV-Service / Monat</strong></p>
                {displaySize === 65 ? <p className={styles.difference}>{formatEuro(difference)} Hardware-Aufpreis gegenüber 55 Zoll.</p> : null}
                <div className={styles.productActions}>
                  <label className={styles.selectControl}>
                    <input type="radio" name="display-size" value={displaySize} checked={active} onChange={() => setSize(displaySize)} />
                    <span>{displaySize} Zoll auswählen</span>
                  </label>
                  <Link href={`/kontakt?${directParams.toString()}#anfrage`} className={styles.directLink}>{displaySize} Zoll anfragen <ArrowRight size={15} aria-hidden="true" /></Link>
                </div>
              </div>
            </div>
            <p className={styles.visualDisclaimer}>Schematische Display-Visualisierung. Das konkrete Modell wird im Angebot abgestimmt.</p>
          </article>
        );
      })}

      <aside className={styles.summaryCard} aria-labelledby="selection-title">
        <div className={styles.summaryHeading}><ShoppingBag size={23} aria-hidden="true" /><h3 id="selection-title">Ihre Auswahl</h3></div>
        <p className={styles.summarySelected}>{size}-Zoll-Display</p>
        <dl className={styles.summaryList}>
          <div><dt>Hardware einmalig</dt><dd>{formatEuro(pricing.displays[size].price)}</dd></div>
          <div><dt>DokTV-Service</dt><dd>{formatEuro(pricing.service.price)} / Monat</dd></div>
        </dl>
        <p className={styles.summarySubtext}>Inhalte, Ausspielung und persönliche Betreuung.</p>
        <label className={styles.notdienstOption}>
          <input type="checkbox" checked={notdienst} onChange={(event) => setNotdienst(event.target.checked)} />
          <span><strong>Notdienstanzeiger optional</strong><br />+{formatEuro(pricing.emergencyDisplay.price)} netto / Monat<small>Zeigt den aktuellen Apotheken-Notdienst an.</small></span>
        </label>
        <p className={styles.summaryInfo}><Info size={19} aria-hidden="true" />Details zur Installation und zu weiteren Leistungen besprechen wir im persönlichen Angebot.</p>
        <p className="sr-only" aria-live="polite" aria-atomic="true">{size} Zoll ausgewählt. Notdienstanzeiger {notdienst ? "hinzugefügt" : "nicht ausgewählt"}.</p>
        <Link href={requestHref} className={styles.summaryButton}>Auswahl unverbindlich anfragen <ArrowRight size={18} aria-hidden="true" /></Link>
      </aside>
    </div>
  );
}
