import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { WebApplicationJsonLd, DatasetJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "WarEcon Monitor — Live War-Impact Commodity Price Dashboard",
  description:
    "Track real-time commodity prices affected by global conflicts. Monitor crude oil, natural gas, wheat, corn, and gold prices with war-event annotations. Free dashboard.",
  keywords: [
    "war commodity prices",
    "conflict commodity index",
    "war impact on oil prices",
    "geopolitical commodity tracker",
    "crude oil price war",
    "commodity prices live dashboard",
  ],
  openGraph: {
    title: "WarEcon Monitor — Live War-Impact Commodity Price Dashboard",
    description:
      "Track real-time commodity prices affected by global conflicts. Free dashboard with war-event annotations.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://warecon-monitor.vercel.app",
    siteName: "WarEcon Monitor",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WarEcon Monitor — War-Impact Commodity Prices",
    description:
      "Track real-time commodity prices affected by global conflicts. Free dashboard.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://warecon-monitor.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <WebApplicationJsonLd />
        <DatasetJsonLd />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
