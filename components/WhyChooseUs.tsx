import { ShieldCheck, Sparkles, Users, Wrench } from "lucide-react";

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
      className="border-b border-white/10 bg-zinc-950 px-4 py-14 md:px-6 md:py-20"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Why Gorilla Ink</p>
          <h2 id="why-choose-heading" className="font-heading mt-3 text-4xl tracking-tight text-white md:text-5xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-[#a3a3a3]">
            Melbourne south-east studio — serious craft, straight advice, and work built to last.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {points.map(({ title, description, Icon }) => (
            <li
              key={title}
              className="rounded-lg border border-white/10 bg-black/50 p-6 shadow-[0_0_28px_rgba(0,0,0,0.45)] transition hover:border-white/20 hover:shadow-[0_0_32px_rgba(0,0,255,0.08)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-gorilla-blue/40 bg-gorilla-blue/10 text-gorilla-blue">
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
