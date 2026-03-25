"use client";

const ITEMS = [
  "Black & grey realism",
  "Japanese · Oriental",
  "Fine line · Cover-ups",
  "Oakleigh · Melbourne",
  "Reserve your session",
  "Gorilla Ink Tattoo Studio",
];

export function HeroMarquee() {
  const line = ITEMS.join("  ·  ");
  return (
    <div
      className="group/marquee relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-[2px]"
      aria-hidden
    >
      <div className="overflow-hidden py-4 md:py-5">
        <div className="animate-marquee-x-slow flex w-max">
          <span className="marquee-line inline-block shrink-0 px-10 font-heading text-[clamp(1.05rem,2.1vw,2.1rem)] uppercase tracking-[0.35em] text-white/55 transition duration-300 group-hover/marquee:text-white group-hover/marquee:drop-shadow-[0_0_24px_rgba(255,255,255,0.55)] md:px-16">
            {line}
          </span>
          <span className="marquee-line inline-block shrink-0 px-10 font-heading text-[clamp(1.05rem,2.1vw,2.1rem)] uppercase tracking-[0.35em] text-white/55 transition duration-300 group-hover/marquee:text-white group-hover/marquee:drop-shadow-[0_0_24px_rgba(255,255,255,0.55)] md:px-16">
            {line}
          </span>
        </div>
      </div>
    </div>
  );
}
