"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const OurTeam = () => {
  const founderImage =
    process.env.NEXT_PUBLIC_FOUNDER_IMAGE_URL ||
    "https://cdn.canvaslayer.com/IMG-20260314-WA0005~2.jpg";

  return (
    <section className="py-10 md:py-20 bg-neutral-light">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-3 md:mb-4 block">
            Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 leading-tight mb-4 md:mb-6">
            Meet Our Leadership
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-2xl mx-auto">
            Guided by experienced medical leadership understanding the intricate balance of healthcare management, compliance, and patient care.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm text-center border border-slate-100 hover:shadow-md transition-shadow"
          >
            <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full mb-6 overflow-hidden ring-4 ring-primary/20 shadow-md relative bg-slate-100">
              <Image 
                src={founderImage}
                alt="Dr. Jatin Raj - Founder & Director"
                fill
                sizes="(max-width: 640px) 128px, 144px"
                className="object-cover object-top"
                priority
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-1 sm:mb-2">Dr. Jatin Raj</h3>
            <p className="text-primary font-semibold text-sm sm:text-base mb-2">Founder & Director</p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">BHMS, MBA (Hospital & Healthcare)</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
