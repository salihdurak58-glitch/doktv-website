"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { publicContact } from "../lib/public-site";

export default function MobileStickyCta() {
  const pathname = usePathname();
  const isNotdienstPage = pathname === "/apotheken-notdienst-anzeiger";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3 rounded-2xl border border-[#d4eae6] bg-white/95 p-2.5 text-sm font-black shadow-xl shadow-[#0b1738]/10 backdrop-blur">
        <Link
          href={isNotdienstPage ? "/kontakt?display=notdienst#anfrage" : "/kontakt"}
          className="rounded-xl bg-teal-700 px-4 py-3.5 text-center text-white transition hover:bg-teal-800"
        >
          {isNotdienstPage ? "Notdienst anfragen" : "Kostenlose Beratung"}
        </Link>

        <a
          href={publicContact.phoneHref}
          className="rounded-xl border border-[#cbdde1] bg-white px-4 py-3.5 text-center text-[#0b1738] transition hover:bg-[#e9f9f6]"
        >
          Anrufen
        </a>
      </div>
    </div>
  );
}
