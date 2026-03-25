"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const SHOW_AFTER_PX = 480;

/** ViewBox radius; circumference used for dash math */
const R = 45;
const CIRC = 2 * Math.PI * R;

function scrollProgress(): number {
  if (typeof document === "undefined") return 0;
  const el = document.documentElement;
  const max = el.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  return Math.min(1, Math.max(0, window.scrollY / max));
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      setProgress(scrollProgress());
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const goTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!visible) return null;

  const pct = Math.round(progress * 100);
  const dashOffset = CIRC * (1 - progress);

  return (
    <div className="pointer-events-none fixed bottom-24 right-4 z-40 flex h-16 w-16 items-center justify-center md:bottom-10 md:right-8 md:h-[4.5rem] md:w-[4.5rem]">
      <svg
        className="absolute inset-0 -rotate-90 text-gorilla-yellow"
        viewBox="0 0 100 100"
        aria-hidden
      >
        {/* Pink track (full ring) */}
        <circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          className="stroke-white/25"
          strokeWidth="3"
        />
        {/* Yellow arc — grows with scroll depth */}
        <circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          className="text-gorilla-yellow"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={dashOffset}
          style={{
            transition: "stroke-dashoffset 0.12s ease-out",
          }}
        />
      </svg>
      <button
        type="button"
        onClick={goTop}
        aria-label={`Back to top — ${pct}% of page scrolled`}
        className="pointer-events-auto relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/90 text-gorilla-yellow shadow-[0_0_20px_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gorilla-blue md:h-14 md:w-14"
      >
        <ChevronUp className="h-6 w-6 md:h-7 md:w-7" aria-hidden />
      </button>
    </div>
  );
}
