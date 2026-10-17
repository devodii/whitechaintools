import { codeToHtml } from "shiki";

import { CopyButton } from "@/components/copy-button";
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
  const html = await codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  });

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
