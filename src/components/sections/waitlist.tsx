import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { WaitlistLazy } from "@/components/sections/waitlist-lazy";
import { Card, CardContent } from "@/components/ui/card";
import { waitlist } from "@/content/site";

export function Waitlist() {
  return (
    <Section id="waitlist" containerClassName="max-w-2xl">
      <SectionHeading
        eyebrow={waitlist.eyebrow}
        title={waitlist.title}
        description={waitlist.description}
        align="center"
      />
      <Card className="mt-10">
        <CardContent className="px-6">
          <WaitlistLazy />
        </CardContent>
      </Card>
    </Section>
  );
}
