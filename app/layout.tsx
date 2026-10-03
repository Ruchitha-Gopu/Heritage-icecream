import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import WhatsAppButton from "@/components/WhatsAppButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: {
    default:
      "Heritage Ice Cream Parlour | Ice Creams, Falooda & Desserts in Cherukupalli",
    template: "%s | Heritage Ice Cream Parlour",
  },
  description: siteConfig.description,
  keywords: [
    "Ice cream parlour in Cherukupalli",
    "Heritage Ice Cream Parlour Cherukupalli",
    "Ice cream near Cherukupalli",
    "Falooda in Cherukupalli",
    "Badam milk in Cherukupalli",
    "Ice cream catering Cherukupalli",
    "Ice cream for functions",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title:
      "Heritage Ice Cream Parlour | Ice Creams, Falooda & Desserts in Cherukupalli",
    description: siteConfig.description,
    url: siteConfig.websiteUrl,
    siteName: siteConfig.businessName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://picsum.photos/seed/heritage-og/1200/630",
        width: 1200,
        height: 630,
        alt: siteConfig.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Heritage Ice Cream Parlour | Ice Creams, Falooda & Desserts in Cherukupalli",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",
    name: siteConfig.businessName,
    image: "https://picsum.photos/seed/heritage-og/1200/630",
    "@id": siteConfig.websiteUrl,
    url: siteConfig.websiteUrl,
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLine,
      addressLocality: siteConfig.city,
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    servesCuisine: "Ice Cream, Desserts",
    priceRange: "₹",
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <body className="bg-cream font-body text-cocoa antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppButton floating />
      </body>
    </html>
  );
}
