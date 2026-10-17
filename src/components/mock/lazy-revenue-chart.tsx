"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const RevenueChart = dynamic(
  () => import("@/components/mock/revenue-chart").then((m) => m.RevenueChart),
  { ssr: false },
);

/**
 * Reserves the chart's height and mounts recharts only after the page has
 * settled, so the charting library stays off the critical path.
 */
export function LazyRevenueChart({ className }: { className?: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(className)}>
      {ready ? <RevenueChart className="aspect-auto size-full" /> : null}
    </div>
  );
}
