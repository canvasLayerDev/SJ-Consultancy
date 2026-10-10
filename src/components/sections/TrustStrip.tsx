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
    <section className="bg-slate-900 py-3.5 sm:py-5 overflow-hidden border-y border-slate-800">
      <div className="flex w-max">
        {/* Render twice for seamless loop */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, index) => (
            <div
              key={index}
              className="flex items-center px-4 sm:px-8 md:px-16"
            >
              <ShieldCheck className="text-primary mr-2.5 sm:mr-4 md:mr-6 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 shrink-0" />
              <span className="text-white/80 font-heading tracking-wider uppercase text-xs sm:text-sm md:text-base font-semibold">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
