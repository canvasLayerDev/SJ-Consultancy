"use client";

import { Hero } from "@/components/ui/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { HospitalShowcase } from "@/components/sections/HospitalShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { OurTeam } from "@/components/sections/OurTeam";

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
        heroIllustration="./doctor-removebg.png"
        heroHeight="screen"
        heroAlignment="left"
        imagePosition="right"
        backgroundGradient="bg-gradient-to-br from-primary/10 via-white to-accent/10"
      />
      <TrustStrip />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessPreview />
      <OurTeam />
      <Testimonials />
    </>
  );
}
