import { ShieldCheck, Sparkles, Users, Wrench } from "lucide-react";
import { SectionDripBar } from "@/components/SectionDripBar";

const points: { title: string; description: string; Icon: typeof Users }[] = [
  {
    title: "Skilled tattoo artists",
    description: "Experienced artists across realism, Japanese, fine line, and cover-ups — every piece backed by years on the needle.",
    Icon: Users,
  },
  {
    title: "Premium designs",
    description: "Custom artwork tailored to your idea, placement, and skin — not one-size-fits-all flash unless you want it.",
    Icon: Sparkles,
  },
  {
    title: "Safe and comfortable",
    description: "Clean setup, clear aftercare, and a calm session so you can relax into the process.",
    Icon: ShieldCheck,
  },
  {
    title: "High-quality equipment",
    description: "Professional machines, needles, and inks — maintained and chosen for consistent, lasting results.",
    Icon: Wrench,
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="border-b border-white/10 bg-zinc-950 px-4 pb-14 pt-0 md:px-6 md:pb-20"
      aria-labelledby="why-choose-heading"
    >
      <SectionDripBar gradientTo="to-zinc-950" />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Why Gorilla Ink</p>
          <h2
            id="why-choose-heading"
            className="font-heading mt-3 text-4xl tracking-[0.04em] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.08)] md:text-5xl md:tracking-[0.06em]"
          >
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-[#a3a3a3]">
            Melbourne south-east studio — serious craft, straight advice, and work built to last.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {points.map(({ title, description, Icon }) => (
            <li key={title} className="gorilla-place-card p-6 hover:-translate-y-0.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-gorilla-lime/50 bg-gorilla-lime/10 text-gorilla-lime">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="font-heading mt-4 text-xl tracking-wide text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#c4c4c4]">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
