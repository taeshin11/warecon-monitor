import { WarEvent } from "@/types";

export const COMMODITY_SYMBOLS = ["CL=F", "NG=F", "ZW=F", "ZC=F", "GC=F", "BZ=F"];

export const WAR_EVENTS: WarEvent[] = [
  {
    date: "2022-02-24",
    event: "Russia invades Ukraine",
    impactedCommodities: ["CL=F", "NG=F", "ZW=F"],
    severity: "critical",
  },
  {
    date: "2023-10-07",
    event: "Hamas attack on Israel",
    impactedCommodities: ["CL=F", "BZ=F", "GC=F"],
    severity: "high",
  },
  {
    date: "2024-01-12",
    event: "Houthi Red Sea shipping attacks escalate",
    impactedCommodities: ["CL=F", "BZ=F", "NG=F"],
    severity: "high",
  },
  {
    date: "2024-04-13",
    event: "Iran drone/missile attack on Israel",
    impactedCommodities: ["CL=F", "GC=F", "BZ=F"],
    severity: "high",
  },
  {
    date: "2024-08-06",
    event: "Israel-Lebanon border escalation intensifies",
    impactedCommodities: ["CL=F", "BZ=F", "GC=F"],
    severity: "high",
  },
  {
    date: "2024-10-01",
    event: "Iran ballistic missile barrage on Israel",
    impactedCommodities: ["CL=F", "BZ=F", "GC=F", "NG=F"],
    severity: "critical",
  },
  {
    date: "2025-01-15",
    event: "Red Sea shipping insurance costs triple",
    impactedCommodities: ["CL=F", "BZ=F", "NG=F"],
    severity: "high",
  },
  {
    date: "2025-03-20",
    event: "Russia-Ukraine Black Sea grain corridor collapses",
    impactedCommodities: ["ZW=F", "ZC=F", "NG=F"],
    severity: "critical",
  },
  {
    date: "2025-07-10",
    event: "Taiwan Strait military tensions peak",
    impactedCommodities: ["CL=F", "GC=F", "BZ=F"],
    severity: "high",
  },
  {
    date: "2025-11-22",
    event: "OPEC+ emergency production cut amid Middle East crisis",
    impactedCommodities: ["CL=F", "BZ=F", "NG=F"],
    severity: "critical",
  },
  {
    date: "2025-02-14",
    event: "Sudan civil war disrupts African oil exports",
    impactedCommodities: ["CL=F", "BZ=F", "GC=F"],
    severity: "high",
  },
];

export const SLUG_TO_SYMBOL: Record<string, string> = {
  "crude-oil": "CL=F",
  "natural-gas": "NG=F",
  "wheat": "ZW=F",
  "corn": "ZC=F",
  "gold": "GC=F",
  "brent-oil": "BZ=F",
};

export const SYMBOL_TO_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(SLUG_TO_SYMBOL).map(([k, v]) => [v, k])
);
