"use client";

import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Hero
        backgroundImage="https://drarvindersingh.com/wp-content/uploads/2024/07/Importance-Of-a-Consultant-in-The-Hospital-Segment.jpg"
        smallLabel="Contact Us"
        mainHeading="Let's build something better."
        highlightedWords={["better."]}
        description="Whether you need full NABH accreditation, hospital planning, or staff training, we're here to guide you every step of the way."
        heroHeight="medium"
        heroAlignment="center"
        backgroundGradient="bg-gradient-to-r from-blue-50 to-slate-100"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />

      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-xl md:text-3xl font-heading font-bold text-slate-900 mb-4">Get in Touch</h2>
                <p className="text-sm md:text-base leading-7 text-gray-600">
                  Have questions about our services or ready to start your accreditation journey? Reach out to our team of experts.
                </p>
              </div>

              <div className="space-y-8">
                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold leading-snug text-slate-900 mb-2">Corporate Office</h3>
                    <p className="text-sm md:text-base leading-7 text-gray-600">133, Nirankari colony<br />Delhi- 9</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold leading-snug text-slate-900 mb-2">Call Us</h3>
                    <div className="flex flex-col text-sm md:text-base leading-7 text-gray-600">
                      <span>Dr. Jatin Raj / Dr. Shahrukh Khan</span>
                      <a href="tel:+919355237556" className="hover:text-primary transition-colors">+91 93552 37556</a>
                      <a href="tel:+917983394462" className="hover:text-primary transition-colors">+91 79833 94462</a>
                      <a href="tel:+916289993423" className="hover:text-primary transition-colors">+91 62899 93423</a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold leading-snug text-slate-900 mb-2">Email Us</h3>
                    <a href="mailto:Rajdrjatin@gmail.com" className="text-sm md:text-base leading-7 text-gray-600 hover:text-primary transition-colors">Rajdrjatin@gmail.com</a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold leading-snug text-slate-900 mb-2">Business Hours</h3>
                    <p className="text-sm md:text-base leading-7 text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-light p-10 md:p-12 rounded-[2rem] shadow-sm border border-slate-100"
            >
              <h3 className="text-lg md:text-xl font-semibold leading-snug text-slate-900 mb-8">Send us a message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@hospital.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="hospital" className="text-sm font-semibold text-slate-700">Hospital/Organization Name</label>
                  <input type="text" id="hospital" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="City General Hospital" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">How can we help?</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about your accreditation needs..."></textarea>
                </div>

                <Button className="w-full" size="lg" hoverEffect="glow">
                  Send Message
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map (Placeholder for a real iframe map) */}
      <section className="h-[400px] w-full bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          <p className="flex items-center gap-2"><MapPin /> Interactive Map Here</p>
        </div>
      </section>
    </>
  );
}
