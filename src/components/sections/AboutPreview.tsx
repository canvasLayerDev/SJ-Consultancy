"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function AboutPreview() {
  return (
    <section className="py-10 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" 
                alt="Modern Hospital Architecture" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]"
            >
              <div className="text-4xl font-heading font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-slate-600 font-medium">Doctors trust us for their hospitals</div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              The Silent Crisis
            </span>
            <h2 className="text-xl md:text-3xl font-heading font-bold text-slate-900 leading-tight mb-6">
              Not Just Bricks and Beds.
            </h2>
            <p className="text-sm md:text-base leading-7 text-gray-600 mb-6">
              Walk into most hospitals in India today, and you'll notice the same story repeating itself: confused patients wandering corridors, overworked doctors navigating spaces that were never designed with them in mind and administrators struggling to meet accreditation standards.
            </p>
            <p className="text-sm md:text-base leading-7 text-gray-600 mb-8">
              We believe hospitals shouldn't just be built  they should be<span className="text-primary font-semibold italic">designed to behave well</span>. 
            </p>
            <Button href="/about" size="lg" icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            } iconPosition="right">
              Learn More About Us
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
