import { Hero } from "@/components/Hero";
import { PillsStrip } from "@/components/PillsStrip";
import { TrustStrip } from "@/components/TrustStrip";
import { AvailabilityPulse } from "@/components/AvailabilityPulse";
import { SmartEnquiry } from "@/components/SmartEnquiry";
import { QuickLinks } from "@/components/QuickLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <PillsStrip />
      <TrustStrip />
      <AvailabilityPulse />
      <SmartEnquiry />
      <QuickLinks />
    </>
  );
}
