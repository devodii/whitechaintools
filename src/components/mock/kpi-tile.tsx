export function KpiTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background rounded-lg border p-3">
      <p className="text-muted-foreground truncate text-[11px]">{label}</p>
      <p className="mt-1 font-mono text-lg font-semibold tabular-nums">
        {value}
      </p>
    </div>
  );
}
