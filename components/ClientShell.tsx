"use client";

import { usePathname } from "next/navigation";
import { BackToTop } from "@/components/BackToTop";
import { InnerPageHeader } from "@/components/InnerPageHeader";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {!isHome && <InnerPageHeader />}
      <BackToTop />
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
    </>
  );
}
