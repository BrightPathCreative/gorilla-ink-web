"use client";

import { useCallback, useEffect, useState } from "react";
import { Star } from "lucide-react";
import { SectionDripBar } from "@/components/SectionDripBar";
import { testimonials } from "@/data/testimonials";

const INTERVAL_MS = 5000;

export function TestimonialSection() {
  const [active, setActive] = useState(0);
  const n = testimonials.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % n);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [n]);

  const go = useCallback((i: number) => {
    setActive(((i % n) + n) % n);
  }, [n]);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-b border-black/10 bg-gorilla-yellow px-4 pb-16 pt-0 text-zinc-950 md:px-6 md:pb-20 lg:pb-24"
      aria-labelledby="testimonial-heading"
    >
      <SectionDripBar gradientTo="to-gorilla-yellow" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-800/80">What clients say</p>
          <h2
            id="testimonial-heading"
            className="font-heading mt-3 text-4xl tracking-[0.04em] text-zinc-950 md:text-5xl md:tracking-[0.06em]"
          >
            Reviews
          </h2>
        </div>

        <div className="relative mt-12 min-h-[320px] overflow-hidden rounded-xl border border-zinc-900/10 bg-zinc-950/5 shadow-[0_24px_60px_rgba(0,0,0,0.12)] md:min-h-[280px]">
          <div
            key={t.id}
            className="testimonial-slide grid gap-8 p-6 md:grid-cols-[minmax(0,200px)_1fr] md:items-center md:gap-12 md:p-10"
          >
            <div className="mx-auto flex w-full max-w-[200px] flex-col items-center md:mx-0">
              <div
                className={`relative aspect-square w-full max-w-[200px] overflow-hidden rounded-2xl bg-gradient-to-br ${t.avatarGradient} shadow-[0_12px_40px_rgba(0,0,0,0.25)] ring-2 ring-zinc-900/10`}
              >
                <span className="absolute inset-0 flex items-center justify-center font-heading text-4xl tracking-wide text-white/95 drop-shadow-md">
                  {t.initials}
                </span>
              </div>
              <p className="mt-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-800/80">
                Google review
              </p>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-zinc-950 text-zinc-950" />
                ))}
              </div>
              <blockquote className="mt-5 border-l-2 border-zinc-900/25 pl-5 md:pl-6">
                <p className="text-lg font-light leading-relaxed text-zinc-900 md:text-xl md:leading-relaxed">
                  {t.quote}
                </p>
                <footer className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm text-zinc-800">
                  <cite className="font-semibold not-italic">{t.name}</cite>
                  <span className="text-zinc-700/80">·</span>
                  <span>{t.meta}</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`h-2.5 w-2.5 rounded-full transition ${
                active === i ? "scale-125 bg-zinc-950" : "bg-zinc-800/40 hover:bg-zinc-800/70"
              }`}
              onClick={() => go(i)}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
