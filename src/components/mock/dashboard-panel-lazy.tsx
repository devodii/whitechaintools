"use client";

import dynamic from "next/dynamic";

import type { DashboardPage } from "@/content/site";

const DashboardPanel = dynamic(
  () =>
    import("@/components/mock/dashboard-panels").then((m) => m.DashboardPanel),
  { ssr: false },
);

export function DashboardPanelLazy({ page }: { page: DashboardPage }) {
  return <DashboardPanel page={page} />;
}
