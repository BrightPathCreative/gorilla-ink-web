export type ArtistFrame = "blue" | "pink" | "yellow";

export type PortfolioPiece = {
  src: string;
  alt: string;
  /** Short line under the image (optional) */
  caption?: string;
};

export type Artist = {
  slug: string;
  name: string;
  role: string;
  image: string;
  alt: string;
  specialties: string;
  bio: string;
  instagram: string | null;
  handle: string | null;
  frame: ArtistFrame;
  /** Tattoo work — swap paths under /public/artists/{slug}/ when you add real shots */
  portfolio: PortfolioPiece[];
};

export const artists: Artist[] = [
  {
    slug: "marz-del-toro",
    name: "Marz Del Toro",
    role: "Owner & Lead Artist",
    image: "/mario.jpg",
    alt: "Marz Del Toro, owner and lead artist at Gorilla Ink Tattoo Studio",
    specialties: "Japanese/Oriental, Black & Grey Realism, Fine Line",
    bio: "20+ years experience. Combines technical skill with artistic intuition for powerful statement pieces.",
    instagram: "https://www.instagram.com/tattsbymarz/",
    handle: "@tattsbymarz",
    frame: "blue",
    portfolio: [
      {
        src: "/hero-tattoo-mockup.png",
        alt: "Black and grey realism tattoo by Marz Del Toro",
        caption: "Black & grey realism",
      },
      {
        src: "/testimonial-backpiece-studio.png",
        alt: "Large back piece tattoo, Gorilla Ink studio",
        caption: "Back piece in progress",
      },
      {
        src: "/showcase-placeholder-b.png",
        alt: "Japanese style tattoo sleeve detail",
        caption: "Japanese / oriental",
      },
      {
        src: "/testimonialimage.png",
        alt: "Tattoo client showcase, Gorilla Ink",
        caption: "Custom composition",
      },
      {
        src: "/GorillaInk.png",
        alt: "Studio atmosphere and tattoo work at Gorilla Ink",
        caption: "Studio work",
      },
    ],
  },
  {
    slug: "anastasia-rallis",
    name: "Anastasia Rallis",
    role: "Junior Artist",
    image: "/artist-anastasia.jpg",
    alt: "Anastasia Rallis, junior artist at Gorilla Ink",
    specialties: "Fine Line, Floral, Blackwork",
    bio: "Known for exquisite detail and transforming client ideas into delicate, lasting personalized art.",
    instagram: null,
    handle: null,
    frame: "pink",
    portfolio: [
      {
        src: "/artist-anastasia.jpg",
        alt: "Fine line floral tattoo by Anastasia Rallis",
        caption: "Fine line & floral",
      },
      {
        src: "/showcase-placeholder-b.png",
        alt: "Delicate linework tattoo",
        caption: "Linework detail",
      },
      {
        src: "/hero-tattoo-mockup.png",
        alt: "Blackwork and ornamental tattoo",
        caption: "Blackwork",
      },
      {
        src: "/testimonialimage.png",
        alt: "Tattoo piece by Anastasia Rallis",
        caption: "Custom piece",
      },
    ],
  },
  {
    slug: "pablo-montana",
    name: "Pablo Montana",
    role: "Resident Artist",
    image: "/artist-pablo.jpg",
    alt: "Pablo Montana, resident artist at Gorilla Ink",
    specialties: "Black Work, Fine Line",
    bio: "Hailing from Bogota, Colombia, bringing awesome black work and fine line expertise to Australia.",
    instagram: "https://www.instagram.com/pablomontana_/",
    handle: "@pablomontana_",
    frame: "yellow",
    portfolio: [
      {
        src: "/artist-pablo.jpg",
        alt: "Black work tattoo by Pablo Montana",
        caption: "Black work",
      },
      {
        src: "/hero-tattoo-mockup.png",
        alt: "Fine line tattoo composition",
        caption: "Fine line",
      },
      {
        src: "/showcase-placeholder-b.png",
        alt: "Solid black ornamental tattoo",
        caption: "Ornamental",
      },
      {
        src: "/testimonial-backpiece-studio.png",
        alt: "Large scale black work",
        caption: "Large scale",
      },
    ],
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}
