"use client";

import { useState, useEffect } from "react";
import { VisitorCount } from "@/types";
import { getVisitorCount } from "@/lib/visitors";

export function useVisitorCount() {
  const [count, setCount] = useState<VisitorCount>({ today: 0, total: 0 });

  useEffect(() => {
    getVisitorCount().then(setCount).catch(() => {});
  }, []);

  return count;
}
