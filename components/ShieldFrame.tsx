import type { ReactNode } from "react";

const SHIELD_CLIP =
  "[clip-path:polygon(50%_0%,100%_10%,100%_68%,50%_100%,0%_68%,0%_10%)]";

export type ShieldFrameVariant = "pink" | "blue";

type ShieldFrameProps = {
  children: ReactNode;
  className?: string;
  /** Pink haze (testimonial) or electric blue trim (Mario / brand) */
  variant?: ShieldFrameVariant;
};

const VARIANT_FILTER: Record<ShieldFrameVariant, string> = {
  pink: "[filter:drop-shadow(0_0_14px_rgba(255,45,120,0.7))_drop-shadow(0_0_28px_rgba(255,45,120,0.35))]",
  blue: "[filter:drop-shadow(0_0_14px_rgba(0,0,255,0.65))_drop-shadow(0_0_22px_rgba(0,0,255,0.4))]",
};

export function ShieldFrame({ children, className = "", variant = "pink" }: ShieldFrameProps) {
  return (
    <div className={`${VARIANT_FILTER[variant]} ${className}`}>
      <div className={`${SHIELD_CLIP} overflow-hidden bg-black`}>{children}</div>
    </div>
  );
}
