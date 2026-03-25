import type { Metadata } from "next";
import "./globals.css";
import { archivoLogo, bebas, inter } from "./fonts";
import { Navbar } from "@/components/Navbar";
import { FloatingDock } from "@/components/FloatingDock";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Gorilla Ink Tattoo Studio | Oakleigh & Hughesdale Melbourne",
  description:
    "Custom tattoos in Oakleigh & Hughesdale, VIC: black & grey realism, Japanese, fine line & cover-ups. Gorilla Ink Tattoo Studio, First Floor, 53A Warrigal Road. Reserve a consultation near Chadstone & Monash.",
  keywords: [
    "tattoo studio Oakleigh",
    "tattoo shop Melbourne",
    "Hughesdale tattoo",
    "black and grey tattoo Melbourne",
    "Japanese tattoo Melbourne",
    "fine line tattoo Oakleigh",
  ],
  openGraph: {
    title: "Gorilla Ink Tattoo Studio | Oakleigh & Hughesdale Melbourne",
    description:
      "Custom black & grey, Japanese & fine line tattoos in Melbourne's south-east. Reserve at Gorilla Ink, 53A Warrigal Road Hughesdale-Oakleigh.",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${inter.variable} ${bebas.variable} ${archivoLogo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black font-sans text-white">
        <Navbar />
        <FloatingDock />
        <BackToTop />
        <div className="flex flex-1 flex-col pb-24 md:pb-28">{children}</div>
      </body>
    </html>
  );
}
