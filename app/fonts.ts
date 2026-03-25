import { Archivo_Black, Bebas_Neue, Inter } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

/** Logo lockup: GORILLA / INK — must match `hero-word-*` in globals.css */
export const archivoLogo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gorilla-logo",
});
