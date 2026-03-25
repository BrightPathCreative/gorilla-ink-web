export type FaqItem = { question: string; answer: string };

/**
 * Single source for visible FAQ + FAQPage JSON-LD (keep in sync).
 */
export const faqItems: FaqItem[] = [
  {
    question: "How do I reserve an appointment?",
    answer:
      "Use the request form on this page or call the studio. We reply with available dates, session length, and anything we need from you. For larger work we may take a deposit to hold your dates once you are ready to commit.",
  },
  {
    question: "What is your cancellation and reschedule policy?",
    answer:
      "Please give at least 48 hours notice if you need to move an appointment. Late cancellations or no-shows may affect a deposit. If you are unwell or running late, contact us as soon as you can so we can reschedule fairly.",
  },
  {
    question: "How should I prepare before my tattoo?",
    answer:
      "Rest well, eat a solid meal, and drink water. Avoid alcohol the night before and skip recreational blood thinners. Wear clothing that gives easy access to the area being tattooed. Bring photo ID if we have asked for it. Arrive on time and avoid sunburn on the area.",
  },
  {
    question: "What aftercare should I follow?",
    answer:
      "We give you written aftercare at the end of your session. In short: keep it clean with a gentle wash, use only the products we recommend, do not pick or soak the piece, and stay out of pools, spas, and direct sun until healed. If you are worried about healing, message us with a clear photo.",
  },
  {
    question: "What happens in a consultation?",
    answer:
      "We talk through your idea, placement, size, and style (black and grey, fine line, Japanese, cover-up, and so on). Bring references if you have them. We explain timing, pricing structure, and how many sessions you might need, then plan next steps before any big commitment.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      "The first 30 minutes are on us. If your consult runs longer, we charge for the extra time — we’ll quote that rate when you book so you know upfront.",
  },
  {
    question: "What does a custom draw-up or design cost?",
    answer:
      "It depends on complexity and how long the artwork takes. Most custom draw-ups sit between $100 and $250, paid in full before we book the tattoo. Scheduling the tattoo is separate and includes its own deposit.",
  },
  {
    question: "What should I expect on the day of my tattoo?",
    answer:
      "We set up cleanly, stencil the design, and work in stages with breaks. Longer sits can be tiring, so snacks and water help. Tell us if you need a break or a posture change. Expect some redness and swelling straight after; that is normal.",
  },
  {
    question: "Do you take walk-ins?",
    answer:
      "We mainly work by appointment so each client gets proper time. Same-day spots sometimes open up. Call or message and we will tell you what is possible.",
  },
  {
    question: "How do tattoo deposits work?",
    answer:
      "Smaller and medium-sized pieces: we usually take 50% when you book and the rest on the day. Your deposit is typically from $120 upward depending on the quote — we lock in the number before you pay. Medium–larger and custom work is quoted on size and complexity; we take a $200 deposit to hold the booking, and that amount comes off your final session. Everything is confirmed in writing before you transfer anything.",
  },
];
