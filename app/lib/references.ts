export type DoktvReference = {
  title: string;
  address: string;
  location: string;
  description: string;
  details: string[];
  images: {
    src: string;
    alt: string;
  }[];
  summary: string;
};

export const doktvReferences: DoktvReference[] = [
  {
    title: "Sky Apotheke Wedding",
    address: "Müllerstraße 143, 13353 Berlin",
    location: "Berlin-Wedding",
    description:
      "Für die Sky Apotheke Wedding wurden zwei Hochformat-Schaufensterdisplays installiert. Die Displays sind von außen klar sichtbar und ermöglichen die digitale Ausspielung von Angeboten, Gesundheitsinformationen und Werbekampagnen direkt am Point of Sale.",
    details: [
      "2 Schaufenster-Displays",
      "Hochformat",
      "Angebots- und Gesundheitskommunikation",
      "Zentrale Inhaltssteuerung",
      "Standort: Berlin-Wedding",
    ],
    images: [
      {
        src: "/referenzen/sky-apotheke-wedding-1.jpg",
        alt: "Digital Signage Schaufensterdisplays in der Sky Apotheke Berlin Wedding, Müllerstraße 143",
      },
      {
        src: "/referenzen/sky-apotheke-wedding-2.jpg",
        alt: "Zwei Hochformat-Displays im Schaufenster der Sky Apotheke Wedding in Berlin",
      },
    ],
    summary:
      "Zwei Hochformat-Schaufensterdisplays für Angebote, Gesundheitsinformationen und Kampagnen.",
  },
  {
    title: "Sky Apotheke Kudamm",
    address: "Kurfürstendamm 139, Berlin",
    location: "Berlin-Kudamm",
    description:
      "Am Standort Kurfürstendamm zeigt DokTV, wie Schaufenster-Displays tagsüber und nachts Aufmerksamkeit erzeugen. Die digitalen Inhalte sind gut sichtbar und unterstützen die moderne Außenwirkung der Apotheke.",
    details: [
      "2 Schaufenster-Displays",
      "Sichtbarkeit bei Tag und Nacht",
      "Digitale Angebotswerbung",
      "Zentrale Fernverwaltung",
      "Standort: Berlin-Kudamm",
    ],
    images: [
      {
        src: "/referenzen/sky-apotheke-kudamm-1.jpg",
        alt: "Schaufenster Digital Signage Installation in der Sky Apotheke am Kurfürstendamm in Berlin",
      },
      {
        src: "/referenzen/sky-apotheke-kudamm-2.jpg",
        alt: "Sky Apotheke Kudamm mit digitalen Schaufensterdisplays bei Tageslicht",
      },
    ],
    summary:
      "Digitale Schaufensterdisplays für sichtbare Angebotswerbung am Kurfürstendamm.",
  },
  {
    title: "Sky Apotheke Kreuzberg",
    address: "Bergmannstraße 5, Berlin",
    location: "Berlin-Kreuzberg",
    description:
      "Die Sky Apotheke Kreuzberg nutzt DokTV zur digitalen Angebots- und Informationskommunikation im Schaufenster. Besonders im Abendbetrieb sorgt das Display für hohe Sichtbarkeit und eine moderne Außenwirkung.",
    details: [
      "Schaufensterdisplay im Eingangsbereich",
      "Hohe Sichtbarkeit am Abend",
      "Digitale Angebotskommunikation",
      "Moderne Außenwirkung",
      "Standort: Berlin-Kreuzberg",
    ],
    images: [
      {
        src: "/referenzen/sky-apotheke-kreuzberg-1.jpg",
        alt: "Digital Signage Display in der Sky Apotheke Kreuzberg in der Bergmannstraße 5",
      },
      {
        src: "/referenzen/sky-apotheke-kreuzberg-2.jpg",
        alt: "Sky Apotheke Kreuzberg mit beleuchtetem Schaufensterdisplay am Abend",
      },
    ],
    summary:
      "Schaufensterdisplay für digitale Angebots- und Informationskommunikation in Kreuzberg.",
  },
];
