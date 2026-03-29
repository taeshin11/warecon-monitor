"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CommodityData, TimeRange, COMMODITY_MAP } from "@/types";
import { SLUG_TO_SYMBOL, WAR_EVENTS } from "@/lib/constants";
import { useHistoricalData } from "@/hooks/useCommodityData";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";
import Badge from "@/components/ui/Badge";
import { ChartSkeleton } from "@/components/ui/Skeleton";
import ShareButtons from "@/components/ui/ShareButtons";
import Link from "next/link";

const COMMODITY_CONTEXT: Record<string, { why: string; relatedSlugs: { slug: string; name: string }[] }> = {
  "CL=F": {
    why: "Crude Oil (WTI) is the most war-sensitive commodity in global markets. Middle East tensions, OPEC production decisions, and shipping route disruptions can cause price swings of 10%+ within days. The Russia-Ukraine conflict and Red Sea Houthi attacks have been key recent drivers.",
    relatedSlugs: [
      { slug: "brent-oil", name: "Brent Crude Oil" },
      { slug: "natural-gas", name: "Natural Gas" },
      { slug: "gold", name: "Gold" },
    ],
  },
  "NG=F": {
    why: "Natural Gas prices are heavily influenced by the Russia-Ukraine conflict, as Russia was Europe's largest gas supplier. Pipeline disruptions, sanctions, and the shift to LNG have created sustained volatility in global natural gas markets.",
    relatedSlugs: [
      { slug: "crude-oil", name: "Crude Oil (WTI)" },
      { slug: "brent-oil", name: "Brent Crude Oil" },
      { slug: "wheat", name: "Wheat" },
    ],
  },
  "ZW=F": {
    why: "Wheat prices surged over 50% following Russia's invasion of Ukraine — both nations are among the world's top grain exporters. The Black Sea grain corridor collapse and ongoing conflict continue to threaten global food security and wheat supply chains.",
    relatedSlugs: [
      { slug: "corn", name: "Corn" },
      { slug: "crude-oil", name: "Crude Oil (WTI)" },
      { slug: "natural-gas", name: "Natural Gas" },
    ],
  },
  "ZC=F": {
    why: "Corn prices are affected by both direct conflict disruptions (Ukraine is a major corn exporter) and indirect effects like rising energy costs increasing farming expenses. Fertilizer supply disruptions from Russia sanctions have further inflated corn production costs.",
    relatedSlugs: [
      { slug: "wheat", name: "Wheat" },
      { slug: "crude-oil", name: "Crude Oil (WTI)" },
      { slug: "natural-gas", name: "Natural Gas" },
    ],
  },
  "GC=F": {
    why: "Gold is the classic safe-haven asset — when geopolitical uncertainty spikes, investors flock to gold, driving prices higher. Every major conflict since the Gulf War has produced gold price surges. The 2023-2024 Middle East escalation pushed gold to all-time highs.",
    relatedSlugs: [
      { slug: "crude-oil", name: "Crude Oil (WTI)" },
      { slug: "brent-oil", name: "Brent Crude Oil" },
      { slug: "wheat", name: "Wheat" },
    ],
  },
  "BZ=F": {
    why: "Brent Crude Oil, the global benchmark, is sensitive to any supply disruption in key shipping lanes. Houthi attacks on Red Sea vessels, OPEC+ emergency cuts, and Iran-Israel tensions have all driven significant Brent price volatility since 2023.",
    relatedSlugs: [
      { slug: "crude-oil", name: "Crude Oil (WTI)" },
      { slug: "natural-gas", name: "Natural Gas" },
      { slug: "gold", name: "Gold" },
    ],
  },
};

const TIME_RANGES: TimeRange[] = ["1W", "1M", "3M", "6M", "1Y"];

