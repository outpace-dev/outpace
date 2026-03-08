import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://outpace-murex.vercel.app"),
  alternates: { canonical: "./" },
  title: {
    default: "Outpace | Full-Spectrum Business Development",
    template: "%s | Outpace",
  },
  description:
    "Outpace is a full-spectrum business development partner based in Limerick, Ireland. We handle strategy, lead generation, digital presence, systems, and content — so you can focus on growth.",
  keywords: [
    "business development Ireland",
    "lead generation Ireland",
    "digital marketing Limerick",
    "CRM implementation Ireland",
    "B2B growth partner",
    "Irish business consultancy",
    "sales enablement",
    "AI growth tools",
  ],
  authors: [{ name: "Outpace" }],
  creator: "Outpace",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://outpace-murex.vercel.app",
    siteName: "Outpace",
    title: "Outpace | Full-Spectrum Business Development",
    description:
      "Your full-spectrum business development partner. Strategy, lead generation, digital presence, systems, and content — all under one roof.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outpace | Full-Spectrum Business Development",
    description:
      "Your full-spectrum business development partner. Strategy, lead generation, digital presence, systems, and content — all under one roof.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ── Organization + LocalBusiness structured data ── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Outpace",
  description:
    "Full-spectrum business development partner helping Irish SMEs grow through strategy, lead generation, digital presence, systems, and content.",
  url: "https://outpace-murex.vercel.app",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit B3, Eastway Business Park, Ballysimon",
    addressLocality: "Limerick",
    addressCountry: "IE",
    postalCode: "V94 AX99",
  },
  areaServed: {
    "@type": "Country",
    name: "Ireland",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IE" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
