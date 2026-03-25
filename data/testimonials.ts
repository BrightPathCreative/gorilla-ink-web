export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  meta: string;
  /** Tailwind gradient classes for mock portrait */
  avatarGradient: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Shout out to Marz, what a legend. He was patient, very considerate & made me feel very at home, checking in on me throughout the whole process from start to finish. Marz is so experienced & this is clearly evident through his sensational tattoo designs.",
    name: "Georgia Mesolongitis",
    meta: "Google · a year ago",
    avatarGradient: "from-gorilla-magenta/90 to-zinc-900",
    initials: "GM",
  },
  {
    id: "2",
    quote:
      "Clean studio, honest consult, and the piece healed beautifully. They took time to map the flow on my arm — no rush, no attitude. Exactly what you want before something permanent.",
    name: "Alex R.",
    meta: "Google · 8 months ago",
    avatarGradient: "from-gorilla-lime/90 to-zinc-900",
    initials: "AR",
  },
  {
    id: "3",
    quote:
      "First big tattoo and I was nervous — the team made it straightforward. Aftercare was explained clearly and the line work is still crisp months later.",
    name: "Sam K.",
    meta: "Google · 6 months ago",
    avatarGradient: "from-gorilla-yellow/90 to-zinc-900",
    initials: "SK",
  },
  {
    id: "4",
    quote:
      "Returned for a second session because the first was such a good experience. Professional setup, great energy on the floor, and artwork that matches what we planned.",
    name: "Jordan M.",
    meta: "Google · 4 months ago",
    avatarGradient: "from-gorilla-magenta/80 via-gorilla-lime/70 to-zinc-900",
    initials: "JM",
  },
  {
    id: "5",
    quote:
      "Cover-up I didn’t think was possible — they reworked the design and explained limits up front. Healed soft and reads well from a distance. Highly recommend.",
    name: "Priya N.",
    meta: "Google · 3 months ago",
    avatarGradient: "from-gorilla-lime/85 to-gorilla-yellow/40",
    initials: "PN",
  },
];
