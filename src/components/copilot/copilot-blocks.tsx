"use client";

import { toast } from "sonner";

import { StatusPill } from "@/components/mock/status-pill";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { CopilotBlock } from "@/content/site";

function showDemoNote() {
  toast("Demo only, nothing was changed.");
}

export function CopilotBlockView({ block }: { block: CopilotBlock }) {
  if (block.kind === "plan") {
    return (
      <div className="bg-card space-y-3 rounded-lg border p-3 text-sm">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Plan created</p>
          <StatusPill status="pending" />
        </div>
        <dl className="grid grid-cols-2 gap-2 text-xs">
          <dt className="text-muted-foreground">Name</dt>
          <dd className="font-medium">{block.name}</dd>
          <dt className="text-muted-foreground">Price</dt>
          <dd className="font-mono tabular-nums">{block.price}</dd>
          <dt className="text-muted-foreground">Interval</dt>
          <dd>{block.interval}</dd>
          <dt className="text-muted-foreground">Trial</dt>
          <dd>{block.trial}</dd>
        </dl>
        <div className="flex gap-2">
          <Button size="xs" onClick={showDemoNote}>
            Confirm
          </Button>
          <Button size="xs" variant="outline" onClick={showDemoNote}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  if (block.kind === "failures") {
    return (
      <div className="bg-card rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Reason</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {block.rows.map((row) => (
              <TableRow key={row.customer}>
                <TableCell className="text-xs">{row.customer}</TableCell>
                <TableCell className="text-xs">{row.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
    <div className="bg-card space-y-3 rounded-lg border p-3 text-sm">
      <p className="text-muted-foreground text-xs">Email draft</p>
      <p className="font-semibold">{block.subject}</p>
      <p className="text-muted-foreground text-xs">{block.body}</p>
      <Button size="xs" onClick={showDemoNote}>
        {block.action}
      </Button>
    </div>
  );
}
