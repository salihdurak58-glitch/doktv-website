import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "DokTV – Digital Signage für Apotheken & Arztpraxen",
  description:
    "Digitale Werbung in Apotheken und Arztpraxen. DokTV bietet moderne Digital Signage Displays für mehr Sichtbarkeit im Gesundheitsbereich.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  keywords: [
    "Digital Signage Apotheke",
    "Werbung Apotheke Berlin",
    "Wartezimmer TV Arztpraxis",
    "Apotheken Werbung",
    "Arztpraxis Werbung",
    "Digital Signage Deutschland",
    "Gesundheitswerbung",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FXSC8MLRXM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FXSC8MLRXM');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
