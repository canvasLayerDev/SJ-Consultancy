"use client";

import { motion } from "framer-motion";

export const OurTeam = () => {
  return (
    <section className="py-10 md:py-20 bg-neutral-light">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Leadership</span>
          <h2 className="text-xl md:text-3xl font-heading font-bold text-slate-900 leading-tight mb-6">
            Meet Our Experts
          </h2>
          <p className="text-sm md:text-base leading-7 text-gray-600">
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
              <h3 className="text-lg md:text-xl font-semibold leading-snug text-slate-900 mb-2">{leader.name}</h3>
              <p className="text-primary font-semibold mb-2">{leader.role}</p>
              <p className="text-sm md:text-base leading-7 text-gray-600">{leader.credentials}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
