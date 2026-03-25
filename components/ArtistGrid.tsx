import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/SocialIcons";
import { artists, type ArtistFrame } from "@/data/artists";

/** Same border weight + dual glow radii; only hue changes */
const ARTICLE_FRAME: Record<ArtistFrame, string> = {
  blue: "border-gorilla-blue shadow-[0_0_32px_rgba(0,0,255,0.42),0_0_18px_rgba(0,0,255,0.24)]",
  pink: "border-gorilla-pink shadow-[0_0_32px_rgba(255,45,120,0.42),0_0_18px_rgba(255,45,120,0.24)]",
  yellow:
    "border-gorilla-yellow shadow-[0_0_32px_rgb(var(--gorilla-yellow-rgb)_/_0.42),0_0_18px_rgb(var(--gorilla-yellow-rgb)_/_0.24)]",
};

export function ArtistGrid() {
  return (
    <section id="artists" className="scroll-mt-24 bg-black px-4 pb-20 pt-5 md:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-center text-4xl tracking-tight text-white md:text-5xl">Meet the Artists</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#E5E5E5]">
          Our team brings years of experience and distinct styles to every piece.
        </p>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {artists.map((artist) => (
            <article
              key={artist.slug}
              className={`flex flex-col overflow-hidden rounded-lg border-2 bg-zinc-950/80 ${ARTICLE_FRAME[artist.frame]}`}
            >
              <Link href={`/artists/${artist.slug}`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-gorilla-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={artist.image}
                    alt={artist.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl text-white transition group-hover:text-gorilla-blue">{artist.name}</h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wider text-gorilla-pink">{artist.role}</p>
                  <p className="mt-3 text-sm text-gorilla-yellow/90">{artist.specialties}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#E5E5E5]">{artist.bio}</p>
                  <p className="mt-4 text-sm font-semibold text-gorilla-blue">View portfolio →</p>
                </div>
              </Link>
              {artist.instagram && (
                <div className="border-t border-white/10 px-6 pb-6">
                  <Link
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white transition hover:text-gorilla-pink"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {artist.handle}
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
