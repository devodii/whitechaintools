import type { LucideProps } from "lucide-react";

import { iconMap, type LucideIconName } from "@/lib/icons";

export function Icon({
  name,
  ...props
}: { name: LucideIconName } & LucideProps) {
  const Component = iconMap[name];
  return <Component aria-hidden="true" {...props} />;
}
