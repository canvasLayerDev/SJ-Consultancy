"use client";

import { Hero } from "@/components/ui/Hero";
import { motion } from "framer-motion";

const PROCESS_STEPS = [
  { step: "01", title: "Consultation & Kickoff", desc: "We begin by understanding your hospital's specific needs, size, and goals. We set clear expectations and form a core team." },
  { step: "02", title: "Gap Analysis", desc: "A comprehensive assessment of your current state against NABH standards. We identify exactly what needs to change." },
  { step: "03", title: "Documentation", desc: "We draft the Apex Manual, Department manuals, SOPs, formats, and work instructions tailored to your workflow." },
  { step: "04", title: "Staff Training", desc: "Intensive training on core systems, emergency codes, patient rights, infection control, and fire safety." },
  { step: "05", title: "Mock Audits", desc: "Internal audits, departmental visits, and simulated emergency scenarios to prepare your staff for the real assessment." },
  { step: "06", title: "Final Accreditation", desc: "We support you through the pre-assessment, final NABH survey, and assist in closing any Non-Compliances (NCs)." }
];

export function Process() {
  return (
    <>
      <Hero
        backgroundImage="https://media.licdn.com/dms/image/v2/C4D1BAQF9uGdKzyy2Cg/company-background_1536_768/company-background_1536_768/0/1583266026271?e=2147483647&v=beta&t=p01e9PU8rU_-ZIm4zuutLzKhSPnizll817q73cEV2DM"
        backgroundOverlay="bg-primary/30"
        smallLabel="Our Process"
        mainHeading="A Clear Path to Success"
        highlightedWords={["Success"]}
        description="We follow a structured, step-by-step approach to ensure your hospital achieves accreditation smoothly and efficiently."
        heroHeight="medium"
        heroAlignment="center"
        backgroundGradient="bg-gradient-to-r from-slate-100 to-slate-200"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Process", href: "/process" },
        ]}
      />

      <section className="py-10 md:py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-primary/20 pl-6 sm:pl-8 md:pl-16 ml-3 sm:ml-4 md:ml-0 py-8 sm:py-10 space-y-12 sm:space-y-20">

              {PROCESS_STEPS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[38px] sm:-left-[42px] md:-left-[74px] top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" />
                  </div>

                  <div className="bg-neutral-light p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
                    <div className="absolute -right-6 sm:-right-10 -top-6 sm:-top-10 text-7xl sm:text-8xl md:text-[120px] font-heading font-black text-slate-200/50 group-hover:text-primary/5 transition-colors leading-none pointer-events-none select-none">
                      {item.step}
                    </div>

                    <div className="relative z-10">
                      <div className="text-primary font-bold tracking-wider text-xs sm:text-sm mb-2">STEP {item.step}</div>
                      <h3 className="text-lg md:text-xl font-semibold leading-snug text-slate-900 mb-3 sm:mb-4">{item.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed sm:leading-7 text-gray-600 max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

          {/* Timeline Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-primary/5 border border-primary/20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center">
              <h4 className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">Typical Timeline</h4>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-2">4–8 months</div>
              <p className="text-sm md:text-base leading-relaxed text-gray-600">Entry-Level or Full NABH</p>
            </div>

            <div className="bg-accent/5 border border-accent/20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center">
              <h4 className="text-accent font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">Accreditation Validity</h4>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-2">2–3 years</div>
              <p className="text-sm md:text-base leading-relaxed text-gray-600">With periodic surveillance audits</p>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default Process;
