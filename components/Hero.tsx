"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { HeroMarquee } from "@/components/HeroMarquee";
import { RollingReserveButton } from "@/components/RollingReserveButton";
import { TopSectionNav } from "@/components/TopSectionNav";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const logo = logoRef.current;
      const copy = copyRef.current;

      if (reduceMotion) {
        if (logo) gsap.set(logo, { opacity: 1, y: 0 });
        if (copy) gsap.set(copy, { opacity: 1, y: 0 });
        return;
      }

      if (logo) gsap.set(logo, { opacity: 0, y: 24 });
      if (copy) gsap.set(copy, { opacity: 0, y: 32 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (logo) tl.to(logo, { opacity: 1, y: 0, duration: 0.95 }, 0);
      if (copy) tl.to(copy, { opacity: 1, y: 0, duration: 0.85 }, 0.18);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="home" className="relative isolate min-h-[min(100vh,1100px)] overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_50%_at_50%_28%,rgba(245,242,29,0.06)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_45%_40%_at_50%_42%,rgba(251,5,247,0.05)_0%,transparent_50%)]"
        aria-hidden
      />

      <TopSectionNav />

      <div className="relative z-10 flex flex-col pb-12 pt-6 md:pb-16 md:pt-10">
        <h1 className="sr-only">Gorilla Ink Tattoo Studio</h1>

        <div ref={logoRef} className="mx-auto flex flex-col items-center justify-center px-4">
          <Link
            href="/#home"
            className="relative block h-[min(28vw,200px)] w-[min(88vw,320px)] shrink-0 md:h-[220px] md:w-[360px]"
            aria-label="Gorilla Ink, home"
          >
            <Image
              src="/gorilla-ink-logo.svg"
              alt=""
              fill
              priority
              className="object-contain object-center drop-shadow-[0_0_40px_rgb(var(--gorilla-magenta-rgb)/0.25)]"
              sizes="(max-width:768px) 88vw, 360px"
            />
          </Link>
        </div>

        <div ref={copyRef} className="mx-auto mt-10 w-full max-w-2xl px-4 text-center sm:px-6 md:mt-12 md:px-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/75 md:text-xs [text-shadow:0_0_18px_rgba(255,255,255,0.15)]">
            Oakleigh · Melbourne
          </p>
          <p className="font-heading mt-4 text-[clamp(1.35rem,3.5vw,2.25rem)] tracking-[0.22em] text-white/90 [text-shadow:0_0_28px_rgba(255,255,255,0.12)]">
            TATTOO STUDIO
          </p>
          <p className="mt-8 text-base font-medium leading-relaxed tracking-[0.01em] text-[#d4d4d4] antialiased [text-shadow:0_1px_12px_rgba(0,0,0,0.9)] md:text-lg">
            Custom tattoos in Melbourne&apos;s south-east: black &amp; grey realism, Japanese sleeves, fine line, and
            cover-ups.
          </p>
          <p className="mt-5 text-base font-medium leading-relaxed tracking-[0.01em] text-[#b8b8b8] antialiased [text-shadow:0_1px_12px_rgba(0,0,0,0.85)] md:text-lg">
            Over twenty years of craft on the needle.{" "}
            <span className="font-semibold text-white">Ink your story</span> with artists who treat every piece as
            permanent — because it is.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <RollingReserveButton href="/#booking" />
            <Link
              href="/#artists"
              className="inline-flex w-fit cursor-pointer items-center justify-center rounded-sm border border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_24px_rgba(255,255,255,0.08)] backdrop-blur-sm transition hover:scale-[1.02] hover:border-gorilla-lime/60 hover:text-gorilla-lime md:text-base"
            >
              Meet the artists
            </Link>
          </div>
        </div>
      </div>
      <HeroMarquee />
    </section>
  );
}
