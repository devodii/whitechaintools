import { CodeBlock } from "@/components/code-block";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  const first = howItWorks.snippets[0];

  return (
    <Section id="how">
      <SectionHeading
        eyebrow={howItWorks.eyebrow}
        title={howItWorks.title}
        description={howItWorks.description}
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <ol className="space-y-6">
          {howItWorks.steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="bg-primary text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-sm font-semibold">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <Tabs defaultValue={first?.tab} className="min-w-0 gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <TabsList>
              {howItWorks.snippets.map(({ tab }) => (
                <TabsTrigger key={tab} value={tab}>
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
            <Badge variant="outline" className="border-dashed">
              {howItWorks.previewLabel}
            </Badge>
          </div>
          {howItWorks.snippets.map(({ tab, code, lang }) => (
            <TabsContent key={tab} value={tab}>
              <CodeBlock code={code} lang={lang} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Section>
  );
}
