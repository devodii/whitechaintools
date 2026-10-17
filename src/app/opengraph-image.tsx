import { ImageResponse } from "next/og";

import { hero, site } from "@/content/site";
import { brandColors } from "@/lib/brand-colors";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: brandColors.background,
        color: brandColors.foreground,
      }}
    >
      <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
        <span>{site.wordmark.lead}</span>
        <span style={{ color: brandColors.primary }}>
          {site.wordmark.accent}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: -2,
        }}
      >
        {hero.title}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 32,
          color: brandColors.mutedForeground,
        }}
      >
        From the team behind StellarTools
      </div>
    </div>,
    size,
  );
}
