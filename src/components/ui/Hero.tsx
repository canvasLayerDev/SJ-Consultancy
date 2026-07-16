"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export interface HeroProps {
  backgroundImage?: string;
  backgroundOverlay?: string; // e.g. "bg-black/40"
  backgroundGradient?: string; // e.g. "bg-gradient-to-r from-primary/90 to-transparent"
  smallLabel?: string;
  mainHeading: string | React.ReactNode;
  highlightedWords?: string[];
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  breadcrumb?: { label: string; href: string }[];
  heroIllustration?: string;
  heroHeight?: "auto" | "screen" | "large" | "medium";
  heroAlignment?: "left" | "center" | "right";
  imagePosition?: "left" | "right";
}

export function Hero({
  backgroundImage = "",
  backgroundOverlay = "bg-white/75",
  backgroundGradient = "bg-gradient-to-br from-[#eaf6f4] via-[#f1f7f9] to-[#f4f7ff]",
  smallLabel,
  mainHeading,
  highlightedWords = [],
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  breadcrumb,
  heroIllustration,
  heroHeight = "large",
  heroAlignment = "left",
  imagePosition = "right",
}: HeroProps) {


  const alignmentClasses = {
    left: "text-center items-center md:text-left md:items-start",
    center: "text-center items-center",
    right: "text-center items-center md:text-right md:items-end",
  };

  const renderHeading = () => {
    if (typeof mainHeading !== "string") return mainHeading;

    let processedHeading = mainHeading;
    // Replace highlighted words with styled spans
    // For a real CMS this might be more robust, but this works for predefined words
    highlightedWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      processedHeading = processedHeading.replace(regex, '___HIGHLIGHT___$1___ENDHIGHLIGHT___');
    });

    const parts = processedHeading.split('___HIGHLIGHT___');
    return (
      <>
        {parts.map((part, i) => {
          if (part.includes('___ENDHIGHLIGHT___')) {
            const [highlighted, rest] = part.split('___ENDHIGHLIGHT___');
            return (
              <React.Fragment key={i}>
                <span className="text-primary">{highlighted}</span>
                {rest}
              </React.Fragment>
            );
          }
          return <React.Fragment key={i}>{part}</React.Fragment>;
        })}
      </>
    );
  };

  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden min-h-[50vh] lg:min-h-[85vh] py-10 md:py-20 w-full",
        backgroundGradient
      )}
    >
      {/* Background image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Overlay */}
      {backgroundImage && backgroundOverlay && (
        <div className={cn("absolute inset-0 z-0", backgroundOverlay)} />
      )}

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-16 md:bg-white/20 bg-white/20 backdrop-blur-md border border-white/60  rounded-3xl mt-8 md:mt-0">
        <div className={cn(
          "flex flex-col gap-12 lg:gap-20",
          imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row",
          heroAlignment === "center" ? "justify-center" : "justify-between items-center"
        )}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
              "flex flex-col justify-center max-w-3xl",
              alignmentClasses[heroAlignment],
              heroAlignment === "center" ? "mx-auto" : ""
            )}
          >
            {/* Breadcrumb */}
            {breadcrumb && breadcrumb.length > 0 && (
              <nav className="mb-6 flex gap-2 text-xs md:text-sm text-slate-500 font-medium">
                {breadcrumb.map((item, index) => (
                  <React.Fragment key={index}>
                    <a href={item.href} className="hover:text-primary transition-colors">{item.label}</a>
                    {index < breadcrumb.length - 1 && <span>/</span>}
                  </React.Fragment>
                ))}
              </nav>
            )}

            {/* Small Label */}
            {smallLabel && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
              >
                <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                {smallLabel}
              </motion.div>
            )}

            {/* Main Heading */}
            <h1 className="font-heading text-2xl md:text-4xl font-bold leading-tight tracking-tight text-slate-900 mb-4 lg:mb-6">
              {renderHeading()}
            </h1>

            {/* Description */}
            {description && (
              <p className="text-sm md:text-base leading-7 text-gray-600 mb-8 lg:mb-10 font-medium max-w-2xl">
                {description}
              </p>
            )}

            {/* Buttons */}
            {(primaryButtonText || secondaryButtonText) && (
              <div className="flex flex-wrap gap-4 mt-2">
                {primaryButtonText && (
                  <Button href={primaryButtonLink} size="lg" hoverEffect="glow">
                    {primaryButtonText}
                  </Button>
                )}
                {secondaryButtonText && (
                  <Button href={secondaryButtonLink} variant="outline" size="lg">
                    {secondaryButtonText}
                  </Button>
                )}
              </div>
            )}
          </motion.div>

          {/* Right/Left Side Illustration/Image */}
          {heroIllustration && heroAlignment !== "center" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={cn(
                "flex-1 flex items-end relative mt-12 lg:mt-0",
                imagePosition === "left" ? "lg:justify-start" : "lg:justify-end",
                "justify-center"
              )}
            >
              <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-lg aspect-square flex items-center justify-center mx-auto lg:mx-0">
                {/* Centered blue circle behind head */}
                <div className="absolute top-4 lg:top-10 left-[55%] lg:left-[60%] -translate-x-1/2 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary rounded-full z-0 shadow-2xl shadow-primary/40" />

                {/* Small decorative circle */}
                <div className="absolute top-0 right-0 lg:right-10 w-12 h-12 lg:w-16 lg:h-16 bg-accent/20 rounded-full z-0 blur-xl" />

                <img
                  src={heroIllustration}
                  alt="Hero illustration"
                  className="relative z-10 w-full h-full scale-[1.7] lg:scale-[2.35] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                />

                {/* Floating elements matching the prompt's aesthetic request */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className={cn(
                    "absolute -bottom-4 lg:bottom-10 bg-white/95 backdrop-blur p-3 lg:p-5 rounded-2xl shadow-xl flex items-center gap-3 lg:gap-4 z-20 scale-90 lg:scale-100",
                    imagePosition === "left" ? "lg:-right-10" : "lg:-left-10",
                    "right-0 lg:right-auto"
                  )}
                >
                  <div className="bg-accent/20 p-2 lg:p-3 rounded-full text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 lg:w-6 lg:h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm font-bold text-slate-900">NABH Accredited</p>
                    <p className="text-[10px] lg:text-xs text-slate-500">100% Compliance</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

        </div>
      </div>

      {/* Scroll indicator for screen height heroes */}
      {heroHeight === "screen" && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <div className="w-px h-8 bg-slate-300 rounded-full overflow-hidden">
            <motion.div
              animate={{ y: [-32, 32] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-full h-full bg-primary"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
