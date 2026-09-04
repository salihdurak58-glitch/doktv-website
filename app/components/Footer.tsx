import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f4f8f7] text-slate-700">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="text-2xl font-black tracking-tight text-slate-950">DokTV</p>
          <p className="mt-4 max-w-md leading-7 text-slate-600">
            Professionelle Displays, individuelle Werbeinhalte und persönliche
            Betreuung für Apotheken und Praxen.
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.15em] text-teal-700">
            Berlin · Digital Signage im Gesundheitsbereich
          </p>
        </div>

        <div>
          <h3 className="font-black text-slate-950">DokTV entdecken</h3>
          <div className="mt-4 grid gap-2.5 text-slate-600">
            <Link href="/">Startseite</Link>
            <Link href="/apotheken">Apotheken</Link>
            <Link href="/arztpraxen">Arztpraxen</Link>
            <Link href="/hersteller">Hersteller</Link>
            <Link href="/standorte">Standorte</Link>
            <Link href="/referenzen">Referenzen</Link>
            <Link href="/preise">Preise</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>

        <div>
          <h3 className="font-black text-slate-950">Leistungen & Wissen</h3>
          <div className="mt-4 grid gap-2.5 text-slate-600">
            <Link href="/digital-signage-berlin">Digital Signage Berlin</Link>
            <Link href="/werbung-apotheke-display">Apotheken-Display Werbung</Link>
            <Link href="/blog/digital-signage-apotheke">
              Digital Signage Apotheke
            </Link>
            <Link href="/blog/schaufenster-display-apotheke">
              Schaufenster Display Apotheke
            </Link>
            <Link href="/blog/apotheken-marketing-berlin">
              Apotheken Marketing Berlin
            </Link>
          </div>

          <div className="mt-8 grid gap-2 text-slate-600">
            <p>DokTV UG (haftungsbeschränkt)</p>
            <p>Berlin, Deutschland</p>
            <a href="mailto:info@doktv.de">info@doktv.de</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} DokTV UG (haftungsbeschränkt)</p>

          <div className="flex flex-wrap gap-5">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
