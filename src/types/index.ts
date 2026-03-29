export interface CommodityData {
  symbol: string;
  name: string;
  shortName: string;
  price: number;
  change: number;
  changePercent: number;
  currency: string;
  sparklineData: number[];
  lastUpdated: string;
}

export interface WarEvent {
  date: string;
  event: string;
  impactedCommodities: string[];
  severity: "critical" | "high" | "medium" | "low";
}

export interface HistoricalDataPoint {
  date: string;
  price: number;
  volume?: number;
}

export interface VisitorCount {
  today: number;
  total: number;
}

export interface SheetPostData {
  type: "alert_signup" | "calculate_impact";
  email?: string;
  commodity?: string;
  startDate?: string;
  endDate?: string;
  result?: string;
}

export type TimeRange = "1W" | "1M" | "3M" | "6M" | "1Y";

export const COMMODITY_MAP: Record<string, { name: string; shortName: string }> = {
  "CL=F": { name: "Crude Oil (WTI)", shortName: "Crude Oil" },
  "NG=F": { name: "Natural Gas", shortName: "Nat Gas" },
  "ZW=F": { name: "Wheat", shortName: "Wheat" },
  "ZC=F": { name: "Corn", shortName: "Corn" },
  "GC=F": { name: "Gold", shortName: "Gold" },
  "BZ=F": { name: "Brent Crude Oil", shortName: "Brent Oil" },
};
