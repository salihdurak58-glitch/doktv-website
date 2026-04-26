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
            <a href="/apotheken">Apotheken</a>
            <a href="/arztpraxen">Arztpraxen</a>
            <a href="/hersteller">Hersteller</a>
            <a href="/standorte">Standortfinder</a>
            <a href="/preise">Preise</a>
            <a href="/kontakt">Kontakt</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Kontakt</h3>
          <div className="mt-4 grid gap-2 text-white/70">
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
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}