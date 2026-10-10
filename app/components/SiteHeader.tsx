"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { isSolutionPath, primaryLinks, publicContact, solutionLinks } from "../lib/public-site";
import styles from "./SiteHeader.module.css";

type OpenState = { pathname: string; open: boolean };

export default function SiteHeader() {
  const pathname = usePathname();
  return <SiteHeaderContent key={pathname} pathname={pathname} />;
}

function SiteHeaderContent({ pathname }: { pathname: string }) {
  const [desktopState, setDesktopState] = useState<OpenState>({ pathname, open: false });
  const [mobileState, setMobileState] = useState<OpenState>({ pathname, open: false });
  const desktopOpen = desktopState.open && desktopState.pathname === pathname;
  const mobileOpen = mobileState.open && mobileState.pathname === pathname;
  const solutionsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!desktopOpen && !mobileOpen) return;

    function closeOnOutside(event: PointerEvent) {
      if (desktopOpen && !solutionsRef.current?.contains(event.target as Node)) {
        setDesktopState({ pathname, open: false });
      }
      if (mobileOpen && !headerRef.current?.contains(event.target as Node)) {
        setMobileState({ pathname, open: false });
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (desktopOpen) {
        setDesktopState({ pathname, open: false });
        solutionsButtonRef.current?.focus();
      }
      if (mobileOpen) {
        setMobileState({ pathname, open: false });
        mobileButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [desktopOpen, mobileOpen, pathname]);

  function closeMenus() {
    setDesktopState({ pathname, open: false });
    setMobileState({ pathname, open: false });
  }

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="DokTV – zur Startseite" onClick={closeMenus}>
          <Image src="/logo.png" alt="DokTV" width={1920} height={1080} priority className={styles.brandImage} />
          <span className={styles.brandSubline}>Digitale Sichtbarkeit<br />für Apotheken</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Hauptnavigation">
          <div className={styles.solutionsMenu} ref={solutionsRef}>
            <button
              ref={solutionsButtonRef}
              type="button"
              className={`${styles.navLink} ${isSolutionPath(pathname) ? styles.active : ""}`}
              aria-expanded={desktopOpen}
              aria-controls="site-solutions-list"
              onClick={() => setDesktopState({ pathname, open: !desktopOpen })}
            >
              Lösungen <ChevronDown size={15} aria-hidden="true" className={desktopOpen ? styles.rotated : ""} />
            </button>
            {desktopOpen && (
              <div id="site-solutions-list" className={styles.popover}>
                {solutionLinks.map((item) => (
                  <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={closeMenus}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {primaryLinks.map((item) => (
            <Link key={item.href} href={item.href} className={`${styles.navLink} ${pathname === item.href ? styles.active : ""}`} aria-current={pathname === item.href ? "page" : undefined} onClick={closeMenus}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.phone} href={publicContact.phoneHref} aria-label={`DokTV anrufen: ${publicContact.phoneLabel}`}>
            <Phone size={17} aria-hidden="true" /> <span>{publicContact.phoneLabel}</span>
          </a>
          <Link className={styles.cta} href="/kontakt" onClick={closeMenus}>Kostenlose Beratung <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <button ref={mobileButtonRef} type="button" className={styles.menuButton} aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"} aria-expanded={mobileOpen} aria-controls="site-mobile-navigation" onClick={() => setMobileState({ pathname, open: !mobileOpen })}>
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav id="site-mobile-navigation" className={styles.mobileNav} aria-label="Mobile Hauptnavigation">
          <div className={styles.mobileInner}>
            <span className={styles.mobileLabel}>Lösungen</span>
            <div className={styles.mobileSolutions}>
              {solutionLinks.map((item) => (
                <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={closeMenus}>{item.label}</Link>
              ))}
            </div>
            <span className={styles.mobileLabel}>DokTV</span>
            {primaryLinks.map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={closeMenus}>{item.label}</Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
