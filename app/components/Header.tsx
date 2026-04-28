import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png" // ← dein Logo hier
            alt="DokTV Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden gap-8 md:flex">
          <Link href="/" className="font-medium text-slate-700 hover:text-black">
            Startseite
          </Link>
          <Link
            href="/schaufenster-display-apotheken"
            className="font-medium text-slate-700 hover:text-black"
          >
            Schaufenster Display
          </Link>
          <Link
            href="/wartezimmer-tv-praxen"
            className="font-medium text-slate-700 hover:text-black"
          >
            Wartezimmer TV
          </Link>
          <Link
            href="/hersteller-werbung"
            className="font-medium text-slate-700 hover:text-black"
          >
            Hersteller Werbung
          </Link>
          <Link
            href="/ueber-uns"
            className="font-medium text-slate-700 hover:text-black"
          >
            Über uns
          </Link>
          <Link
            href="/kontakt"
            className="font-medium text-slate-700 hover:text-black"
          >
            Kontakt
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <Link
          href="/kontakt"
          className="rounded-xl bg-black px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
        >
          Beratung anfragen
        </Link>
      </div>
    </header>
  );
}