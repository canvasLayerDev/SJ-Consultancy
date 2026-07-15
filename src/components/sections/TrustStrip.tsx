"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="bg-slate-900 py-6 overflow-hidden border-y border-slate-800">
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
              <span className="text-primary mr-8 text-xl font-bold">•</span>
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
