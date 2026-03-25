import Image from "next/image";
import Link from "next/link";
import { BookOpen, CalendarCheck, HelpCircle, Images, MapPin, Users } from "lucide-react";

const nav = [
  { href: "/#story", label: "Story", Icon: BookOpen },
  { href: "/#gallery", label: "Gallery", Icon: Images },
  { href: "/#artists", label: "Artists", Icon: Users },
  { href: "/#faq", label: "FAQ", Icon: HelpCircle },
  { href: "/#booking", label: "Reserve", Icon: CalendarCheck },
  { href: "/#contact", label: "Visit", Icon: MapPin },
];

export function InnerPageHeader() {
  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6 md:py-4">
        <div className="flex items-center justify-between gap-4 md:justify-start">
          <Link
            href="/#home"
            className="relative size-12 shrink-0 overflow-hidden rounded-sm bg-black p-0 ring-1 ring-white/15 transition hover:ring-white/35 md:size-14"
            aria-label="Gorilla Ink, home"
          >
            <Image src="/gorilla-ink-logo.svg" alt="" fill sizes="56px" className="object-contain object-center" priority />
          </Link>
          <Link
            href="/#booking"
            className="rounded-md border border-white/15 bg-gorilla-magenta px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_22px_rgba(251,5,247,0.4)] transition hover:scale-[1.02] hover:bg-[#ff3afc] md:hidden"
          >
            Reserve time
          </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:gap-x-4" aria-label="Section navigation">
          {nav.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-zinc-500 transition hover:text-gorilla-yellow md:text-xs"
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-zinc-500 transition group-hover:text-gorilla-magenta md:h-4 md:w-4" aria-hidden />
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#booking"
          className="hidden rounded-md border border-white/15 bg-gorilla-magenta px-5 py-2.5 text-sm font-black uppercase tracking-wider text-white shadow-[0_0_22px_rgba(251,5,247,0.4)] transition hover:scale-[1.02] hover:bg-[#ff3afc] md:inline-flex"
        >
          Reserve time
        </Link>
      </div>
    </header>
  );
}