export default function CommodityPage() {
  const params = useParams();
  const slug = params.slug as string;
  const symbol = SLUG_TO_SYMBOL[slug];
  const info = symbol ? COMMODITY_MAP[symbol] : null;

  const [commodity, setCommodity] = useState<CommodityData | null>(null);
  const [range, setRange] = useState<TimeRange>("3M");
  const [loading, setLoading] = useState(true);
  const { data: historicalData, loading: chartLoading } = useHistoricalData(symbol || "", range);

  useEffect(() => {
    if (!symbol) return;
    fetch("/api/commodities")
      .then((r) => r.json())
      .then((all: CommodityData[]) => {
        const found = all.find((c) => c.symbol === symbol);
        if (found) setCommodity(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [symbol]);

  if (!symbol || !info) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4 font-heading">
          Commodity Not Found
        </h1>
        <Link href="/" className="text-[var(--accent-primary)] hover:underline">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  if (loading || !commodity) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <ChartSkeleton />
      </div>
    );
  }

  const isPositive = commodity.changePercent >= 0;
  const relevantEvents = WAR_EVENTS.filter((e) =>
    e.impactedCommodities.includes(symbol)
  );

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-6">
        <Link href="/" className="text-sm text-[var(--accent-primary)] hover:underline">
          &larr; Back to Dashboard
        </Link>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-extrabold text-[var(--text-primary)] font-heading">
            {info.name}
          </h1>
          <Badge variant={isPositive ? "success" : "danger"}>
            {isPositive ? "+" : ""}
            {commodity.changePercent.toFixed(2)}%
          </Badge>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold font-mono text-[var(--text-primary)]">
            ${commodity.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
          <span className={`text-sm font-mono ${isPositive ? "text-[var(--accent-success)]" : "text-[var(--accent-danger)]"}`}>
            {isPositive ? "+" : ""}
            {commodity.change.toFixed(2)} {commodity.currency}
          </span>
        </div>
        <p className="text-xs text-[var(--text-muted)] mt-1">
          Symbol: {commodity.symbol} | Last updated: {new Date(commodity.lastUpdated).toLocaleString()}
        </p>
      </div>

      {/* Chart */}
      <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-card)] mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
          <h2 className="text-lg font-bold text-[var(--text-primary)] font-heading">
            Price History
          </h2>
          <div className="flex gap-1">
            {TIME_RANGES.map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  range === r
                    ? "bg-[var(--accent-primary)] text-white"
                    : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--border-light)]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {chartLoading ? (
          <div className="h-80 flex items-center justify-center">
            <div className="animate-pulse text-[var(--text-muted)]">Loading chart...</div>
          </div>
        ) : (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={historicalData}>
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor={isPositive ? "var(--accent-success)" : "var(--accent-danger)"}
                      stopOpacity={0.2}
                    />
                    <stop
                      offset="100%"
                      stopColor={isPositive ? "var(--accent-success)" : "var(--accent-danger)"}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "var(--text-muted)" }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "var(--text-muted)" }} tickLine={false} axisLine={false} domain={["auto", "auto"]} width={60} />
                <Tooltip
                  contentStyle={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-light)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "12px",
                  }}
                  formatter={(value) => [`$${Number(value).toFixed(2)}`, "Price"]}
                />
                {relevantEvents.map((event) => (
                  <ReferenceLine
                    key={event.date}
                    x={event.date}
                    stroke="var(--accent-warning)"
                    strokeDasharray="3 3"
                    label={{ value: event.event.slice(0, 25), position: "top", fill: "var(--text-muted)", fontSize: 9 }}
                  />
                ))}
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke={isPositive ? "var(--accent-success)" : "var(--accent-danger)"}
                  fill="url(#areaGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* War Events */}
      {relevantEvents.length > 0 && (
        <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-card)] mb-8">
          <h2 className="text-lg font-bold text-[var(--text-primary)] font-heading mb-4">
            Related Geopolitical Events
          </h2>
          <div className="space-y-3">
            {relevantEvents.map((event) => (
              <div
                key={event.date}
                className="flex items-start gap-3 p-3 bg-[var(--bg-secondary)] rounded-[var(--radius-sm)]"
              >
                <Badge variant={event.severity === "critical" ? "danger" : "warning"}>
                  {event.severity}
                </Badge>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{event.event}</p>
                  <p className="text-xs text-[var(--text-muted)]">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SEO Context Section */}
      {COMMODITY_CONTEXT[symbol] && (
        <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-card)] mb-8">
          <h2 className="text-lg font-bold text-[var(--text-primary)] font-heading mb-3">
            Why {info.name} Prices Are Affected by War
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
            {COMMODITY_CONTEXT[symbol].why}
          </p>

          <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2">Related Commodities</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {COMMODITY_CONTEXT[symbol].relatedSlugs.map((rc) => (
              <Link
                key={rc.slug}
                href={`/commodity/${rc.slug}`}
                className="px-3 py-1.5 text-xs bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-full hover:text-[var(--accent-primary)] hover:bg-[var(--bg-primary)] transition-colors border border-[var(--border-light)]"
              >
                {rc.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-[var(--border-light)]">
            <p className="text-xs text-[var(--text-muted)] mb-2">Share this page</p>
            <ShareButtons />
          </div>
        </div>
      )}

      {/* Internal Links */}
      <div className="flex flex-wrap gap-3 text-xs">
        <Link href="/" className="text-[var(--accent-primary)] hover:underline">Dashboard</Link>
        <Link href="/insights" className="text-[var(--accent-primary)] hover:underline">Insights & Analysis</Link>
        <Link href="/#calculator" className="text-[var(--accent-primary)] hover:underline">Impact Calculator</Link>
        <Link href="/#alerts" className="text-[var(--accent-primary)] hover:underline">Price Alerts</Link>
      </div>
    </div>
  );
}
