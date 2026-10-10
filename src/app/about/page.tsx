"use client";

import { Hero } from "@/components/ui/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { OurTeam } from "@/components/sections/OurTeam";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Hero
        backgroundImage="https://drarvindersingh.com/wp-content/uploads/2024/07/Importance-Of-a-Consultant-in-The-Hospital-Segment.jpg"
        backgroundOverlay="bg-white/0"
        smallLabel="About Us"
        mainHeading="Redefining Healthcare Standards"
        highlightedWords={["Healthcare"]}
        description="Learn more about SJ Consultancy, our mission, vision, and the core values that drive us to build better hospitals."
        heroHeight="screen"
        heroAlignment="center"
        imagePosition="right"
        backgroundGradient="bg-gradient-to-r from-teal-50 to-blue-50"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />

      {/* Company Story */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4 block">Our Story</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 leading-tight mb-6 sm:mb-8">
              SJ Consultancy was built to change the story.
            </h2>
            <p className="text-sm md:text-base leading-relaxed sm:leading-7 text-gray-600 mb-4 sm:mb-6">
              Started in 2024, we are a young and dynamic firm with core expertise in fulfilling any requirements for Hospitals at ONE point by a specialized team at an affordable cost.
            </p>
            <p className="text-sm md:text-base leading-relaxed sm:leading-7 text-gray-600">
             We recognized a silent crisis in hospital design and management bricks and beds were laid, but behavior, psychology, and compliance were an afterthought. Our behavioral-based planning ensures hospitals feel human, not just clinical.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 md:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-sm"
            >
              <h3 className="text-lg md:text-xl font-semibold leading-snug mb-4 sm:mb-6 text-primary">Our Mission</h3>
              <p className="text-sm md:text-base leading-relaxed sm:leading-7 text-slate-300">
                To give a complete one-point solution for NABH and NABL accreditation & other needs of Management at an economical rate by working as a part of the Hospital with the existing team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-sm"
            >
              <h3 className="text-lg md:text-xl font-semibold leading-snug mb-4 sm:mb-6 text-accent">Our Vision</h3>
              <p className="text-sm md:text-base leading-relaxed sm:leading-7 text-slate-300">
                To turn chaos into care, one hospital at a time, by designing spaces that reflect how doctors think, patients feel, and care flows naturally.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      </section>

      <OurTeam />

      <WhyChooseUs />
    </>
  );
}
