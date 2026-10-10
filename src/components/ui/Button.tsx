"use client";

import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { motion, type HTMLMotionProps } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg",
        secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "hover:bg-primary/10 text-primary",
      },
      size: {
        sm: "h-9 px-4 py-2",
        md: "h-11 px-6 py-2",
        lg: "h-14 px-8 py-3 text-base",
        icon: "h-10 w-10",
      },
      rounded: {
        none: "rounded-none",
        md: "rounded-md",
        full: "rounded-full",
      },
      hoverEffect: {
        none: "",
        lift: "hover:-translate-y-1",
        glow: "hover:shadow-[0_0_15px_rgba(8,106,104,0.5)]",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "full",
      hoverEffect: "lift",
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref">,
  VariantProps<typeof buttonVariants> {
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      hoverEffect,
      href,
      icon,
      iconPosition = "left",
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const content = (
      <>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {!isLoading && icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </>
    );

    const commonClasses = cn(
      buttonVariants({ variant, size, rounded, hoverEffect, className })
    );

    if (href) {
      return (
        <Link href={href} className={commonClasses}>
          {content}
        </Link>
      );
    }

    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        className={commonClasses}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
