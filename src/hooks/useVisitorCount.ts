"use client";

import { useState, useEffect } from "react";
import { VisitorCount } from "@/types";

export function useVisitorCount() {
  const [count, setCount] = useState<VisitorCount>({ today: 0, total: 0 });

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then(setCount)
      .catch(() => {});
  }, []);

  return count;
}
