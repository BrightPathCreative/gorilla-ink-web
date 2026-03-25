"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useState } from "react";
import "./carousel-3d.css";

const NUM_ELEMENTS = 11;

const showcaseItems: {
  image: string;
  caption: string;
  alt: string;
  description: string;
}[] = [
  {
    image: "/gallery/dragonrose.jpg",
    alt: "Floral and ornamental tattoo, Gorilla Ink Melbourne",
    caption: "Floral & ornamental",
    description: "Layered composition with healed-friendly contrast. Studio work.",
  },
  {
    image: "/gallery/beast.jpg",
    alt: "Bold tattoo piece, Gorilla Ink",
    caption: "Bold black & grey",
    description: "High-impact black and grey with strong readability on skin.",
  },
  {
    image: "/gallery/catholic.jpg",
    alt: "Religious themed tattoo, Gorilla Ink",
    caption: "Custom symbolism",
    description: "Detailed linework and shading tailored to placement.",
  },
  {
    image: "/gallery/fun.jpg",
    alt: "Colour tattoo, Gorilla Ink Melbourne",
    caption: "Colour work",
    description: "Saturated palette balanced for long-term heal.",
  },
  {
    image: "/gallery/girl.jpg",
    alt: "Portrait style tattoo",
    caption: "Portrait / realism",
    description: "Soft gradients and contrast tuned for the body.",
  },
  {
    image: "/gallery/FullSizeRender.jpg",
    alt: "Tattoo showcase, Gorilla Ink",
    caption: "Sleeve detail",
    description: "Multi-session project — flow across inner and outer arm.",
  },
  {
    image: "/gallery/IMG_5401.jpg",
    alt: "Linework tattoo, Gorilla Ink",
    caption: "Fine line",
    description: "Crisp lines and negative space for a light, modern look.",
  },
  {
    image: "/gallery/master.jpg",
    alt: "Large scale tattoo, Gorilla Ink",
    caption: "Large scale",
    description: "Composition planned for movement and aging.",
  },
  {
    image: "/gallery/studio.jpg",
    alt: "Tattoo session at Gorilla Ink studio",
    caption: "In the chair",
    description: "Clean setup and steady hands — Oakleigh studio floor.",
  },
  {
    image: "/gallery/2024-05-06.jpg",
    alt: "Recent tattoo work, Gorilla Ink",
    caption: "Recent work",
    description: "Fresh line and shade from a recent session.",
  },
  {
    image: "/gallery/2024-055-06.jpg",
    alt: "Tattoo piece, Gorilla Ink Melbourne",
    caption: "Custom piece",
    description: "Tailored design for the client’s story and placement.",
  },
];

export function Carousel3D() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (open === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <div className="gorilla-carousel-3d flex w-full justify-center overflow-x-hidden py-2 md:py-4">
        <div
          className="carousel relative mx-auto"
          style={
            {
              "--_num-elements": NUM_ELEMENTS,
            } as CSSProperties
          }
        >
          <div className="carousel-control-button left">
            <input type="radio" name="gorilla-carousel-direction" defaultChecked aria-label="Rotate carousel counter-clockwise" />
          </div>
          <div className="carousel-control-button right">
            <input type="radio" name="gorilla-carousel-direction" aria-label="Rotate carousel clockwise" />
          </div>
          <div className="carousel-rotation-direction">
            <ul className="carousel-item-wrapper m-0 p-0">
              {showcaseItems.map((item, index) => (
                <li
                  key={item.image}
                  className="carousel-item"
                  style={
                    {
                      "--_index": index,
                      "--_image-url": `url(${item.image})`,
                    } as CSSProperties
                  }
                >
                  <button
                    type="button"
                    className="carousel-item-trigger"
                    aria-label={`Open details: ${item.caption}`}
                    onClick={() => setOpen(index)}
                  />
                  <div className="carousel-item-overlay">{item.caption}</div>
                </li>
              ))}
            </ul>
            <div className="carousel-ground" aria-hidden />
          </div>
        </div>
      </div>

      {open !== null && showcaseItems[open] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="carousel-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            aria-label="Close"
            onClick={close}
          />
          <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-lg border-2 border-gorilla-magenta bg-zinc-950 shadow-[0_0_40px_rgba(251,5,247,0.25),0_0_60px_rgba(128,242,15,0.15)]">
            <div className="relative aspect-[4/5] w-full max-h-[55vh] sm:max-h-[60vh]">
              <Image
                src={showcaseItems[open].image}
                alt={showcaseItems[open].alt}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 32rem"
              />
            </div>
            <div className="border-t border-white/10 p-5">
              <h3 id="carousel-modal-title" className="font-heading text-2xl text-white">
                {showcaseItems[open].caption}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#E5E5E5]">{showcaseItems[open].description}</p>
              <button
                type="button"
                onClick={close}
                className="mt-5 w-full rounded-sm bg-gorilla-magenta py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#ff3afc]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
