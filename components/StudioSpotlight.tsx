import Image from "next/image";

export function StudioSpotlight() {
  return (
    <section
      className="scroll-mt-24 border-b border-white/10 bg-black px-4 py-4 md:px-6 md:py-6"
      aria-labelledby="studio-spotlight-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="studio-spotlight-heading"
          className="font-heading text-center text-3xl tracking-[0.04em] text-white md:text-4xl md:tracking-[0.06em]"
        >
          Inside the studio
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#a3a3a3]">
          Clean floors, focused energy, and room to plan your next piece — Oakleigh, Melbourne.
        </p>
        <div className="relative mt-8 overflow-hidden rounded-xl border border-white/10 ring-1 ring-white/5">
          <div className="relative aspect-[21/9] w-full min-h-[200px] md:aspect-[2.4/1] md:min-h-[280px]">
            <Image
              src="/gallery/studio.jpg"
              alt="Gorilla Ink tattoo studio interior, Oakleigh Melbourne"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
