import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";
import { proof } from "@/content/site";

export function ProofStrip() {
  return (
    <Section id="proof" className="bg-secondary/40 border-y">
      <SectionHeading
        eyebrow={proof.eyebrow}
        title={proof.title}
        description={proof.description}
      />
      <ul className="mt-10 flex flex-wrap gap-3">
        {proof.items.map((item) => (
          <li
            key={item}
            className="bg-card flex items-center gap-2 rounded-lg border px-3 py-2 text-sm"
          >
            <span>{item}</span>
            <StatusBadge status="shipped-stellar" />
          </li>
        ))}
      </ul>
      <p className="text-muted-foreground mt-8 text-sm">
        <a
          href={proof.footnoteHref}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground underline-offset-4 hover:underline"
        >
          {proof.footnote}
        </a>
      </p>
    </Section>
  );
}
