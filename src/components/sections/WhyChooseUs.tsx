"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Already doing project - Flores Hospital 100 bedded",
  "20 Hospitals NABH/NABL Completed",
  "Hospital Planning & Development",
  "Fastest NABH Compliance with minimum NCs",
  "Team of Doctors and Professionals",
  "Author of 'NABH Accreditation Made Easy'"
];

export function WhyChooseUs() {
  return (
    <section className="py-10 md:py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4 block">Why SJ Consultancy</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 leading-tight mb-6 sm:mb-8">
              Built on <span className="text-primary">Trust</span> & <span className="text-accent">Expertise</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              {FEATURES.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="mt-0.5 bg-primary/10 rounded-full p-1 shrink-0">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <p className="text-sm md:text-base leading-relaxed sm:leading-7 text-gray-600 font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-slate-900 rounded-2xl sm:rounded-[3rem] p-6 sm:p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
              {/* Decorative shapes */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-50 pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-50 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-semibold leading-snug mb-4 sm:mb-6">The Tier-2 Opportunity</h3>
                <p className="text-sm md:text-base leading-relaxed sm:leading-7 text-slate-300 mb-6 sm:mb-8">
                 As India&apos;s Tier-2 hospital boom accelerates, the hospitals that will thrive are the ones built right the first time  compliant, efficient, and human-centred.
                </p>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <p className="text-sm md:text-base leading-relaxed sm:leading-7 text-white font-medium italic border-l-4 border-accent pl-3 sm:pl-4">
                    &ldquo;SJ Consultancy brings together psychology, green architecture, and NABH expertise to help redefine what Indian healthcare looks like, city by city.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
