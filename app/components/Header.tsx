import Link from "next/link";

const navigation = [
  {
    name: "Startseite",
    href: "/",
  },
  {
    name: "Schaufenster Display",
    href: "/schaufenster-display-apotheken",
  },
  {
    name: "Wartezimmer TV",
    href: "/wartezimmer-tv-praxen",
  },
  {
    name: "Hersteller Werbung",
    href: "/hersteller-werbung",
  },
  {
    name: "Über uns",
    href: "/ueber-uns",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
  },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-black text-slate-950">
          DokTV
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 hover:text-slate-950"
            >
              {item.name}
            </Link>
          ))}
        </nav>

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