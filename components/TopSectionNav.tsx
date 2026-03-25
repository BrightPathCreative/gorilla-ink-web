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

/** Non-sticky section nav for the home hero (top of first section). */
export function TopSectionNav() {
  return (
    <nav
      className="relative z-20 flex w-full justify-center border-b border-white/10 bg-black px-2 py-3 md:px-4 md:py-3.5"
      aria-label="Section navigation"
    >
      <div className="flex max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-2 sm:gap-x-2 md:gap-x-3">
        {dock.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className="group flex min-w-0 flex-col items-center gap-0.5 rounded-full px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-zinc-500 transition hover:bg-white/5 hover:text-gorilla-yellow sm:flex-row sm:gap-1.5 sm:px-2.5 sm:text-[0.65rem] md:px-3 md:text-xs"
          >
            <Icon
              className="h-3.5 w-3.5 shrink-0 text-zinc-500 transition group-hover:scale-110 group-hover:text-gorilla-magenta sm:h-4 sm:w-4 md:h-5 md:w-5"
              aria-hidden
            />
            <span className="max-w-[4rem] truncate sm:max-w-none">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
