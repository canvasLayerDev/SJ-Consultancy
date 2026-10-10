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
        backgroundOverlay=""
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-12"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-3 sm:mb-4">Get in Touch</h2>
                <p className="text-sm md:text-base leading-relaxed sm:leading-7 text-gray-600">
                  Have questions about our services or ready to start your accreditation journey? Reach out to our team of experts.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-snug text-slate-900 mb-1 sm:mb-2">Corporate Office</h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-600">133, Nirankari colony<br />Delhi- 9</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-snug text-slate-900 mb-1 sm:mb-2">Call Us</h3>
                    <div className="flex flex-col text-sm md:text-base leading-relaxed text-gray-600">
                      <span className="font-medium text-slate-800 mb-1">Dr. Jatin Raj (Founder & Director)</span>
                      <a href="tel:+919355237556" className="hover:text-primary transition-colors py-0.5">+91 93552 37556</a>
                      <a href="tel:+917983394462" className="hover:text-primary transition-colors py-0.5">+91 79833 94462</a>
                      <a href="tel:+916289993423" className="hover:text-primary transition-colors py-0.5">+91 62899 93423</a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-snug text-slate-900 mb-1 sm:mb-2">Email Us</h3>
                    <a href="mailto:Rajdrjatin@gmail.com" className="text-sm md:text-base leading-relaxed text-gray-600 hover:text-primary transition-colors break-all">Rajdrjatin@gmail.com</a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-snug text-slate-900 mb-1 sm:mb-2">Business Hours</h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-light p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2rem] shadow-sm border border-slate-100"
            >
              <h3 className="text-xl sm:text-2xl font-semibold leading-snug text-slate-900 mb-6 sm:mb-8">Send us a message</h3>
              <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="firstName" className="text-xs sm:text-sm font-semibold text-slate-700">First Name</label>
                    <input type="text" id="firstName" className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm" placeholder="John" />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="lastName" className="text-xs sm:text-sm font-semibold text-slate-700">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-slate-700">Email Address</label>
                  <input type="email" id="email" className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm" placeholder="john@hospital.com" />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="hospital" className="text-xs sm:text-sm font-semibold text-slate-700">Hospital/Organization Name</label>
                  <input type="text" id="hospital" className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm" placeholder="City General Hospital" />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-slate-700">How can we help?</label>
                  <textarea id="message" rows={4} className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-sm" placeholder="Tell us about your accreditation needs..."></textarea>
                </div>

                <Button className="w-full justify-center" size="lg" hoverEffect="glow">
                  Send Message
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[300px] sm:h-[400px] w-full bg-slate-200 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
