import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeedbackButton from "@/components/ui/FeedbackButton";
import { I18nProvider } from "@/lib/i18n";
import { WebApplicationJsonLd, DatasetJsonLd } from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://warecon-monitor.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WarEcon Monitor — Live War-Impact Commodity Price Dashboard",
    template: "%s | WarEcon Monitor",
  },
  description:
    "Track real-time commodity prices affected by global conflicts. Monitor crude oil, natural gas, wheat, corn, and gold prices with war-event annotations. Free dashboard.",
  keywords: [
    "war commodity prices",
    "conflict commodity index",
    "war impact on oil prices",
    "geopolitical commodity tracker",
    "crude oil price war",
    "commodity prices live dashboard",
    "oil price conflict",
    "wheat price ukraine war",
    "gold price geopolitical risk",
    "natural gas war impact",
    "brent crude conflict",
    "war economy tracker",
    "commodity market war",
    "geopolitical risk commodities",
    "free commodity price tracker",
    "war impact gold price",
    "conflict commodity dashboard",
    "real time commodity tracker",
    "commodity price war analysis",
    "middle east oil prices",
  ],
  openGraph: {
    title: "WarEcon Monitor — Live War-Impact Commodity Price Dashboard",
    description:
      "Track real-time commodity prices affected by global conflicts. Free dashboard with war-event annotations.",
    url: siteUrl,
    siteName: "WarEcon Monitor",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "WarEcon Monitor — War-Impact Commodity Price Dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WarEcon Monitor — War-Impact Commodity Prices",
    description:
      "Track real-time commodity prices affected by global conflicts. Free dashboard with war-event annotations.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4A72FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="WarEcon" />
        <WebApplicationJsonLd />
        <DatasetJsonLd />
        {/* BreadcrumbList structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
                { "@type": "ListItem", position: 2, name: "Commodities", item: `${siteUrl}/commodity/crude-oil` },
                { "@type": "ListItem", position: 3, name: "Insights", item: `${siteUrl}/insights` },
                { "@type": "ListItem", position: 4, name: "About", item: `${siteUrl}/about` },
              ],
            }),
          }}
        />
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WarEcon Monitor",
              url: siteUrl,
              logo: `${siteUrl}/og-image.svg`,
              description: "Free war-impact commodity price dashboard tracking how geopolitical conflicts move global markets.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "taeshinkim11@gmail.com",
                contactType: "customer service",
              },
            }),
          }}
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7098271335538021"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Adsterra Popunder — once per session */}
        <script
          async
          src="https://pl29005635.profitablecpmratenetwork.com/fc/b5/08/fcb508d86e50d469980420fcba9639f3.js"
        />
        <I18nProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FeedbackButton />
        </I18nProvider>
      </body>
    </html>
  );
}
