"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const TRUST_ITEMS = [
  "NABH Accreditation",
  "NABL Accreditation",
  "Hospital Planning",
  "Documentation",
  "Staff Training",
  "Quality Management",
  "Mock Audits",
  "Green Smart Hospital",
];

export function TrustStrip() {

  return (
    <section className="bg-slate-900 py-5 overflow-hidden border-y border-slate-800">
      <div className="flex w-max">
        {/* We render the list twice to create a seamless infinite loop effect with CSS or Framer Motion */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, index) => (
            <div
              key={index}
              className="flex items-center px-8 sm:px-16"
            >
              <ShieldCheck className="text-primary mr-4 sm:mr-6 w-6 h-6 md:w-7 md:h-7 shrink-0" />
              <span className="text-white/80 font-heading tracking-wider uppercase text-sm md:text-base font-semibold">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
