import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-white/10 bg-zinc-950 px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">FAQ</p>
        <h2 className="font-heading mt-3 text-4xl tracking-tight text-white md:text-5xl">Questions we hear a lot</h2>
        <p className="mt-4 text-lg text-[#a3a3a3]">
          Prep, aftercare, consults, and what a session feels like. Ask anything when you reserve.
        </p>

        <div className="mt-12 space-y-2">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group border border-white/10 bg-black/40 open:border-white/25 open:shadow-[0_0_24px_rgba(255,255,255,0.06)]"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-heading text-lg tracking-wide text-white transition marker:content-none hover:text-gorilla-blue [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="shrink-0 text-white/40 transition group-open:rotate-45 group-open:text-gorilla-yellow">
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t border-white/5 px-5 pb-5 pt-0">
                <p className="pt-4 text-base leading-relaxed text-[#E5E5E5]">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
