import Image from "next/image";
import { SectionDripBar } from "@/components/SectionDripBar";

export function StorySection() {
  return (
    <section
      id="story"
      className="scroll-mt-24 border-y border-white/10 bg-zinc-950 px-4 pb-16 pt-0 md:px-6 md:pb-20"
    >
      <SectionDripBar gradientTo="to-zinc-950" />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Our story</p>
          <h2 className="font-heading mt-3 text-4xl tracking-[0.04em] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.08)] md:text-5xl md:tracking-[0.06em]">
            Two decades of ink in Melbourne
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-14">
          <figure className="relative mx-auto w-full max-w-[260px] shrink-0 lg:mx-0 lg:w-[min(260px,34%)]">
            <div className="pointer-events-none absolute -inset-4 z-0 md:-inset-6" aria-hidden>
              <div
                className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-gorilla-magenta/25 blur-xl animate-story-blob md:h-40 md:w-40"
              />
              <div
                className="absolute bottom-1/4 right-1/4 h-28 w-28 rounded-full bg-gorilla-lime/20 blur-xl animate-story-blob-delayed md:h-36 md:w-36"
              />
            </div>
            <div className="relative z-10 overflow-hidden rounded-2xl ring-1 ring-white/15">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/mario.jpg"
                  alt="Marz Del Toro, owner and head artist of Gorilla Ink Tattoo Studio"
                  fill
                  className="object-cover object-[center_22%]"
                  sizes="(max-width: 1024px) 260px, 260px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
              </div>
            </div>
            <figcaption className="mt-5 text-center lg:text-left">
              <span className="font-heading text-2xl tracking-wide text-white">Marz Del Toro</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                Owner &amp; head artist
              </span>
            </figcaption>
          </figure>

          <div className="min-w-0 flex-1 space-y-6 text-left text-base leading-relaxed text-[#E5E5E5] md:text-lg">
            <p>
              Gorilla Ink Tattoo Studio is built on a simple idea: tattoos should feel personal, precise, and built to last. At the heart of the studio is{" "}
              <strong className="font-semibold text-white">Marz Del Toro</strong>, owner and lead artist, who has spent{" "}
              <strong className="font-semibold text-white">more than twenty years</strong> refining his craft across black and grey realism, Japanese and oriental work, and fine line.
            </p>
            <p>
              From early days on the floor to running his own chair, Marz has tattooed thousands of hours of skin: cover-ups, sleeves, one-off pieces, and long-term projects for clients who come back for years. That history shows up in calm consultations, honest advice, and artwork that respects both your idea and your anatomy.
            </p>
            <p>
              Today, Gorilla Ink brings that experience to Oakleigh alongside a tight team of resident and junior artists. Whether you are after a bold statement piece or a delicate fine-line design, you are stepping into a studio where decades of practice meet a genuine love of the trade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
