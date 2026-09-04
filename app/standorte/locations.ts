export type LocationType = "Apotheke" | "Arztpraxis";

export type Location = {
  id: string;
  name: string;
  type: LocationType;
  district: string;
  address: string;
  monthlyPrice: number;
  yearlyPrice: number;
  image: string;
  description: string;
  lat: number;
  lng: number;
  isActive?: boolean;
  sortOrder?: number;
};

export const locations: Location[] = [
  {
    id: "sky-wedding",
    name: "Sky Apotheke Wedding",
    type: "Apotheke",
    district: "Wedding",
    address: "Müllerstraße 143, Berlin",
    monthlyPrice: 0,
    yearlyPrice: 0,
    image: "/referenzen/sky-apotheke-wedding-1.jpg",
    description:
      "Schaufenster-Display mit hoher Sichtbarkeit für Laufkundschaft.",
    lat: 52.5459,
    lng: 13.3592,
  },
  {
    id: "sky-kudamm",
    name: "Sky Apotheke Kudamm",
    type: "Apotheke",
    district: "Charlottenburg",
    address: "Kurfürstendamm 139, Berlin",
    monthlyPrice: 0,
    yearlyPrice: 0,
    image: "/referenzen/sky-apotheke-kudamm-1.jpg",
    description:
      "Digitales Schaufenster in gut sichtbarer Lage am Kurfürstendamm.",
    lat: 52.4998,
    lng: 13.308,
  },
  {
    id: "sky-kreuzberg",
    name: "Sky Apotheke Kreuzberg",
    type: "Apotheke",
    district: "Kreuzberg",
    address: "Bergmannstraße 5, Berlin",
    monthlyPrice: 0,
    yearlyPrice: 0,
    image: "/referenzen/sky-apotheke-kreuzberg-1.jpg",
    description: "Digitales Schaufenster im Bergmannkiez.",
    lat: 52.4892,
    lng: 13.394,
  },
];
