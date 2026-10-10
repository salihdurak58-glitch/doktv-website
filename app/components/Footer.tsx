import Image from "next/image";
import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";
import { furtherLinks, knowledgeLinks, primaryLinks, publicContact, solutionLinks } from "../lib/public-site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandColumn}>
          <Link href="/" className={styles.brand} aria-label="DokTV – zur Startseite">
            <Image src="/logo.png" alt="DokTV" width={1920} height={1080} className={styles.brandImage} />
            <span>Digitale Sichtbarkeit<br />für Apotheken</span>
          </Link>
          <p>Professionelle Displays, individuelle Werbeinhalte und persönliche Betreuung für Apotheken und Praxen.</p>
          <div className={styles.contact}>
            <a href={publicContact.phoneHref}>{publicContact.phoneLabel}</a>
            <a href={`mailto:${publicContact.email}`}>{publicContact.email}</a>
            <span>Berlin, Deutschland</span>
          </div>
        </div>
        <div>
          <h2>Lösungen</h2>
          <div className={styles.links}>{solutionLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        </div>
        <div>
          <h2>DokTV entdecken</h2>
          <div className={styles.links}>
            {primaryLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            {furtherLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
          <h2 className={styles.knowledgeTitle}>Leistungen & Wissen</h2>
          <div className={styles.links}>{knowledgeLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>© {new Date().getFullYear()} {publicContact.company}</p>
          <div>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
