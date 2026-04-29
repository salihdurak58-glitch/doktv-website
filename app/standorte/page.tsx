import { generatePageMetadata } from "@/app/lib/seo/get-page-seo";
import { getPublicLocations } from "@/app/lib/locations/get-locations";
import StandorteClient from "./StandorteClient";

export async function generateMetadata() {
  return generatePageMetadata("/standorte");
}

export default async function StandortePage() {
  const locations = await getPublicLocations();

  return <StandorteClient locations={locations} />;
}
