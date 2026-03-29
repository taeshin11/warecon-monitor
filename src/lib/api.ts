import { CommodityData, HistoricalDataPoint, COMMODITY_MAP } from "@/types";
import { COMMODITY_SYMBOLS } from "./constants";

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const cache = new Map<string, CacheEntry<unknown>>();

function getCached<T>(key: string): T | null {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) {
    return entry.data as T;
  }
  return null;
}

function setCache<T>(key: string, data: T): void {
  cache.set(key, { data, timestamp: Date.now() });
}

export async function fetchCommodities(): Promise<CommodityData[]> {
  const cached = getCached<CommodityData[]>("commodities");
  if (cached) return cached;

  try {
    const yahooFinance = (await import("yahoo-finance2")).default;

    const results = await Promise.allSettled(
      COMMODITY_SYMBOLS.map(async (symbol) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const quote: any = await yahooFinance.quote(symbol);
        const info = COMMODITY_MAP[symbol] || { name: symbol, shortName: symbol };

        // Get sparkline data (last 7 days)
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 7);

        let sparklineData: number[] = [];
        try {
          const historical = await yahooFinance.chart(symbol, {
            period1: startDate,
            period2: endDate,
            interval: "1d",
          });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          sparklineData = (historical as any).quotes.map((q: any) => q.close ?? 0).filter((v: number) => v > 0);
        } catch {
          sparklineData = [];
        }

        return {
          symbol,
          name: info.name,
          shortName: info.shortName,
          price: quote.regularMarketPrice ?? 0,
          change: quote.regularMarketChange ?? 0,
          changePercent: quote.regularMarketChangePercent ?? 0,
          currency: quote.currency ?? "USD",
          sparklineData,
          lastUpdated: new Date().toISOString(),
        } as CommodityData;
      })
    );

    const commodities = results
      .filter((r): r is PromiseFulfilledResult<CommodityData> => r.status === "fulfilled")
      .map((r) => r.value);

    if (commodities.length > 0) {
      setCache("commodities", commodities);
    }

    return commodities;
  } catch (error) {
    console.error("Failed to fetch commodities:", error);
    return getMockData();
  }
}

export async function fetchHistoricalData(
  symbol: string,
  range: string
): Promise<HistoricalDataPoint[]> {
  const cacheKey = `historical-${symbol}-${range}`;
  const cached = getCached<HistoricalDataPoint[]>(cacheKey);
  if (cached) return cached;

  const rangeMap: Record<string, number> = {
    "1W": 7,
    "1M": 30,
    "3M": 90,
    "6M": 180,
    "1Y": 365,
  };

  const days = rangeMap[range] || 30;
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  try {
    const yahooFinance = (await import("yahoo-finance2")).default;
    const historical = await yahooFinance.chart(symbol, {
      period1: startDate,
      period2: endDate,
      interval: days <= 30 ? "1d" : "1wk",
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: HistoricalDataPoint[] = (historical as any).quotes.map(
      (q: any) => ({
        date: new Date(q.date).toISOString().split("T")[0],
        price: q.close ?? 0,
        volume: q.volume ?? 0,
      })
    );

    setCache(cacheKey, data);
    return data;
  } catch (error) {
    console.error(`Failed to fetch historical data for ${symbol}:`, error);
    return [];
  }
}

function getMockData(): CommodityData[] {
  const mockPrices: Record<string, { price: number; change: number }> = {
    "CL=F": { price: 72.4, change: 2.3 },
    "NG=F": { price: 3.21, change: -1.1 },
    "ZW=F": { price: 5.82, change: 0.8 },
    "ZC=F": { price: 4.51, change: -0.5 },
    "GC=F": { price: 2031, change: 1.2 },
    "BZ=F": { price: 76.2, change: 1.8 },
  };

  return COMMODITY_SYMBOLS.map((symbol) => {
    const mock = mockPrices[symbol] || { price: 0, change: 0 };
    const info = COMMODITY_MAP[symbol] || { name: symbol, shortName: symbol };
    return {
      symbol,
      name: info.name,
      shortName: info.shortName,
      price: mock.price,
      change: mock.change * mock.price / 100,
      changePercent: mock.change,
      currency: "USD",
      sparklineData: Array.from({ length: 7 }, () =>
        mock.price * (1 + (Math.random() - 0.5) * 0.04)
      ),
      lastUpdated: new Date().toISOString(),
    };
  });
}
