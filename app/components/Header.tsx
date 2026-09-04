"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/schaufenster-display-apotheken", label: "Apotheken" },
  { href: "/wartezimmer-tv-praxen", label: "Praxen" },
  { href: "/hersteller-werbung", label: "Hersteller" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/preise", label: "Preise" },
  { href: "/ueber-uns", label: "Über uns" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="DokTV Logo"
            width={210}
            height={64}
            priority
            className="h-auto w-[142px] lg:w-[154px]"
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-6 whitespace-nowrap text-[15px] font-bold text-slate-700 lg:flex xl:gap-8">
          {navItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "text-teal-700"
                    : "text-slate-700 transition hover:text-teal-700"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/kontakt" className="button-primary shrink-0">
            Kostenlose Beratung
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex min-h-12 items-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 lg:hidden"
          >
            {isMenuOpen ? "Schließen" : "Menü"}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-5 py-5 shadow-xl lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-3 text-base font-semibold text-slate-800">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    isActive
                      ? "rounded-xl bg-teal-50 px-4 py-3 text-teal-800"
                      : "rounded-xl px-4 py-3 hover:bg-slate-100 hover:text-black"
                  }
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-xl bg-teal-700 px-5 py-3.5 text-center font-bold text-white hover:bg-teal-800"
            >
              Kostenlose Beratung
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
