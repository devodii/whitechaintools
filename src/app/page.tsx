import { Adapters } from "@/components/sections/adapters";
import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { Copilot } from "@/components/sections/copilot";
import { DashboardTour } from "@/components/sections/dashboard-tour";
import { Developers } from "@/components/sections/developers";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Marketplace } from "@/components/sections/marketplace";
import { Mechanism } from "@/components/sections/mechanism";
import { PlatformMap } from "@/components/sections/platform-map";
import { Pricing } from "@/components/sections/pricing";
import { Primitives } from "@/components/sections/primitives";
import { ProofStrip } from "@/components/sections/proof-strip";
import { Roadmap } from "@/components/sections/roadmap";
import { Team } from "@/components/sections/team";
import { TrackRecord } from "@/components/sections/track-record";
import { Waitlist } from "@/components/sections/waitlist";
import { WhyWhitechain } from "@/components/sections/why-whitechain";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <Hero />
        <ProofStrip />
        <Primitives />
        <PlatformMap />
        <DashboardTour />
        <Developers />
        <HowItWorks />
        <Mechanism />
        <Adapters />
        <Marketplace />
        <Copilot />
        <WhyWhitechain />
        <Roadmap />
        <TrackRecord />
        <Team />
        <Pricing />
        <Faq />
        <Waitlist />
      </main>
      <SiteFooter />
    </>
  );
}
