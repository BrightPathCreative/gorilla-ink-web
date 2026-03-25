import { BookingFormMock } from "@/components/BookingFormMock";

const embedUrl = process.env.NEXT_PUBLIC_GHL_FORM_EMBED_URL;

export function GHLBooking() {
  return (
    <section id="booking" className="scroll-mt-24 border-t border-white/10 bg-zinc-950 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-center text-4xl tracking-tight text-white md:text-5xl">Reserve time</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[#b5b5b5]">
          Send your details and we&apos;ll reply to confirm your session.
        </p>
        <div className="mt-10 min-h-[480px] overflow-hidden rounded-lg border border-white/10 bg-black/40">
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
