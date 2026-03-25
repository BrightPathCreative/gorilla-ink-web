"use client";

/**
 * Scroll-in reveals powered by GSAP + ScrollTrigger (see {@link GsapScrollReveal}).
 * Kept as drop-in replacements for existing page imports.
 */
import {
  GsapScrollReveal,
  GsapScrollRevealSection,
} from "@/components/GsapScrollReveal";
import type { ReactNode } from "react";

export function AnimatedSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <GsapScrollRevealSection id={id} className={className}>
      {children}
    </GsapScrollRevealSection>
  );
}

export function AnimatedDiv({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <GsapScrollReveal className={className}>{children}</GsapScrollReveal>;
}
