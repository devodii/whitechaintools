import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/content/site";

export function Faq() {
  return (
    <Section id="faq" containerClassName="max-w-3xl">
      <SectionHeading eyebrow={faq.eyebrow} title={faq.title} align="center" />
      <Accordion type="single" collapsible className="mt-10">
        {faq.items.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
