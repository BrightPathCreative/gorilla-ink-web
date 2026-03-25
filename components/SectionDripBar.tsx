import Image from "next/image";

type Props = {
  /** Tailwind class for gradient end to match section background, e.g. `to-zinc-950`, `to-black`, `to-[#060606]`. */
  gradientTo: string;
};

/**
 * Green drip from `gorilla-drip.svg` at section start — reads as paint dripping into the content below.
 */
export function SectionDripBar({ gradientTo }: Props) {
  return (
    <div className="relative w-full" aria-hidden>
      <div className="relative mx-auto h-[3.75rem] w-full max-w-6xl overflow-hidden md:h-[4.75rem]">
        <Image
          src="/gorilla-drip.svg"
          alt=""
          fill
          className="object-cover object-top opacity-[0.88]"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/15 ${gradientTo}`}
        />
      </div>
    </div>
  );
}
