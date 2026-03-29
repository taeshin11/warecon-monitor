"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { CommodityData, TimeRange } from "@/types";
import { useHistoricalData } from "@/hooks/useCommodityData";
import { WAR_EVENTS } from "@/lib/constants";
import { ChartSkeleton } from "../ui/Skeleton";

interface DetailChartProps {
  commodity: CommodityData;
}

const TIME_RANGES: TimeRange[] = ["1W", "1M", "3M", "6M", "1Y"];

export default function DetailChart({ commodity }: DetailChartProps) {
  const [range, setRange] = useState<TimeRange>("1M");
  const [expanded, setExpanded] = useState(false);
  const { data, loading } = useHistoricalData(commodity.symbol, range);

  const relevantEvents = WAR_EVENTS.filter((e) =>
    e.impactedCommodities.includes(commodity.symbol)
  );

  if (!expanded) {
    return (
      <button
        onClick={() => setExpanded(true)}
        className="w-full text-left bg-[var(--bg-card)] rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all text-sm text-[var(--accent-primary)]"
      >
        View detailed chart for {commodity.name} &rarr;
      </button>
    );
  }

  if (loading) return <ChartSkeleton />;

  const isPositive = commodity.changePercent >= 0;

  return (
    <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-card)]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
        <h3 className="text-lg font-bold text-[var(--text-primary)] font-heading">
          {commodity.name}
        </h3>
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

      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`gradient-${commodity.symbol}`} x1="0" y1="0" x2="0" y2="1">
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
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: "var(--text-muted)" }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "var(--text-muted)" }}
              tickLine={false}
              axisLine={false}
              domain={["auto", "auto"]}
              width={60}
            />
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
                label={{
                  value: event.event.slice(0, 20),
                  position: "top",
                  fill: "var(--text-muted)",
                  fontSize: 9,
                }}
              />
            ))}
            <Area
              type="monotone"
              dataKey="price"
              stroke={isPositive ? "var(--accent-success)" : "var(--accent-danger)"}
              fill={`url(#gradient-${commodity.symbol})`}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <button
        onClick={() => setExpanded(false)}
        className="mt-3 text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
      >
        Collapse chart
      </button>
    </div>
  );
}
