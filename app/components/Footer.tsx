import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#243a44] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">DokTV</h2>
          <p className="mt-4 max-w-md text-white/70">
            Digital Signage für Apotheken, Arztpraxen und Hersteller. Moderne
            Sichtbarkeit im Gesundheitsbereich.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Navigation</h3>
          <div className="mt-4 grid gap-2 text-white/70">
            <Link href="/">Startseite</Link>
            <Link href="/apotheken">Apotheken</Link>
            <Link href="/arztpraxen">Arztpraxen</Link>
            <Link href="/hersteller">Hersteller</Link>
            <Link href="/standorte">Standorte</Link>
            <Link href="/preise">Preise</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">SEO & Leistungen</h3>
          <div className="mt-4 grid gap-2 text-white/70">
            <Link href="/digital-signage-apotheke-berlin">
              Digital Signage Apotheke Berlin
            </Link>
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

          <div className="mt-8 grid gap-2 text-white/70">
            <p>DokTV UG (haftungsbeschränkt)</p>
            <p>Berlin, Deutschland</p>
            <a href="mailto:info@doktv.de">info@doktv.de</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} DokTV UG (haftungsbeschränkt)</p>

          <div className="flex gap-5">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}