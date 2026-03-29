"use client";

import { ResponsiveContainer, LineChart, Line } from "recharts";

interface SparklineChartProps {
  data: number[];
  positive: boolean;
}

export default function SparklineChart({ data, positive }: SparklineChartProps) {
  if (!data || data.length === 0) return null;

  const chartData = data.map((value, index) => ({ index, value }));

  return (
    <div className="h-12 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={positive ? "var(--accent-success)" : "var(--accent-danger)"}
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
