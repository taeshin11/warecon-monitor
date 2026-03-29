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
