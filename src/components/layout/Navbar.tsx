"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Activity } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-primary overflow-hidden shrink-0">
            <span className="text-primary font-bold text-base sm:text-lg z-10 group-hover:scale-110 transition-transform">SJ</span>
            <Activity className="absolute bottom-0 text-accent opacity-30 w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base sm:text-lg leading-none text-secondary tracking-tight">SJ CONSULTANCY</span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Quality • Accreditation</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-primary relative group",
                pathname === link.href ? "text-primary" : "text-slate-600"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
          <Button href="/contact" size="sm" variant="primary">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-700 hover:text-primary focus:outline-none rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col px-6 py-5 gap-3 max-h-[calc(100vh-80px)] overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-semibold py-2.5 border-b border-slate-50 transition-colors",
                    pathname === link.href ? "text-primary font-bold" : "text-slate-700"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button href="/contact" className="mt-2 w-full" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
