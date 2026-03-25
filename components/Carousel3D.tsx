"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useState } from "react";
import "./carousel-3d.css";

const NUM_ELEMENTS = 11;

const showcaseItems: {
  image: "/showcase-placeholder-a.png" | "/showcase-placeholder-b.png";
  caption: string;
  alt: string;
  description: string;
}[] = [
  {
    image: "/showcase-placeholder-a.png",
    alt: "Black and grey realism tattoo, Gorilla Ink studio showcase",
    caption: "Black & Grey Realism",
    description:
      "Layered black and grey portrait work with soft gradients and healed-in contrast. By Marz Del Toro.",
  },
  {
    image: "/showcase-placeholder-b.png",
    alt: "Fine line floral tattoo, Gorilla Ink studio showcase",
    caption: "Fine Line & Floral",
    description: "Delicate linework and botanical composition, sized for forearm placement. By Anastasia Rallis.",
  },
  {
    image: "/showcase-placeholder-a.png",
    alt: "Japanese style tattoo, Gorilla Ink studio showcase",
    caption: "Japanese / Oriental",
    description: "Bold traditional flow with background wind bars and colour accents. Long-term sleeve project with Marz.",
  },
  {
    image: "/showcase-placeholder-b.png",
    alt: "Blackwork tattoo, Gorilla Ink studio showcase",
    caption: "Blackwork",
    description: "Solid blacks and ornamental patterns with crisp edges. By Pablo Montana.",
  },
  {
    image: "/showcase-placeholder-a.png",
    alt: "Black and grey sleeve, Gorilla Ink studio showcase",
    caption: "Black & Grey Sleeve",
    description: "Multi-session sleeve building narrative across inner and outer arm. Custom design.",
  },
  {
    image: "/showcase-placeholder-b.png",
    alt: "Minimalist fine line tattoo, Gorilla Ink studio showcase",
    caption: "Fine Line / Minimalist",
    description: "Single-needle detail and negative space for a light, modern look.",
  },
  {
    image: "/showcase-placeholder-a.png",
    alt: "Cover-up tattoo, Gorilla Ink studio showcase",
    caption: "Cover Up",
    description: "Rework of older ink with new composition planned around existing scar tissue.",
  },
  {
    image: "/showcase-placeholder-b.png",
    alt: "Full colour tattoo, Gorilla Ink studio showcase",
    caption: "Full Colour",
    description: "Saturated palette with healed-friendly saturation levels across sessions.",
  },
  {
    image: "/showcase-placeholder-a.png",
    alt: "Portrait realism, Gorilla Ink studio showcase",
    caption: "Portrait Realism",
    description: "Soft portrait study with ambient lighting reference. Black and grey.",
  },
  {
    image: "/showcase-placeholder-b.png",
    alt: "Floral blackwork, Gorilla Ink studio showcase",
    caption: "Floral & Blackwork",
    description: "High-contrast florals with ornamental framing on upper back.",
  },
  {
    image: "/showcase-placeholder-a.png",
    alt: "Fine line script, Gorilla Ink studio showcase",
    caption: "Fine Line Script",
    description: "Lettering layout with flow matched to muscle curve. Pablo Montana.",
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
                  key={index}
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
          <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-lg border-2 border-gorilla-blue bg-zinc-950 shadow-[0_0_40px_rgba(255,45,120,0.25),0_0_60px_rgba(0,0,255,0.2)]">
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
                className="mt-5 w-full rounded-sm bg-gorilla-blue py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#2222ff]"
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
