"use client";

import { useState } from "react";
import { BrandSelect } from "@/components/BrandSelect";

const ARTIST_OPTIONS = [
  { value: "marz", label: "Marz Del Toro" },
  { value: "anastasia", label: "Anastasia Rallis" },
  { value: "pablo", label: "Pablo Montana" },
  { value: "any", label: "Any artist" },
] as const;

const STYLE_OPTIONS = [
  { value: "japanese-oriental", label: "Japanese / Oriental" },
  { value: "fine-line", label: "Fine line" },
  { value: "black-grey-realism", label: "Black & grey realism" },
  { value: "blackwork", label: "Blackwork" },
  { value: "floral-botanical", label: "Floral / botanical" },
  { value: "traditional-american", label: "Traditional American" },
  { value: "lettering-script", label: "Lettering / script" },
  {
    value: "other",
    label: "Other — describe below; we can research references",
  },
] as const;

/**
 * Stand-in until GoHighLevel embed URL is set. Collects the same fields a typical tattoo booking form needs.
 */
export function BookingFormMock() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [styleError, setStyleError] = useState<string | undefined>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const style = fd.get("style");
    if (typeof style !== "string" || style === "") {
      setStyleError("Please select a style.");
      return;
    }
    setStyleError(undefined);
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-gorilla-magenta/40 bg-black/60 px-6 py-16 text-center">
        <p className="font-heading text-2xl text-white">Thanks, we&apos;ve got your details.</p>
        <p className="mt-3 text-[#E5E5E5]">
          This is a preview form. When your GHL form is connected, submissions will go straight to your pipeline.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-lg border border-white/10 bg-black/50 p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-[#E5E5E5]">
          Full name *
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded border border-white/15 bg-black/60 px-3 py-2.5 text-white outline-none focus:ring-2 focus:ring-gorilla-magenta"
          />
        </label>
        <label className="block text-sm font-medium text-[#E5E5E5]">
          Phone *
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1.5 w-full rounded border border-white/15 bg-black/60 px-3 py-2.5 text-white outline-none focus:ring-2 focus:ring-gorilla-magenta"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-[#E5E5E5]">
        Email *
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded border border-white/15 bg-black/60 px-3 py-2.5 text-white outline-none focus:ring-2 focus:ring-gorilla-magenta"
        />
      </label>
      <label className="block text-sm font-medium text-[#E5E5E5]">
        Preferred artist
        <BrandSelect name="artist" options={ARTIST_OPTIONS} defaultValue="any" />
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-[#E5E5E5]">
          Style / idea *
          <BrandSelect
            name="style"
            options={STYLE_OPTIONS}
            defaultValue=""
            placeholder="Select a style…"
            required
            error={styleError}
            onValueChange={() => setStyleError(undefined)}
          />
        </label>
        <label className="block text-sm font-medium text-[#E5E5E5]">
          Placement on body
          <input
            name="placement"
            placeholder="e.g. upper arm, back"
            className="mt-1.5 w-full rounded border border-white/15 bg-black/60 px-3 py-2.5 text-white outline-none placeholder:text-white/35 focus:ring-2 focus:ring-gorilla-magenta"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-[#E5E5E5]">
        Approx. size
        <input
          name="size"
          placeholder="e.g. palm-sized, half sleeve"
          className="mt-1.5 w-full rounded border border-white/15 bg-black/60 px-3 py-2.5 text-white outline-none placeholder:text-white/35 focus:ring-2 focus:ring-gorilla-magenta"
        />
      </label>
      <label className="block text-sm font-medium text-[#E5E5E5]">
        Reference links (Pinterest, IG, etc.)
        <textarea
          name="references"
          rows={2}
          className="mt-1.5 w-full resize-y rounded border border-white/15 bg-black/60 px-3 py-2.5 text-white outline-none placeholder:text-white/35 focus:ring-2 focus:ring-gorilla-magenta"
          placeholder="Paste URLs or @handles"
        />
      </label>
      <label className="block text-sm font-medium text-[#E5E5E5]">
        Preferred days / times
        <input
          name="availability"
          placeholder="e.g. weekday afternoons, Saturdays"
          className="mt-1.5 w-full rounded border border-white/15 bg-black/60 px-3 py-2.5 text-white outline-none placeholder:text-white/35 focus:ring-2 focus:ring-gorilla-magenta"
        />
      </label>
      <label className="block text-sm font-medium text-[#E5E5E5]">
        Anything else we should know?
        <textarea
          name="message"
          rows={4}
          className="mt-1.5 w-full resize-y rounded border border-white/15 bg-black/60 px-3 py-2.5 text-white outline-none placeholder:text-white/35 focus:ring-2 focus:ring-gorilla-magenta"
          placeholder="Cover-up, pain concerns, budget range…"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-sm bg-gorilla-magenta py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_24px_rgba(251,5,247,0.45)] transition hover:bg-[#ff3afc]"
      >
        Send request
      </button>
      <p className="text-center text-xs text-white/45">
        Preview only: connect <code className="text-gorilla-yellow">NEXT_PUBLIC_GHL_FORM_EMBED_URL</code> to go live.
      </p>
    </form>
  );
}
