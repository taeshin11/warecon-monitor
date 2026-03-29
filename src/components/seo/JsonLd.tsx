export function WebApplicationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "WarEcon Monitor",
    description:
      "Track real-time commodity prices affected by global conflicts. Monitor crude oil, natural gas, wheat, corn, and gold prices with war-event annotations.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://warecon-monitor.vercel.app",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function DatasetJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "War-Impact Commodity Price Data",
    description:
      "Real-time and historical commodity prices (crude oil, natural gas, wheat, corn, gold, brent oil) with geopolitical conflict event annotations.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://warecon-monitor.vercel.app",
    license: "https://creativecommons.org/licenses/by/4.0/",
    creator: {
      "@type": "Organization",
      name: "WarEcon Monitor",
    },
    temporalCoverage: "2022/..",
    variableMeasured: ["Commodity Price", "Price Change Percentage"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
