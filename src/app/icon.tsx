import { ImageResponse } from "next/og";

import { brandColors } from "@/lib/brand-colors";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: brandColors.primary,
        borderRadius: 8,
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={brandColors.primaryForeground}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m2 9 3-3 3 3" />
        <path d="M13 18H7a2 2 0 0 1-2-2V6" />
        <path d="m22 15-3 3-3-3" />
        <path d="M11 6h6a2 2 0 0 1 2 2v10" />
      </svg>
    </div>,
    size,
  );
}
