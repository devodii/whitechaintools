"use client";

import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";

const RevenueChart = dynamic(
  () => import("@/components/mock/revenue-chart").then((m) => m.RevenueChart),
  {
    ssr: false,
    loading: () => null,
  },
);

/** Reserves the chart's height so loading recharts later causes no layout shift. */
export function LazyRevenueChart({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <RevenueChart className="aspect-auto size-full" />
    </div>
  );
}
