export type LocationType = "Apotheke" | "Arztpraxis";

export type Location = {
  id: number;
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
};

export const locations: Location[] = [
  {
    id: 1,
    name: "Apotheke Mitte",
    type: "Apotheke",
    district: "Berlin-Mitte",
    address: "Alexanderplatz 1, 10178 Berlin",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    image: "/logo.png",
    description:
      "Schaufenster-Display mit hoher Sichtbarkeit für Laufkundschaft.",
    lat: 52.521918,
    lng: 13.413215,
  },
  {
    id: 2,
    name: "Arztpraxis Charlottenburg",
    type: "Arztpraxis",
    district: "Charlottenburg",
    address: "Kurfürstendamm 50, 10707 Berlin",
    monthlyPrice: 249,
    yearlyPrice: 2490,
    image: "/logo.png",
    description:
      "Wartezimmer-Display für Patienteninformation und Gesundheitswerbung.",
    lat: 52.501247,
    lng: 13.312419,
  },
  {
    id: 3,
    name: "Apotheke Neukölln",
    type: "Apotheke",
    district: "Neukölln",
    address: "Karl-Marx-Straße 80, 12043 Berlin",
    monthlyPrice: 179,
    yearlyPrice: 1790,
    image: "/logo.png",
    description: "Digitales Schaufenster in gut erreichbarer Lage.",
    lat: 52.481126,
    lng: 13.435889,
  },
];