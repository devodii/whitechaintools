import { Badge } from "@/components/ui/badge";

export function SampleBadge({ label = "Sample data" }: { label?: string }) {
  return (
    <Badge variant="outline" className="text-muted-foreground border-dashed">
      {label}
    </Badge>
  );
}
