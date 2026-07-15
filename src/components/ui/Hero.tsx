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
}

export function Hero({
  backgroundImage,
  backgroundOverlay = "bg-white/90",
  backgroundGradient,
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
}: HeroProps) {
  const heightClasses = {
    auto: "py-16 md:py-24",
    screen: "min-h-screen",
    large: "min-h-[80vh]",
    medium: "min-h-[60vh]",
  };

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
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
        "relative flex items-center overflow-hidden",
        heightClasses[heroHeight],
        backgroundImage ? "bg-cover bg-center" : "bg-neutral-light"
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Overlays */}
      {backgroundImage && <div className={cn("absolute inset-0 z-0", backgroundOverlay)} />}
      {backgroundGradient && <div className={cn("absolute inset-0 z-0", backgroundGradient)} />}

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
        <div className={cn(
          "flex flex-col md:flex-row gap-12",
          heroAlignment === "center" ? "justify-center" : "justify-between"
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
              <nav className="mb-6 flex gap-2 text-sm text-slate-500 font-medium">
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
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                {smallLabel}
              </motion.div>
            )}

            {/* Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900 mb-6">
              {renderHeading()}
            </h1>

            {/* Description */}
            {description && (
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
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

          {/* Right Side Illustration/Image */}
          {heroIllustration && heroAlignment !== "center" && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex-1 hidden lg:flex justify-end items-center"
            >
              <div className="relative w-full max-w-lg aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50 bg-slate-100">
                <img 
                  src={heroIllustration} 
                  alt="Hero illustration" 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating elements matching the prompt's aesthetic request */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4"
                >
                  <div className="bg-accent/20 p-3 rounded-full text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">NABH Accredited</p>
                    <p className="text-xs text-slate-500">100% Compliance</p>
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
