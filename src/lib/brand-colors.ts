/**
 * Hex equivalents of the dark theme tokens in globals.css.
 *
 * next/og renders with satori, which cannot read CSS variables or oklch, so the
 * generated OG image and favicon need literal values. This is the only place
 * raw color values are allowed. Keep in sync with the `.dark` block.
 */
export const brandColors = {
  background: "#06090f",
  foreground: "#eff2f5",
  primary: "#2bd2c2",
  primaryForeground: "#001517",
  mutedForeground: "#989fa8",
  card: "#0c1219",
} as const;
