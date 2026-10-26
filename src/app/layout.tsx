import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileBar } from "@/components/MobileBar";
import { OfferBanner } from "@/components/OfferBanner";
import { salonSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const description =
  "Clinical facials, lash lifts, hot wax, nails and massage with Tania Cahalane, NVQ 3 qualified with 25+ years' experience. Allure Beauty Suites, Peacehaven. Book online.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Beauty Therapist in Peacehaven | Facials, Lash Lifts & Waxing | TLC Beauty Specialist",
    template: "%s | TLC Beauty Specialist, Peacehaven",
  },
  description,
  keywords: [
    "beauty therapist Peacehaven",
    "facials Peacehaven",
    "lash lift Peacehaven",
    "waxing Peacehaven",
    "Hollywood wax Brighton",
    "Clinicare facial East Sussex",
    "beauty salon Newhaven",
    "beauty salon Saltdean",
    "nails Telscombe",
    "massage Seaford",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: "TLC Beauty Specialist, Peacehaven",
    description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f7f1e8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a href="#main" className="sr-only z-[60] rounded bg-espresso px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <OfferBanner />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
        <JsonLd data={salonSchema()} />
      </body>
    </html>
  );
}
