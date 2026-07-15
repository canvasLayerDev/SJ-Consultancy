"use client";

import { motion } from "framer-motion";

const IMAGES = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
];

export function HospitalShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Project Showcase</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight mb-6">
            Designing the Future of Indian Healthcare
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`relative rounded-3xl overflow-hidden shadow-lg group ${index === 0 || index === 3 ? "md:aspect-[4/3]" : "md:aspect-square"}`}
            >
              <img 
                src={img} 
                alt={`Hospital project ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
