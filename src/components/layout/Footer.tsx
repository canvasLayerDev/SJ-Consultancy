import React from "react";
import Link from "next/link";
import { Activity, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t-4 border-primary relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary bg-white overflow-hidden">
                <span className="text-primary font-bold text-xl z-10">SJ</span>
                <Activity className="absolute bottom-0 text-accent opacity-30 w-10 h-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none text-white tracking-tight">SJ CONSULTANCY</span>
                <span className="text-xs text-primary uppercase font-semibold tracking-wider">Quality • Accreditation</span>
              </div>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              We don&apos;t just consult we walk with you. Empowering healthcare facilities with behavioral-based planning, NABH & NABL accreditation, and quality management.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Process", href: "/process" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="text-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                "NABH Accreditation",
                "NABL Accreditation",
                "Hospital Planning",
                "Documentation & SOPs",
                "Staff Training",
                "Mock Audits"
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="text-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Corporate Office - 133, Nirankari colony Delhi- 9</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919355237556" className="hover:text-white transition-colors">+91-9355237556</a>
                  <a href="tel:+917983394462" className="hover:text-white transition-colors">+91-7983394462</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:Rajdrjatin@gmail.com" className="hover:text-white transition-colors">Rajdrjatin@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left text-sm">
  © {currentYear} SJ Consultancy. All rights reserved. | Developed by{" "}
  <a
    href="https://adgrowtech.com"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium hover:underline"
  >
    Ad Growtech Pvt. Ltd.
  </a>
</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
