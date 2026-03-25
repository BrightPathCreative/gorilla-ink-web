"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const COLORS = [
  { bg: "#80f20f", fg: "#0a0a0a", shadow: "0 0 28px rgba(128,242,15,0.55)" },
  { bg: "#fb05f7", fg: "#ffffff", shadow: "0 0 28px rgba(251,5,247,0.5)" },
  { bg: "#f5f21d", fg: "#0a0a0a", shadow: "0 0 28px rgba(245,242,29,0.5)" },
];

type Props = {
  href: string;
  className?: string;
  children?: React.ReactNode;
};

export function RollingReserveButton({ href, className = "", children = "Reserve time" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { duration: 1.05, ease: "power2.inOut" },
    });
    COLORS.forEach((c) => {
      tl.to(el, {
        backgroundColor: c.bg,
        color: c.fg,
        boxShadow: c.shadow,
      });
    });

    return () => {
      tl.kill();
      gsap.set(el, { clearProps: "backgroundColor,color,boxShadow" });
    };
  }, []);

  return (
    <Link
      ref={ref}
      href={href}
      className={`inline-flex w-fit cursor-pointer items-center justify-center rounded-sm border border-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition hover:scale-[1.02] md:text-base ${className}`}
      style={{
        backgroundColor: COLORS[0].bg,
        color: COLORS[0].fg,
        boxShadow: COLORS[0].shadow,
      }}
    >
      {children}
    </Link>
  );
}
