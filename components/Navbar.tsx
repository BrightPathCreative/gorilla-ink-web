"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * In-document header (not sticky). Full navigation lives in FloatingDock.
 */
export function Navbar() {
  return (
    <header className="relative z-50 flex w-full items-center justify-between border-b border-white/10 bg-black px-4 py-4 md:px-8 md:py-5">
      <Link
        href="/#home"
        className="relative size-14 shrink-0 overflow-hidden rounded-sm bg-black p-0 ring-1 ring-white/15 transition hover:ring-white/35 md:size-16"
        aria-label="Gorilla Ink, home"
      >
        <Image
          src="/gorilla-logo.jpg"
          alt=""
          fill
          sizes="64px"
          className="object-contain object-center"
          priority
        />
      </Link>
      <Link
        href="/#booking"
        className="rounded-md border border-white/15 bg-gorilla-blue px-5 py-2.5 text-sm font-black uppercase tracking-wider text-white shadow-[0_0_22px_rgba(0,0,255,0.35)] transition hover:scale-[1.02] hover:bg-[#2222ff] md:px-7 md:py-3 md:text-base"
      >
        Reserve time
      </Link>
    </header>
  );
}
