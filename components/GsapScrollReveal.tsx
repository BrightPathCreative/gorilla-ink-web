"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  useLayoutEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Initial vertical offset in px (smaller on narrow viewports) */
  y?: number;
  /** ScrollTrigger start string */
  start?: string;
  duration?: number;
};

function useReveal<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  opts: { y: number; start: string; duration: number },
) {
  const { y: yOpt, start, duration } = opts;
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      gsap.set(el, { opacity: 1, y: 0, clearProps: "transform,opacity" });
      return;
    }

    const narrow = window.matchMedia("(max-width: 640px)").matches;
    const y = narrow ? Math.min(yOpt, 24) : yOpt;

    gsap.set(el, { opacity: 0, y });

    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [ref, yOpt, start, duration]);
}

export function GsapScrollReveal({
  children,
  className,
  y = 40,
  start = "top 88%",
  duration = 0.72,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, { y, start, duration });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function GsapScrollRevealSection({
  children,
  className,
  id,
  y = 40,
  start = "top 88%",
  duration = 0.72,
}: RevealProps & Pick<HTMLAttributes<HTMLElement>, "id">) {
  const ref = useRef<HTMLElement | null>(null);
  useReveal(ref, { y, start, duration });
  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}
