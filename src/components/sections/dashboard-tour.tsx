"use client";

import { AnimatePresence, m } from "motion/react";
import { useState } from "react";

import { Icon } from "@/components/icon";
import { DashboardPanelLazy } from "@/components/mock/dashboard-panel-lazy";
import { LazyOnVisible } from "@/components/lazy-on-visible";
import { SampleBadge } from "@/components/mock/sample-badge";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import {
  dashboardPageIcons,
  dashboardPages,
  dashboardTour,
  type DashboardPage,
} from "@/content/site";
import { cn } from "@/lib/utils";

export function DashboardTour() {
  const [active, setActive] = useState<DashboardPage>("Overview");

  return (
    <Section id="dashboard">
      <SectionHeading
        eyebrow={dashboardTour.eyebrow}
        title={dashboardTour.title}
        description={dashboardTour.description}
      />
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[14rem_1fr]">
        <div
          role="tablist"
          aria-label="Dashboard pages"
          aria-orientation="vertical"
          className="-mx-4 flex gap-1 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:px-0"
        >
          {dashboardPages.map((page) => (
            <button
              key={page}
              type="button"
              role="tab"
              id={`tour-tab-${page}`}
              aria-selected={active === page}
              aria-controls="tour-panel"
              onClick={() => setActive(page)}
              className={cn(
                "text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:ring-ring/50 flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors focus-visible:ring-[3px] focus-visible:outline-none",
                active === page && "bg-secondary text-foreground font-medium",
              )}
            >
              <Icon name={dashboardPageIcons[page]} className="size-4" />
              {page}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id="tour-panel"
          aria-labelledby={`tour-tab-${active}`}
          className="bg-card dark:ring-foreground/5 min-h-96 rounded-xl border p-4 shadow-sm dark:shadow-none dark:ring-1"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">{active}</h3>
            <SampleBadge label={dashboardTour.sampleDataLabel} />
          </div>
          <LazyOnVisible minHeight={320}>
            <AnimatePresence mode="wait">
              <m.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <DashboardPanelLazy page={active} />
              </m.div>
            </AnimatePresence>
          </LazyOnVisible>
        </div>
      </div>
    </Section>
  );
}
