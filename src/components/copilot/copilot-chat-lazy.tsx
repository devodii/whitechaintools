"use client";

import dynamic from "next/dynamic";

import { LazyOnVisible } from "@/components/lazy-on-visible";

const CopilotChat = dynamic(
  () => import("@/components/copilot/copilot-chat").then((m) => m.CopilotChat),
  { ssr: false },
);

export function CopilotChatLazy({ live }: { live: boolean }) {
  return (
    <LazyOnVisible minHeight={560}>
      <CopilotChat live={live} />
    </LazyOnVisible>
  );
}
