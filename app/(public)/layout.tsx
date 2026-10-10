import "../public-site.css";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import MobileStickyCta from "../components/MobileStickyCta";
import ConsentManager from "../components/ConsentManager";

export default function PublicSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="public-site">
      <SiteHeader />
      {children}
      <Footer />
      <MobileStickyCta />
      <ConsentManager />
    </div>
  );
}
