"use client";

import { openCookieSettings } from "./ConsentManager";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="text-left hover:text-white"
    >
      Cookie-Einstellungen
    </button>
  );
}
