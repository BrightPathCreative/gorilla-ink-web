"use client";

import { useEffect, useState } from "react";

/**
 * Reference-style cursor: yellow dot + soft ping. Disabled for touch and `prefers-reduced-motion`.
 */
export function CustomCursor() {
  const [on, setOn] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    if (mqReduce.matches || coarse.matches) return;

    setOn(true);
    document.body.classList.add("cursor-none");

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!on) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9998]"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
      aria-hidden
    >
      <span className="relative flex h-3 w-3 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-cursor-ping rounded-full bg-gorilla-yellow/35" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gorilla-yellow shadow-[0_0_12px_rgb(var(--gorilla-yellow-rgb)/0.9)]" />
      </span>
    </div>
  );
}
