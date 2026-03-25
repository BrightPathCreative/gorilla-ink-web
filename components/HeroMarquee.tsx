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
      className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-[2px]"
      aria-hidden
    >
      <div className="overflow-hidden py-3 md:py-3.5">
        <div className="animate-marquee-x flex w-max">
          <span className="inline-block shrink-0 px-10 font-heading text-[0.7rem] uppercase tracking-[0.35em] text-white/55 md:px-14 md:text-xs">
            {line}
          </span>
          <span className="inline-block shrink-0 px-10 font-heading text-[0.7rem] uppercase tracking-[0.35em] text-white/55 md:px-14 md:text-xs">
            {line}
          </span>
        </div>
      </div>
    </div>
  );
}
