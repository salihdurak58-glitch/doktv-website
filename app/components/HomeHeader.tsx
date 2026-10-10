"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import styles from "../home.module.css";

const solutionLinks = [
  { href: "/schaufenster-display-apotheken", label: "Schaufenster-Displays" },
  { href: "/apotheken-notdienst-anzeiger", label: "Notdienst Anzeiger" },
  { href: "/apotheken", label: "Digital Signage für Apotheken" },
  { href: "/wartezimmer-tv-praxen", label: "Wartezimmer TV" },
];

const navigation = [
  { href: "/referenzen", label: "Referenzen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/preise", label: "Preise" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brand} aria-label="DokTV – zur Startseite">
          <Image src="/logo.png" alt="DokTV" width={1920} height={1080} priority className={styles.brandImage} />
          <span className={styles.brandSubline}>Digitale Sichtbarkeit<br />für Apotheken</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Hauptnavigation">
          <details className={styles.solutionsMenu}>
            <summary>Lösungen <ChevronDown size={14} aria-hidden="true" /></summary>
            <div className={styles.solutionsPopover}>
              {solutionLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            </div>
          </details>
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>

        <div className={styles.headerActions}>
          <a className={styles.phoneLink} href="tel:+491639400001" aria-label="DokTV anrufen: 0163 9400001">
            <Phone size={17} aria-hidden="true" />
            <span>0163 9400001</span>
          </a>
          <Link className={styles.headerCta} href="/kontakt">Kostenlose Beratung <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <button className={styles.menuButton} type="button" aria-label={isOpen ? "Menü schließen" : "Menü öffnen"} aria-expanded={isOpen} aria-controls="home-mobile-navigation" onClick={() => setIsOpen((current) => !current)}>
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id="home-mobile-navigation" className={styles.mobileNav} aria-label="Mobile Hauptnavigation">
          <span className={styles.mobileNavLabel}>Lösungen</span>
          {solutionLinks.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>)}
          <span className={styles.mobileNavLabel}>DokTV</span>
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>)}
          <a href="tel:+491639400001" onClick={() => setIsOpen(false)}>Anrufen: 0163 9400001</a>
          <Link className={styles.mobileCta} href="/kontakt" onClick={() => setIsOpen(false)}>Kostenlose Beratung</Link>
        </nav>
      )}
    </header>
  );
}
