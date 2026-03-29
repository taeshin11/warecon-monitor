export default function FaqJsonLd() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What commodities does WarEcon Monitor track?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WarEcon Monitor tracks six key war-sensitive commodities: Crude Oil (WTI), Brent Crude Oil, Natural Gas, Wheat, Corn, and Gold. These were chosen for their strong historical price reactions to armed conflicts and geopolitical tensions.",
        },
      },
      {
        "@type": "Question",
        name: "How often is the price data updated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Commodity prices are refreshed every 5 minutes during market hours. Data is sourced from Yahoo Finance, which aggregates prices from major commodity exchanges including NYMEX, COMEX, and CBOT.",
        },
      },
      {
        "@type": "Question",
        name: "Is WarEcon Monitor free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, WarEcon Monitor is completely free with no hidden costs, no account registration required, and no paywall. We are supported by non-intrusive display advertising.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Impact Calculator work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Impact Calculator lets you measure the price change of any tracked commodity between two dates. Select a commodity, pick start and end dates, and click Calculate to see the exact percentage change with starting and ending prices.",
        },
      },
      {
        "@type": "Question",
        name: "What are the war event annotations on the charts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "War event annotations are yellow dashed vertical lines on historical charts representing major geopolitical events that impacted commodity markets, including the Russia-Ukraine invasion, Hamas-Israel conflict, Houthi Red Sea attacks, and Iran-Israel tensions.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use WarEcon Monitor data for research?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, WarEcon Monitor data is freely available for educational, research, and journalistic purposes. Please cite as 'WarEcon Monitor (warecon-monitor.vercel.app)' and note that prices are sourced from Yahoo Finance.",
        },
      },
      {
        "@type": "Question",
        name: "Should I make financial decisions based on WarEcon Monitor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WarEcon Monitor is an informational tool, not a financial advisory service. Never make investment decisions based solely on any single source. Always consult a qualified financial advisor.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
