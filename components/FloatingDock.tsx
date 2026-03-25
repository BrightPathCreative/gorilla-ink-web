"use client";

import Link from "next/link";
import { BookOpen, CalendarCheck, HelpCircle, Images, MapPin, Users } from "lucide-react";

const dock = [
  { href: "/#story", label: "Story", Icon: BookOpen },
  { href: "/#gallery", label: "Gallery", Icon: Images },
  { href: "/#artists", label: "Artists", Icon: Users },
  { href: "/#faq", label: "FAQ", Icon: HelpCircle },
  { href: "/#booking", label: "Reserve", Icon: CalendarCheck },
  { href: "/#contact", label: "Visit", Icon: MapPin },
];

export function FloatingDock() {
  return (
    <nav
      className="fixed bottom-4 left-1/2 z-40 flex max-w-[calc(100vw-1rem)] -translate-x-1/2 gap-0.5 overflow-x-auto overflow-y-hidden rounded-full border border-white/20 bg-black/92 px-1.5 py-2 shadow-[0_0_28px_rgba(255,255,255,0.06),0_12px_40px_rgba(0,0,0,0.85)] backdrop-blur-xl md:bottom-8 md:max-w-none md:gap-2 md:px-3"
      aria-label="Section navigation"
    >
      {dock.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          className="group flex min-w-0 flex-col items-center gap-0.5 rounded-full px-2.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-zinc-500 transition hover:bg-white/5 hover:text-gorilla-yellow md:px-3 md:py-2 md:text-xs"
        >
          <Icon
            className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:scale-110 group-hover:text-gorilla-magenta md:h-5 md:w-5"
            aria-hidden
          />
          <span className="max-w-[3.5rem] truncate md:max-w-none">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
