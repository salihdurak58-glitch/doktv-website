import Image from "next/image";

export default function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      {/* LOGO */}
      <a href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="DokTV Logo"
          width={220}
          height={80}
          priority
          className="h-auto w-[220px]"
        />
      </a>

      {/* NAVIGATION */}
      <nav className="hidden gap-8 text-sm font-medium md:flex">
        <a href="/apotheken">Apotheken</a>
        <a href="/arztpraxen">Arztpraxen</a>
        <a href="/hersteller">Hersteller</a>
        <a href="/standorte">Standortfinder</a>
        <a href="/preise">Preise</a>
        <a href="/kontakt">Kontakt</a>
      </nav>

      {/* BUTTON */}
      <a
        href="/kontakt"
        className="rounded-full bg-[#334c59] px-5 py-3 text-sm font-semibold text-white"
      >
        Beratung anfragen
      </a>
    </header>
  );
}