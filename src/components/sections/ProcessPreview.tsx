"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

const PROCESS_STEPS = [
  { step: "01", title: "Gap Analysis", desc: "Assess current state against NABH standards." },
  { step: "02", title: "Documentation", desc: "Draft SOPs, policies & quality manuals." },
  { step: "03", title: "Staff Training", desc: "Train staff on protocols & patient safety." },
  { step: "04", title: "Mock Audits", desc: "Internal audits to identify & close gaps." },
  { step: "05", title: "Application", desc: "Submit application & pre-assessment." },
  { step: "06", title: "Final Assessment", desc: "Support during on-site NABH survey." }
];

export function ProcessPreview() {
  return (
    <section className="py-24 bg-neutral-light relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight">
              A clear path to <span className="text-primary">Accreditation</span>.
            </h2>
          </div>
          <Button href="/process" variant="outline" size="lg">
            View Complete Process
          </Button>
        </div>

        {/* Interactive Timeline Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {PROCESS_STEPS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="text-5xl font-heading font-black text-slate-100 group-hover:text-primary/10 transition-colors absolute top-6 right-8">
                {item.step}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
