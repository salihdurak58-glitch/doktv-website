import EditorialPage from "@/app/components/EditorialPage";
import { editorialPages } from "@/app/lib/seo/editorial-pages";
import { publicPageMetadata } from "@/app/lib/seo/public-metadata";
const page = editorialPages["/werbung-apotheke-display"];
export const metadata = publicPageMetadata(page.route, page.metaTitle, page.metaDescription, page.image.src);
export default function WerbungApothekeDisplayPage() { return <EditorialPage page={page} />; }
