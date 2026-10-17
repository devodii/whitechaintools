import { CopyButton } from "@/components/copy-button";
import { highlight } from "@/lib/highlight";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  lang?: string;
  className?: string;
}

export async function CodeBlock({
  code,
  lang = "ts",
  className,
}: CodeBlockProps) {
  const html = await highlight(code, lang);

  return (
    <div
      className={cn(
        "bg-card relative overflow-hidden rounded-lg border",
        className,
      )}
    >
      <div className="absolute top-2 right-2 z-10">
        <CopyButton value={code} />
      </div>
      <div
        className="shiki-wrapper overflow-x-auto p-4 font-mono text-[13px] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
