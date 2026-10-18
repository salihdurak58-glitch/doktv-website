import EditorialPage from "@/app/components/EditorialPage";
import { editorialPages } from "@/app/lib/seo/editorial-pages";
import { publicPageMetadata } from "@/app/lib/seo/public-metadata";
const page = editorialPages["/hersteller-werbung"];
export const metadata = publicPageMetadata(page.route, page.metaTitle, page.metaDescription, page.image.src);
export default function HerstellerWerbungPage() { return <EditorialPage page={page} />; }
