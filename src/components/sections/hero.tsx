import { ExternalLink } from "lucide-react";

import { HeroMockup } from "@/components/sections/hero-mockup";
import { GithubIcon } from "@/components/social-icons";
import { Button } from "@/components/ui/button";
import { hero, links } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="bg-glow pointer-events-none absolute top-0 left-1/2 h-96 w-3xl -translate-x-1/2 -translate-y-1/3"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <p className="bg-card inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            <span className="relative flex size-2">
              <span className="bg-primary absolute inline-flex size-full animate-ping rounded-full opacity-60 motion-reduce:animate-none" />
              <span className="bg-primary relative inline-flex size-2 rounded-full" />
            </span>
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {hero.title}
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg text-pretty">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={hero.secondaryCta.href} target="_blank" rel="noreferrer">
                {hero.secondaryCta.label}
                <ExternalLink />
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground flex flex-wrap items-center gap-3 text-sm">
            {hero.openSource}
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="bg-card text-foreground hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium"
            >
              <GithubIcon className="size-3.5" />
              {hero.githubLabel}
            </a>
          </p>
        </div>
        <HeroMockup />
      </div>
    </section>
  );
}
