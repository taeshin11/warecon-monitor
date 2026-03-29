"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CommodityData } from "@/types";
import { SYMBOL_TO_SLUG } from "@/lib/constants";
import SparklineChart from "./SparklineChart";
import Badge from "../ui/Badge";

interface CommodityCardProps {
  commodity: CommodityData;
}

export default function CommodityCard({ commodity }: CommodityCardProps) {
  const isPositive = commodity.changePercent >= 0;
  const slug = SYMBOL_TO_SLUG[commodity.symbol];
  const priceRef = useRef<HTMLSpanElement>(null);
  const prevPrice = useRef(commodity.price);

  useEffect(() => {
    if (prevPrice.current !== commodity.price && priceRef.current) {
      priceRef.current.classList.remove("price-flash");
      void priceRef.current.offsetWidth;
      priceRef.current.classList.add("price-flash");
    }
    prevPrice.current = commodity.price;
  }, [commodity.price]);

  return (
    <Link href={`/commodity/${slug}`}>
      <article
        className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
        aria-label={`${commodity.name}: $${commodity.price.toFixed(2)}, ${isPositive ? "up" : "down"} ${Math.abs(commodity.changePercent).toFixed(2)}%`}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-[var(--text-secondary)] font-heading">
            {commodity.shortName}
          </h3>
          <Badge variant={isPositive ? "success" : "danger"}>
            {isPositive ? "+" : ""}
            {commodity.changePercent.toFixed(2)}%
          </Badge>
        </div>

        <div className="mb-1">
          <span ref={priceRef} className="text-2xl font-bold text-[var(--text-primary)] font-mono rounded px-1 -mx-1">
            ${commodity.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>

        <div className="text-xs text-[var(--text-muted)] mb-3">
          {isPositive ? "+" : ""}
          {commodity.change.toFixed(2)} {commodity.currency}
        </div>

        <SparklineChart data={commodity.sparklineData} positive={isPositive} />
      </article>
    </Link>
  );
}
