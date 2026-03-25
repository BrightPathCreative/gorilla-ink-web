import Image from "next/image";
import { Star } from "lucide-react";
import { ShieldFrame } from "@/components/ShieldFrame";
import { SectionDripBar } from "@/components/SectionDripBar";

export function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-b border-white/10 bg-[#060606] px-4 pb-12 pt-0 md:px-6 md:pb-16 lg:pb-20"
      aria-labelledby="testimonial-heading"
    >
      <SectionDripBar gradientTo="to-[#060606]" />
      <div className="relative mx-auto max-w-7xl">
        <div
          className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[100px] md:h-96 md:w-96"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-white/[0.035] blur-[90px] md:h-72 md:w-72"
          aria-hidden
        />

        <div className="relative grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-12 lg:items-start">
          <figure className="group relative order-2 mx-auto w-full min-w-0 max-w-[280px] sm:max-w-[300px] lg:order-1 lg:mx-0 lg:max-w-[min(100%,320px)]">
            <ShieldFrame variant="magenta" className="w-full">
              <div className="relative aspect-[4/5] w-full sm:aspect-[16/11] lg:aspect-[4/5]">
                <Image
                  src="/testimonialimage.png"
                  alt="Studio backpiece session at Gorilla Ink"
                  fill
                  className="object-cover object-[center_45%] transition duration-500 group-hover:scale-[1.02] sm:object-[center_42%]"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 320px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-black/25"
                  aria-hidden
                />
              </div>
            </ShieldFrame>
            <p className="mt-4 text-center text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/50 lg:text-left">
              Backpiece · studio session
            </p>
          </figure>

          <div className="order-1 min-w-0 w-full max-w-full lg:order-2">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/55">
                Client <span className="text-gorilla-yellow">review</span>
              </p>
              <span className="hidden h-px flex-1 min-w-[3rem] bg-white/20 sm:block" />
            </div>

            <h2
              id="testimonial-heading"
              className="font-heading mt-4 text-4xl leading-[0.95] tracking-[0.04em] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.08)] md:text-5xl md:tracking-[0.06em]"
            >
              What people say
            </h2>

            <div className="mt-3 flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-white text-white md:h-[18px] md:w-[18px]"
                />
              ))}
              <span className="ml-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                Google review
              </span>
            </div>

            <blockquote className="relative mt-8 min-w-0 max-w-full border-l-2 border-white/25 pl-6 md:pl-8">
              <p className="break-words text-lg font-light leading-relaxed text-[#e2e2e2] md:text-xl md:leading-relaxed">
                Shout out to Marz, what a legend. He was patient, very considerate &amp; made me feel very at home, checking in on me throughout the whole process from start to finish. Marz is so experienced &amp; this is clearly evident through his sensational tattoo designs. Seriously very special. Thank you Marz.
              </p>
              <footer className="mt-8 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
                <cite className="font-semibold not-italic text-white">Georgia Mesolongitis</cite>
                <span className="text-white/35">·</span>
                <span className="text-[#9a9a9a]">Google · a year ago</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
