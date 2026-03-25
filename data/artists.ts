export type ArtistFrame = "magenta" | "lime" | "yellow";

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
    frame: "magenta",
    portfolio: [
      {
        src: "/gallery/dragonrose.jpg",
        alt: "Black and grey realism tattoo by Marz Del Toro",
        caption: "Black & grey realism",
      },
      {
        src: "/gallery/FullSizeRender.jpg",
        alt: "Large sleeve tattoo, Gorilla Ink studio",
        caption: "Sleeve work",
      },
      {
        src: "/gallery/master.jpg",
        alt: "Japanese style tattoo detail",
        caption: "Japanese / oriental",
      },
      {
        src: "/testimonialimage.png",
        alt: "Tattoo client showcase, Gorilla Ink",
        caption: "Custom composition",
      },
      {
        src: "/gallery/studio.jpg",
        alt: "Studio session at Gorilla Ink",
        caption: "In the studio",
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
    frame: "lime",
    portfolio: [
      {
        src: "/gallery/IMG_5401.jpg",
        alt: "Fine line floral tattoo by Anastasia Rallis",
        caption: "Fine line & floral",
      },
      {
        src: "/gallery/girl.jpg",
        alt: "Delicate portrait-style tattoo",
        caption: "Detail work",
      },
      {
        src: "/gallery/fun.jpg",
        alt: "Colour tattoo piece",
        caption: "Colour",
      },
      {
        src: "/gallery/catholic.jpg",
        alt: "Custom linework tattoo",
        caption: "Linework",
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
        src: "/gallery/beast.jpg",
        alt: "Black work tattoo by Pablo Montana",
        caption: "Black work",
      },
      {
        src: "/gallery/2024-05-06.jpg",
        alt: "Fine line tattoo composition",
        caption: "Fine line",
      },
      {
        src: "/gallery/2024-055-06.jpg",
        alt: "Ornamental black tattoo",
        caption: "Ornamental",
      },
      {
        src: "/gallery/chatgpt-studio.png",
        alt: "Large scale black work",
        caption: "Large scale",
      },
    ],
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}
