"use client";

import { Hero } from "@/components/ui/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Hero
        smallLabel="About Us"
        mainHeading="Redefining Healthcare Standards"
        highlightedWords={["Healthcare"]}
        description="Learn more about SJ Consultancy, our mission, vision, and the core values that drive us to build better hospitals."
        heroHeight="medium"
        heroAlignment="center"
        backgroundGradient="bg-gradient-to-r from-teal-50 to-blue-50"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight mb-8">
              SJ Consultancy was built to change the story.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Started in 2024, we are a young and dynamic firm with core expertise in fulfilling any requirements for Hospitals at ONE point by a specialized team at an affordable cost.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We recognized a silent crisis in hospital design and management—bricks and beds were laid, but behavior, psychology, and compliance were an afterthought. Our behavioral-based planning ensures hospitals feel human, not just clinical.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm"
            >
              <h3 className="text-3xl font-heading font-bold mb-6 text-primary">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                To give a complete one-point solution for NABH and NABL accreditation & other needs of Management at an economical rate by working as a part of the Hospital with the existing team.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm"
            >
              <h3 className="text-3xl font-heading font-bold mb-6 text-accent">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                To turn chaos into care, one hospital at a time, by designing spaces that reflect how doctors think, patients feel, and care flows naturally.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
      </section>

      {/* Meet Our Team */}
      <section className="py-24 bg-neutral-light">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Leadership</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight mb-6">
              Meet Our Experts
            </h2>
            <p className="text-lg text-slate-600">
              Guided by experienced medical professionals who understand the intricate balance of healthcare management, compliance, and patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { name: "Dr. Jatin Raj", role: "Co-Founder & Consultant", credentials: "BHMS, MBA (Hospital & Healthcare)" },
              { name: "Dr. Shahrukh Khan", role: "Co-Founder & Consultant", credentials: "BDS, Healthcare Quality Expert" }
            ].map((leader, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm text-center border border-slate-100"
              >
                <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden">
                  {/* Placeholder for actual photo */}
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary text-4xl font-heading font-bold">
                    {leader.name.charAt(4)}
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">{leader.name}</h3>
                <p className="text-primary font-semibold mb-2">{leader.role}</p>
                <p className="text-slate-500 text-sm">{leader.credentials}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
}
