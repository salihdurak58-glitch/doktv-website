export const pricing = {
  displays: {
    55: {
      size: "55 Zoll",
      price: 649,
      query: "55",
      description:
        "Die kompakte Lösung für Schaufenster, Verkaufsbereich oder Wartezimmer.",
    },
    65: {
      size: "65 Zoll",
      price: 799,
      query: "65",
      description:
        "Mehr Bildschirmfläche für größere Schaufenster und besonders sichtbare Präsentationen.",
    },
  },
  service: {
    name: "DokTV Content-Service",
    price: 69,
    interval: "Monat",
  },
  emergencyDisplay: {
    name: "Notdienstanzeiger",
    price: 10,
    interval: "Monat",
  },
} as const;

export function formatEuro(value: number) {
  return `${new Intl.NumberFormat("de-DE").format(value)} €`;
}
