"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "../ui/Button";
import { ShieldCheck, Building2, FileText, Users, SearchCheck, Leaf } from "lucide-react";

const SERVICES = [
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: "NABH Accreditation",
    description: "End-to-end guidance for hospitals to achieve National Accreditation Board standards.",
  },
  {
    icon: <SearchCheck size={32} strokeWidth={1.5} />,
    title: "NABL Accreditation",
    description: "Quality and technical competence accreditation for diagnostic labs and blood banks.",
  },
  {
    icon: <Building2 size={32} strokeWidth={1.5} />,
    title: "Hospital Planning",
    description: "Behaviour-based planning and design for efficient, human-centered healthcare facilities.",
  },
  {
    icon: <FileText size={32} strokeWidth={1.5} />,
    title: "Documentation & SOPs",
    description: "Drafting robust Standard Operating Procedures, policies, and quality manuals.",
  },
  {
    icon: <Users size={32} strokeWidth={1.5} />,
    title: "Staff Training",
    description: "Comprehensive training on clinical protocols, emergency codes, and patient safety.",
  },
  {
    icon: <Leaf size={32} strokeWidth={1.5} />,
    title: "Green Smart Hospitals",
    description: "Sustainable, compliant, and revenue-optimized healthcare design.",
  }
];

export function ServicesPreview() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-10 md:py-20 bg-neutral-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-xl md:text-3xl font-heading font-bold text-slate-900 leading-tight mb-6">
            Comprehensive Solutions for Modern Healthcare
          </h2>
          <p className="text-sm md:text-base leading-7 text-gray-600">
            We offer specialized consultancy services designed to elevate your facility&apos;s standards, ensure compliance, and optimize patient care.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold leading-snug text-slate-900 mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm md:text-base leading-7 text-gray-600 mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-primary font-semibold text-sm group/link">
                Learn more
                <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/services" size="lg" variant="outline">
            View All Services
          </Button>
        </div>

      </div>
    </section>
  );
}
