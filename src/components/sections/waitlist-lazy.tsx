"use client";

import dynamic from "next/dynamic";

import { LazyOnVisible } from "@/components/lazy-on-visible";

const WaitlistForm = dynamic(
  () =>
    import("@/components/sections/waitlist-form").then((m) => m.WaitlistForm),
  { ssr: false },
);

export function WaitlistLazy() {
  return (
    <LazyOnVisible minHeight={440}>
      <WaitlistForm />
    </LazyOnVisible>
  );
}
