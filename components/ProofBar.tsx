"use client";

import Link from "next/link";
import { BadgeCheck, Calendar, PenLine, Star, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const googleMapsSearchUrl =
  "https://www.google.com/maps/search/Gorilla+Ink+Tattoo+Studio+Oakleigh+reviews";

const stat = "flex min-w-0 shrink-0 items-center gap-2 md:gap-2.5";

export function ProofBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const row = rowRef.current;
    if (!section || !row) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        row,
        { y: 0 },
        {
          y: -8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-b border-white/10 bg-black px-6 py-2.5 md:px-12 md:py-3 lg:px-16"
      aria-label="Studio credentials"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 md:flex-row md:items-center md:justify-between md:gap-x-4 lg:gap-x-5">
        <div className="flex w-full shrink-0 justify-center md:w-auto md:justify-start">
          {/* eslint-disable-next-line @next/next/no-img-element -- crisp SVG wordmark */}
          <img
            src="/gorilla-ink-wordmark.svg"
            alt=""
            className="h-6 w-auto max-w-[min(240px,88vw)] object-contain object-center opacity-95 md:h-7"
          />
        </div>
        <div
          ref={rowRef}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-end md:gap-x-4 lg:gap-x-5"
        >
        <Link
          href={googleMapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${stat} rounded-md transition hover:bg-black/10`}
        >
          <Star className="h-5 w-5 shrink-0 fill-white text-white md:h-5 md:w-5" aria-hidden />
          <div className="min-w-0 leading-none">
            <p className="font-heading text-lg tracking-tight text-gorilla-magenta md:text-xl">4.9</p>
            <p className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white/90">
              Google · 63 reviews
            </p>
          </div>
        </Link>

        <div className={stat}>
          <BadgeCheck className="h-5 w-5 shrink-0 text-gorilla-yellow" strokeWidth={2.25} aria-hidden />
          <div className="min-w-0 leading-none">
            <p className="font-heading text-lg tracking-tight text-gorilla-yellow md:text-xl">100%</p>
            <p className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white/90">
              Customer satisfaction
            </p>
          </div>
        </div>

        <div className={stat}>
          <Calendar className="h-5 w-5 shrink-0 text-white" strokeWidth={2.25} aria-hidden />
          <div className="min-w-0 leading-none">
            <p className="font-heading text-lg tracking-tight text-gorilla-lime md:text-xl">20+</p>
            <p className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white/90">
              Years · Melbourne
            </p>
          </div>
        </div>

        <div className={stat}>
          <PenLine className="h-5 w-5 shrink-0 text-white" strokeWidth={2.25} aria-hidden />
          <div className="min-w-0 leading-none">
            <p className="font-heading text-lg tracking-tight text-gorilla-magenta md:text-xl">5000+</p>
            <p className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white/90">
              Tattoos designed
            </p>
          </div>
        </div>

        <div className={stat}>
          <Users className="h-5 w-5 shrink-0 text-white" strokeWidth={2.25} aria-hidden />
          <div className="min-w-0 leading-none">
            <p className="font-heading text-lg tracking-tight text-gorilla-yellow md:text-xl">3</p>
            <p className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white/90">
              Artists
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
