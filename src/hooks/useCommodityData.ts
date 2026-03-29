"use client";

import { useState, useEffect, useCallback } from "react";
import { CommodityData, HistoricalDataPoint, TimeRange } from "@/types";

export function useCommodityData() {
  const [commodities, setCommodities] = useState<CommodityData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/commodities");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setCommodities(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchData]);

  return { commodities, loading, error, refresh: fetchData };
}

export function useHistoricalData(symbol: string, range: TimeRange) {
  const [data, setData] = useState<HistoricalDataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!symbol) return;
    setLoading(true);
    fetch(`/api/commodities?symbol=${encodeURIComponent(symbol)}&range=${range}`)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [symbol, range]);

  return { data, loading };
}
