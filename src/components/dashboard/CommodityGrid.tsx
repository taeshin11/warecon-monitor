"use client";

import { CommodityData } from "@/types";
import CommodityCard from "./CommodityCard";
import { CardSkeleton } from "../ui/Skeleton";
import AdSlot from "../ads/AdSlot";

interface CommodityGridProps {
  commodities: CommodityData[];
  loading: boolean;
}

export default function CommodityGrid({ commodities, loading }: CommodityGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  const firstRow = commodities.slice(0, 3);
  const secondRow = commodities.slice(3);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {firstRow.map((c) => (
          <CommodityCard key={c.symbol} commodity={c} />
        ))}
      </div>

      <AdSlot slotId="slot-infeed" format="native" className="mb-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {secondRow.map((c) => (
          <CommodityCard key={c.symbol} commodity={c} />
        ))}
      </div>
    </div>
  );
}
