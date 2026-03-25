import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InstagramIcon } from "@/components/SocialIcons";
import { Footer } from "@/components/Footer";
import { artists, getArtistBySlug } from "@/data/artists";
import { archivoLogo } from "@/app/fonts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) return { title: "Artist" };
  return {
    title: `${artist.name} | Gorilla Ink Tattoo Studio`,
    description: `${artist.specialties}. ${artist.bio} Melbourne south-east.`,
    openGraph: {
      title: `${artist.name} | Gorilla Ink`,
      description: artist.specialties,
    },
  };
}

const frameBorder: Record<string, string> = {
  blue: "border-gorilla-blue shadow-[0_0_32px_rgba(0,0,255,0.35)]",
  pink: "border-gorilla-pink shadow-[0_0_32px_rgba(255,45,120,0.35)]",
  yellow:
    "border-gorilla-yellow shadow-[0_0_32px_rgb(var(--gorilla-yellow-rgb)_/_0.35)]",
};

export default async function ArtistPage({ params }: Props) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) notFound();

  return (
    <>
    <main className="min-h-screen bg-black pt-6">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <nav className="mb-10 text-sm text-white/55" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <span className="mx-2 text-white/35" aria-hidden>
            /
          </span>
          <Link href="/#artists" className="transition hover:text-white">
            Artists
          </Link>
          <span className="mx-2 text-white/35" aria-hidden>
            /
          </span>
          <span className="text-white/90">{artist.name}</span>
        </nav>

        <header className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          <div
            className={`relative mx-auto aspect-[4/5] w-full max-w-[320px] shrink-0 overflow-hidden rounded-lg border-2 bg-zinc-950 lg:mx-0 lg:w-[min(100%,280px)] ${frameBorder[artist.frame] ?? frameBorder.blue}`}
          >
            <Image
              src={artist.image}
              alt={artist.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 320px, 280px"
              priority
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className={`${archivoLogo.className} text-sm font-semibold uppercase tracking-[0.2em] text-white/45`}>
              Gorilla Ink artist
            </p>
            <h1 className="font-heading mt-2 text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">{artist.name}</h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gorilla-pink">{artist.role}</p>
            <p className="mt-4 text-base text-gorilla-yellow/90 md:text-lg">{artist.specialties}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d4d4d4]">{artist.bio}</p>
            {artist.instagram && (
              <Link
                href={artist.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-gorilla-pink/50 hover:text-gorilla-pink"
              >
                <InstagramIcon className="h-5 w-5" />
                {artist.handle ?? "Instagram"}
              </Link>
            )}
            <div className="mt-10">
              <Link
                href="/#booking"
                className="inline-flex rounded-md bg-gorilla-blue px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_22px_rgba(0,0,255,0.35)] transition hover:bg-[#2222ff] md:text-base"
              >
                Reserve time
              </Link>
            </div>
          </div>
        </header>

        <section className="mt-16 border-t border-white/10 pt-16 md:mt-20 md:pt-20" aria-labelledby="portfolio-heading">
          <h2 id="portfolio-heading" className="font-heading text-3xl tracking-tight text-white md:text-4xl">
            Work by {artist.name.split(" ")[0]}
          </h2>
          <p className="mt-3 max-w-2xl text-[#a3a3a3]">
            A selection of tattoos and styles from the studio floor. Follow for the latest flash and bookings.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {artist.portfolio.map((piece, index) => (
              <li
                key={`${artist.slug}-${index}`}
                className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950/80 shadow-[0_0_24px_rgba(0,0,0,0.5)]"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={piece.src}
                    alt={piece.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {piece.caption && (
                  <p className="border-t border-white/5 px-3 py-2.5 text-xs font-medium uppercase tracking-wider text-white/70">
                    {piece.caption}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12 text-center text-sm text-white/45">
          <Link href="/#artists" className="text-gorilla-blue underline-offset-4 transition hover:text-white hover:underline">
            ← All artists
          </Link>
        </p>
      </div>
    </main>
    <Footer />
    </>
  );
}
