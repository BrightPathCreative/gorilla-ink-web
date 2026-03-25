import { faqItems } from "@/data/faq";
import { SectionDripBar } from "@/components/SectionDripBar";

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-white/10 bg-zinc-950 px-4 pb-16 pt-0 md:px-6 md:pb-24">
      <SectionDripBar gradientTo="to-zinc-950" />
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">FAQ</p>
        <h2 className="font-heading mt-3 text-4xl tracking-[0.04em] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.08)] md:text-5xl md:tracking-[0.06em]">
          Questions we hear a lot
        </h2>
        <p className="mt-4 text-lg text-[#a3a3a3]">
          Prep, aftercare, consults, and what a session feels like. Ask anything when you reserve.
        </p>

        <div className="mt-12 divide-y divide-white/10">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className="group border-0 bg-transparent [&:not(:first-child)]:mt-0"
            >
              <summary className="cursor-pointer list-none py-5 font-heading text-xl uppercase leading-snug tracking-[0.06em] text-white transition marker:content-none hover:text-gorilla-lime md:text-2xl md:tracking-[0.07em] [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>
                    <span className="text-white/35">{index + 1}.</span> {item.question}
                  </span>
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center font-sans text-xl leading-none text-white/50 transition group-open:text-gorilla-lime md:text-2xl">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">×</span>
                  </span>
                </span>
              </summary>
              <div className="pb-6 pl-1 pt-1 md:pl-2">
                <p className="border-l-4 border-gorilla-lime pl-4 pt-2 font-mono text-sm leading-relaxed text-[#d4d4d4] md:text-[0.95rem]">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
