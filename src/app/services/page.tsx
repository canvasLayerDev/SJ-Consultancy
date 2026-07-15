"use client";

import { Hero } from "@/components/ui/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <>
      <Hero
        smallLabel="Our Services"
        mainHeading="Comprehensive Healthcare Solutions"
        highlightedWords={["Healthcare", "Solutions"]}
        description="From full NABH accreditation to green smart hospital planning, we provide end-to-end consultancy to elevate your facility."
        heroHeight="medium"
        heroAlignment="left"
        backgroundGradient="bg-gradient-to-br from-blue-50 via-white to-teal-50"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <ServicesPreview />

      {/* Detailed Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          
          {/* NABH Detail */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl bg-slate-100 relative">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" alt="NABH Accreditation" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-6">Full NABH Accreditation</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                National Accreditation Board for Hospitals & Healthcare Providers (NABH) is a constituent board of the Quality Council of India (QCI). It certifies quality and patient-safety standards.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Credibility & Trust — A recognised mark of quality",
                  "Empanelment Advantage — Preferred for CGHS, ECHS, PSUs",
                  "Higher Reimbursement — Better payer rates",
                  "Fewer Clinical Errors — Standardized protocols",
                  "Better Outcomes — Improved patient satisfaction"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Training Detail */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl bg-slate-100 relative">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" alt="Staff Training" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-6">Staff Training & Documentation</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                A hospital is only as good as its staff. We provide comprehensive training and meticulous documentation to ensure your team is prepared for any scenario.
              </p>
              <ul className="space-y-4">
                {[
                  "Emergency codes and mock drills",
                  "Patient Rights & Responsibilities",
                  "Hospital Infection Control & Waste Management",
                  "Preparation of Apex Manual and SOPs",
                  "Quality indicator monitoring and clinical audits"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Pricing Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[3rem] p-10 md:p-14 text-center text-white"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Transparent Investment</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Our Consultation Charges for Full NABH Certification are straightforward, ensuring you get end-to-end support without hidden surprises.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-lg mx-auto">
              <div className="text-5xl font-heading font-black text-white mb-2">₹4,00,000</div>
              <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Four Lakhs + Travel</p>
              <p className="text-slate-400 text-sm">Includes Documentation, Staff Training, Audits, and Final Assessment Support. (NABH Application fee excluded)</p>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
