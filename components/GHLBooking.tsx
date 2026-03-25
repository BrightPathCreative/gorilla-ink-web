import { BookingFormMock } from "@/components/BookingFormMock";
import { SectionDripBar } from "@/components/SectionDripBar";

const embedUrl = process.env.NEXT_PUBLIC_GHL_FORM_EMBED_URL;

export function GHLBooking() {
  return (
    <section id="booking" className="scroll-mt-24 border-t border-white/10 bg-zinc-950 px-4 pb-20 pt-0 md:px-6">
      <SectionDripBar gradientTo="to-zinc-950" />
      <div className="mx-auto max-w-3xl pt-12 md:pt-16">
        <h2 className="font-heading text-center text-4xl tracking-[0.04em] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.08)] md:text-5xl md:tracking-[0.06em]">
          Reserve time
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[#b5b5b5]">
          Send your details and we&apos;ll reply to confirm your session.
        </p>
        <div className="gorilla-place-card mt-10 min-h-[480px] overflow-hidden rounded-lg p-0">
          {embedUrl ? (
            <iframe
              title="Gorilla Ink appointment request form"
              src={embedUrl}
              className="h-[min(90vh,900px)] w-full border-0"
              loading="lazy"
              allow="clipboard-write; encrypted-media"
            />
          ) : (
            <BookingFormMock />
          )}
        </div>
      </div>
    </section>
  );
}
