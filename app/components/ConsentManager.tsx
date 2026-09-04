"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type ConsentState = {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
};

const CONSENT_STORAGE_KEY = "doktv-cookie-consent";
const CONSENT_EVENT_NAME = "doktv:open-cookie-settings";
const GA_MEASUREMENT_ID = "G-FXSC8MLRXM";
const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

const defaultConsent: ConsentState = {
  necessary: true,
  statistics: false,
  marketing: false,
};

function readStoredConsent(): ConsentState | null {
  try {
    const storedValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!storedValue) return null;

    const parsedValue = JSON.parse(storedValue) as Partial<ConsentState>;

    return {
      necessary: true,
      statistics: Boolean(parsedValue.statistics),
      marketing: Boolean(parsedValue.marketing),
    };
  } catch {
    return null;
  }
}

function storeConsent(consent: ConsentState) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(CONSENT_EVENT_NAME));
}

export default function ConsentManager() {
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);
  const [draftConsent, setDraftConsent] =
    useState<ConsentState>(defaultConsent);
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const storedConsent = readStoredConsent();

      if (storedConsent) {
        setConsent(storedConsent);
        setDraftConsent(storedConsent);
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }

      setIsReady(true);
    }, 0);

    function handleOpenSettings() {
      const currentConsent = readStoredConsent() || defaultConsent;
      setDraftConsent(currentConsent);
      setIsOpen(true);
    }

    window.addEventListener(CONSENT_EVENT_NAME, handleOpenSettings);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener(CONSENT_EVENT_NAME, handleOpenSettings);
    };
  }, []);

  function saveConsent(nextConsent: ConsentState) {
    storeConsent(nextConsent);
    setConsent(nextConsent);
    setDraftConsent(nextConsent);
    setIsOpen(false);
  }

  const shouldLoadStatistics = isReady && consent.statistics;
  const shouldLoadMarketing = isReady && consent.marketing;
  const shouldLoadGoogleAds = shouldLoadMarketing && Boolean(GOOGLE_ADS_ID);
  const gtagScriptId = GOOGLE_ADS_ID || GA_MEASUREMENT_ID;

  return (
    <>
      {shouldLoadStatistics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="doktv-google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {shouldLoadMarketing && GTM_CONTAINER_ID && (
        <Script id="doktv-google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
          `}
        </Script>
      )}

      {shouldLoadGoogleAds && (
        <>
          {!shouldLoadStatistics && (
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gtagScriptId}`}
              strategy="afterInteractive"
            />
          )}
          <Script id="doktv-google-ads" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_ID}');
            `}
          </Script>
        </>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end bg-slate-950/60 px-4 py-6 backdrop-blur-sm sm:items-center sm:px-6">
          <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white p-6 text-slate-900 shadow-2xl sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
              <div>
                <p className="font-semibold text-blue-600">
                  Cookie-Einstellungen
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
                  Datenschutz-Einstellungen
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  Wir nutzen notwendige Cookies für den Betrieb der Website.
                  Statistik- und Marketing-Dienste laden wir nur nach Ihrer
                  Zustimmung.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-black text-slate-950">
                          Notwendig
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Erforderlich für Grundfunktionen und Sicherheit.
                        </p>
                      </div>
                      <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">
                        Immer aktiv
                      </span>
                    </div>
                  </div>

                  <label className="block rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-black text-slate-950">
                          Statistik
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Erlaubt Google Analytics zur anonymisierten Analyse
                          der Website-Nutzung.
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={draftConsent.statistics}
                        onChange={(event) =>
                          setDraftConsent((current) => ({
                            ...current,
                            statistics: event.target.checked,
                          }))
                        }
                        className="mt-1 h-5 w-5 accent-blue-600"
                      />
                    </div>
                  </label>

                  <label className="block rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-black text-slate-950">
                          Marketing
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Erlaubt Google Tag Manager und Google Ads Conversion
                          Tracking für Kampagnenmessung.
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={draftConsent.marketing}
                        onChange={(event) =>
                          setDraftConsent((current) => ({
                            ...current,
                            marketing: event.target.checked,
                          }))
                        }
                        className="mt-1 h-5 w-5 accent-blue-600"
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-end gap-3">
                <button
                  type="button"
                  onClick={() =>
                    saveConsent({
                      necessary: true,
                      statistics: true,
                      marketing: true,
                    })
                  }
                  className="rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-500"
                >
                  Alle akzeptieren
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent(draftConsent)}
                  className="rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-slate-800"
                >
                  Auswahl speichern
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent(defaultConsent)}
                  className="rounded-2xl border border-slate-300 px-6 py-4 font-bold text-slate-800 transition hover:bg-slate-100"
                >
                  Nur notwendige Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
