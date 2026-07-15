"use client";

import { Hero } from "@/components/ui/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { HospitalShowcase } from "@/components/sections/HospitalShowcase";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero
        smallLabel="SJ Consultancy"
        mainHeading="Your health is our priority"
        highlightedWords={["priority"]}
        description="We don't just consult — we walk with you. 50+ doctors already trust SJ Consultancy to guide their hospitals through NABH-compliant, behaviour-driven design and accreditation."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
        heroIllustration="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"
        heroHeight="screen"
        heroAlignment="left"
        backgroundGradient="bg-gradient-to-r from-blue-50/80 via-teal-50/50 to-transparent"
      />
      <TrustStrip />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessPreview />
      <HospitalShowcase />
      <Testimonials />
    </>
  );
}
