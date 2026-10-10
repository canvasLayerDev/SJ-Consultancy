"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "We admire your valuable contribution in NABH/NABL Accreditation, Business Promotion, Hospital Expansion, Hospital Management, Staff Training and TPA/Panel Supervision work.",
    author: "Dr. Ajay Sharma",
    role: "Medical Director",
    hospital: "AS Hospital (Delhi)"
  },
  {
    text: "SJ Consultancy team members guided us very well throughout our NABH preparation period. They are well conversant with their job.",
    author: "Mr. Ayansh",
    role: "Medical Director",
    hospital: "PGH hospital"
  },
  {
    text: "I am fully satisfied with their services. I wish for SJ Consultancy success in future endeavors.",
    author: "Hospital Management",
    role: "Administration",
    hospital: "St. Stephan Hospital"
  }
];

export function Testimonials() {
  return (
    <section className="py-10 md:py-20 bg-neutral-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4 block">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
            Trusted by Healthcare Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full relative"
            >
              <Quote className="text-primary/20 w-10 h-10 sm:w-12 sm:h-12 absolute top-6 right-6 rotate-12" />
              
              <p className="text-sm md:text-base leading-relaxed sm:leading-7 text-gray-600 mb-6 sm:mb-8 relative z-10 flex-grow italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="mt-auto relative z-10 pt-4 sm:pt-6 border-t border-slate-100">
                <p className="font-bold text-slate-900 font-heading text-sm sm:text-base">{testimonial.author}</p>
                <p className="text-xs sm:text-sm text-slate-500 mb-1">{testimonial.role}</p>
                <p className="text-xs sm:text-sm text-primary font-semibold">{testimonial.hospital}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
