"use client";

import Image from "next/image";
import Link from "next/link";
import { archivoLogo } from "@/app/fonts";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GORILLA = "GORILLA".split("");
const INK = "INK".split("");

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const gorillaRowRef = useRef<HTMLDivElement>(null);
  const imageScrollRef = useRef<HTMLDivElement>(null);
  const imageFloatRef = useRef<HTMLDivElement>(null);
  const inkRowRef = useRef<HTMLParagraphElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const bgPulseRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const gorillaChars = gsap.utils.toArray<HTMLElement>(root.querySelectorAll(".hero-gsap-char-gorilla"));
      const inkChars = gsap.utils.toArray<HTMLElement>(root.querySelectorAll(".hero-gsap-char-ink"));
      const copyEl = copyRef.current;
      const bgPulse = bgPulseRef.current;
      const imgScroll = imageScrollRef.current;
      const imgFloat = imageFloatRef.current;
      const gRow = gorillaRowRef.current;
      const iRow = inkRowRef.current;

      if (reduceMotion) {
        if (bgPulse) gsap.set(bgPulse, { opacity: 0.5 });
        gsap.set(gorillaChars, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "none",
        });
        gsap.set(inkChars, { opacity: 1, y: 0, scale: 1, rotateZ: 0 });
        if (imgFloat) gsap.set(imgFloat, { opacity: 1, scale: 1, rotateY: 0 });
        if (copyEl) gsap.set(copyEl, { opacity: 1, y: 0 });
        if (imgScroll) gsap.set(imgScroll, { clearProps: "transform" });
        if (gRow) gsap.set(gRow, { clearProps: "transform" });
        if (iRow) gsap.set(iRow, { clearProps: "transform" });
        return;
      }

      gsap.set(gorillaChars, {
        y: 140,
        opacity: 0,
        rotateX: -55,
        transformPerspective: 900,
        transformOrigin: "50% 100%",
      });
      gsap.set(inkChars, {
        y: 90,
        opacity: 0,
        scale: 0.4,
        rotateZ: -8,
      });
      gsap.set(imgFloat, {
        scale: 0.65,
        opacity: 0,
        rotateY: 18,
        transformPerspective: 1100,
      });
      gsap.set(copyEl, { y: 56, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(bgPulse, { opacity: 0.5, duration: 0.9, ease: "power2.inOut" }, 0)
        .to(
          gorillaChars,
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.05,
            stagger: { each: 0.07, from: "start" },
            ease: "elastic.out(1, 0.65)",
          },
          0.15,
        )
        .to(
          imgFloat,
          {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            duration: 1.15,
            ease: "power3.out",
          },
          0.35,
        )
        .to(
          inkChars,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateZ: 0,
            duration: 0.85,
            stagger: { each: 0.12, from: "center" },
            ease: "back.out(1.7)",
          },
          0.55,
        )
        .to(
          copyEl,
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out",
          },
          "-=0.35",
        );

      gsap.to(imgFloat, {
        y: -10,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(gorillaChars, {
        filter: "brightness(1.25)",
        duration: 1.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.06, from: "random" },
      });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      scrollTl
        .to(gRow, { y: 52 }, 0)
        .to(imgScroll, { y: -88, rotateY: -5 }, 0)
        .to(iRow, { y: 38 }, 0);
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
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_75%_60%_at_50%_38%,rgba(255,255,0,0.09)_0%,transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(ellipse_50%_45%_at_50%_50%,rgba(255,45,120,0.06)_0%,transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col pb-20 pt-4 md:pt-6">
        <h1 className="sr-only">Gorilla Ink Tattoo Studio</h1>

        <div
          ref={gorillaRowRef}
          className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 px-2 sm:px-4 will-change-transform"
          aria-hidden
        >
          <p
            className={`${archivoLogo.className} mx-auto flex w-full flex-wrap justify-center gap-0 text-center text-[clamp(2.75rem,20vw,13rem)] leading-[0.9] tracking-[0.06em]`}
          >
            {GORILLA.map((ch, i) => (
              <span
                key={`g-${i}`}
                className="hero-gsap-char-gorilla hero-word-gorilla inline-block text-[length:inherit] will-change-transform"
                style={{ marginInline: "0.01em" }}
              >
                {ch}
              </span>
            ))}
          </p>
        </div>

        <div className="mx-auto flex min-h-[min(48vh,520px)] w-full max-w-6xl flex-col items-center justify-center px-4 py-4 sm:px-6 md:px-8 lg:px-10">
          <div
            ref={imageScrollRef}
            className="relative h-[min(48vmin,360px)] w-[min(94vw,560px)] max-w-full will-change-transform [transform-style:preserve-3d]"
          >
            <div ref={imageFloatRef} className="relative h-full w-full [transform-style:preserve-3d]">
              <Image
                src="/hero-gorilla-ink-lockup.png"
                alt=""
                fill
                sizes="(max-width:768px) 94vw, 560px"
                className="object-contain object-center drop-shadow-[0_0_50px_rgb(var(--gorilla-yellow-rgb)_/_0.35),0_25px_60px_rgba(0,0,0,0.75)]"
                priority
              />
            </div>
          </div>

          <p
            ref={inkRowRef}
            className={`${archivoLogo.className} mt-5 flex justify-center gap-0 text-center text-[clamp(2.25rem,10vw,5rem)] leading-none tracking-[0.18em] will-change-transform md:mt-8`}
            aria-hidden
          >
            {INK.map((ch, i) => (
              <span
                key={`i-${i}`}
                className="hero-gsap-char-ink hero-word-ink inline-block"
                style={{ marginInline: "0.04em" }}
              >
                {ch}
              </span>
            ))}
          </p>
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
              className="inline-flex w-fit cursor-pointer items-center justify-center rounded-sm border border-white/15 bg-gorilla-blue px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_28px_rgba(0,0,255,0.35)] transition hover:scale-[1.02] hover:bg-[#2222ff] md:text-base"
            >
              Reserve time
            </Link>
            <Link
              href="/#artists"
              className="inline-flex w-fit cursor-pointer items-center justify-center rounded-sm border border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_24px_rgba(255,255,255,0.08)] backdrop-blur-sm transition hover:scale-[1.02] hover:border-gorilla-yellow/50 hover:text-gorilla-yellow md:text-base"
            >
              Meet the artists
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
