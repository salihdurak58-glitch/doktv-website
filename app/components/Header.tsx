import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-7 px-6 py-5">
        {/* LOGO */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="DokTV Logo"
            width={240}
            height={72}
            priority
            className="h-auto w-[170px] lg:w-[190px]"
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-6 whitespace-nowrap text-[17px] font-semibold text-slate-800 lg:flex xl:gap-8 xl:text-lg">
          <Link href="/" className="hover:text-black">
            Startseite
          </Link>
          <Link
            href="/schaufenster-display-apotheken"
            className="hover:text-black"
          >
            Schaufenster Display
          </Link>
          <Link
            href="/wartezimmer-tv-praxen"
            className="hover:text-black"
          >
            Wartezimmer TV
          </Link>
          <Link
            href="/hersteller-werbung"
            className="hover:text-black"
          >
            Hersteller Werbung
          </Link>
          <Link
            href="/ueber-uns"
            className="hover:text-black"
          >
            Über uns
          </Link>
          <Link href="/kontakt" className="hover:text-black">
            Kontakt
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <Link
          href="/kontakt"
          className="shrink-0 rounded-xl bg-black px-5 py-3.5 text-base font-bold text-white hover:bg-slate-800"
        >
          Beratung anfragen
        </Link>
      </div>
    </header>
  );
}
