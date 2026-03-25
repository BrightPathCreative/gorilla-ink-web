import type { ReactNode } from "react";

const SHIELD_CLIP =
  "[clip-path:polygon(50%_0%,100%_10%,100%_68%,50%_100%,0%_68%,0%_10%)]";

export type ShieldFrameVariant = "magenta" | "lime";

type ShieldFrameProps = {
  children: ReactNode;
  className?: string;
  /** Magenta glow (testimonial) or lime trim (story / brand) */
  variant?: ShieldFrameVariant;
};

const VARIANT_FILTER: Record<ShieldFrameVariant, string> = {
  magenta:
    "[filter:drop-shadow(0_0_14px_rgba(251,5,247,0.65))_drop-shadow(0_0_28px_rgba(251,5,247,0.35))]",
  lime: "[filter:drop-shadow(0_0_14px_rgba(128,242,15,0.65))_drop-shadow(0_0_22px_rgba(128,242,15,0.4))]",
};

export function ShieldFrame({ children, className = "", variant = "magenta" }: ShieldFrameProps) {
  return (
    <div className={`${VARIANT_FILTER[variant]} ${className}`}>
      <div className={`${SHIELD_CLIP} overflow-hidden bg-black`}>{children}</div>
    </div>
  );
}
