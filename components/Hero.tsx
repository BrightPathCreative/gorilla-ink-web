"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroMarquee } from "@/components/HeroMarquee";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const wordmarkRowRef = useRef<HTMLDivElement>(null);
  const logoLeftRef = useRef<HTMLDivElement>(null);
  const logoRightRef = useRef<HTMLDivElement>(null);
  const imageScrollRef = useRef<HTMLDivElement>(null);
  const imageFloatRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const bgPulseRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const copyEl = copyRef.current;
      const bgPulse = bgPulseRef.current;
      const imgScroll = imageScrollRef.current;
      const imgFloat = imageFloatRef.current;
      const wRow = wordmarkRowRef.current;
      const left = logoLeftRef.current;
      const right = logoRightRef.current;

      if (reduceMotion) {
        if (bgPulse) gsap.set(bgPulse, { opacity: 0.5 });
        if (left) gsap.set(left, { opacity: 1, x: 0, rotateY: 0, filter: "none" });
        if (right) gsap.set(right, { opacity: 1, x: 0, rotateY: 0, filter: "none" });
        if (imgFloat) gsap.set(imgFloat, { opacity: 1, scale: 1, rotateY: 0 });
        if (copyEl) gsap.set(copyEl, { opacity: 1, y: 0 });
        if (imgScroll) gsap.set(imgScroll, { clearProps: "transform" });
        if (wRow) gsap.set(wRow, { clearProps: "transform" });
        return;
      }

      if (left && right) {
        gsap.set(left, { x: -140, opacity: 0, rotateY: 42, transformPerspective: 900 });
        gsap.set(right, { x: 140, opacity: 0, rotateY: -42, transformPerspective: 900 });
      }
      gsap.set(imgFloat, {
        scale: 0.65,
        opacity: 0,
        rotateY: 18,
        transformPerspective: 1100,
      });
      gsap.set(copyEl, { y: 56, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(bgPulse, { opacity: 0.5, duration: 0.9, ease: "power2.inOut" }, 0);

      if (left && right) {
        tl.to(
          [left, right],
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1.15,
            stagger: { each: 0.1, from: "center" },
            ease: "power3.out",
          },
          0.12,
        );
      }

      tl.to(
        imgFloat,
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          duration: 1.15,
          ease: "power3.out",
        },
        0.32,
      ).to(
        copyEl,
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          ease: "power3.out",
        },
        "-=0.4",
      );

      if (left && right) {
        gsap.to([left, right], {
          filter: "brightness(1.12)",
          duration: 2.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: { each: 0.15, from: "random" },
        });
      }

      gsap.to(imgFloat, {
        y: -10,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      scrollTl.to(wRow, { y: 48 }, 0).to(imgScroll, { y: -88, rotateY: -5 }, 0);
      if (left && right) {
        scrollTl.to(left, { x: -28 }, 0).to(right, { x: 28 }, 0);
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative isolate min-h-[min(100vh,1200px)] overflow-hidden bg-black [perspective:1400px]"
    >
      <div ref={bgPulseRef} className="pointer-events-none absolute inset-0 z-0 opacity-0" aria-hidden>
        <Image
          src="/GorillaInk.png"
          alt=""
          fill
          priority
          className="object-cover object-center [transform:scaleX(-1)]"
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/75 via-black/65 to-black"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_75%_60%_at_50%_38%,rgba(245,242,29,0.1)_0%,transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(ellipse_50%_45%_at_50%_50%,rgba(251,5,247,0.07)_0%,transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col pb-20 pt-4 md:pt-6">
        <h1 className="sr-only">Gorilla Ink Tattoo Studio</h1>

        <div
          ref={wordmarkRowRef}
          className="relative left-1/2 flex w-screen max-w-[100vw] -translate-x-1/2 justify-center px-2 sm:px-4 will-change-transform"
          aria-hidden
        >
          <div className="flex w-full max-w-[min(96vw,1200px)] items-end justify-center gap-0">
            <div
              ref={logoLeftRef}
              className="hero-mix-blend relative h-[min(22vw,200px)] w-1/2 max-w-[600px] overflow-hidden [transform-style:preserve-3d]"
            >
              <div className="relative h-full w-[200%]">
                <Image
                  src="/gorilla-wordmark-hero.svg"
                  alt=""
                  fill
                  unoptimized
                  className="object-contain object-left object-bottom drop-shadow-[0_0_28px_rgb(var(--gorilla-yellow-rgb)/0.35)]"
                  sizes="(max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
            <div
              ref={logoRightRef}
              className="hero-mix-blend relative h-[min(22vw,200px)] w-1/2 max-w-[600px] overflow-hidden [transform-style:preserve-3d]"
            >
              <div className="relative h-full w-[200%] -translate-x-1/2">
                <Image
                  src="/gorilla-wordmark-hero.svg"
                  alt=""
                  fill
                  unoptimized
                  className="object-contain object-right object-bottom drop-shadow-[0_0_28px_rgb(var(--gorilla-magenta-rgb)/0.35)]"
                  sizes="(max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex min-h-[min(44vh,480px)] w-full max-w-6xl flex-col items-center justify-center px-4 py-6 sm:px-6 md:px-8 lg:px-10">
          <div
            ref={imageScrollRef}
            className="relative h-[min(48vmin,360px)] w-[min(94vw,560px)] max-w-full will-change-transform [transform-style:preserve-3d]"
          >
            <div ref={imageFloatRef} className="relative h-full w-full [transform-style:preserve-3d]">
              <Image
                src="/gorilla-hero-lockup.svg"
                alt=""
                fill
                unoptimized
                sizes="(max-width:768px) 94vw, 560px"
                className="object-contain object-center drop-shadow-[0_0_50px_rgb(var(--gorilla-yellow-rgb)_/_0.35),0_25px_60px_rgba(0,0,0,0.75)]"
                priority
              />
            </div>
          </div>
        </div>

        <div ref={copyRef} className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6 md:px-8">
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
            <Link
              href="/#booking"
              className="inline-flex w-fit cursor-pointer items-center justify-center rounded-sm border border-white/15 bg-gorilla-magenta px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_28px_rgba(251,5,247,0.45)] transition hover:scale-[1.02] hover:bg-[#ff3afc] md:text-base"
            >
              Reserve time
            </Link>
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
