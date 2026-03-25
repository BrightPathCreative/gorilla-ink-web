import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

const mapsDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=First+Floor+53A+Warrigal+Road,+Hughesdale+VIC+3166";

const facebookUrl = "https://www.facebook.com/gorillaink.aus";

const SITE_CREDIT_URL = "https://brightpathcreative.com.au/contact";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-black pb-28 pt-0 md:pb-24">
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-16 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="font-heading text-3xl text-white">Visit Us</h2>
          <address className="mt-4 not-italic text-[#E5E5E5]">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white/45" aria-hidden />
              <span>
                First Floor, 53A Warrigal Road
                <br />
                Hughesdale-Oakleigh, VIC 3166
              </span>
            </p>
          </address>
          <Link
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-gorilla-blue underline-offset-4 hover:text-gorilla-yellow hover:underline"
          >
            Get directions in Google Maps
          </Link>
        </div>
        <div>
          <h3 className="font-heading text-xl text-white">Contact</h3>
          <p className="mt-4 flex flex-wrap items-center gap-2 text-[#E5E5E5]">
            <Phone className="h-4 w-4 text-white/45" aria-hidden />
            <a href="tel:+61399961567" className="transition hover:text-gorilla-blue">
              (03) 9996 1567
            </a>
            <span className="text-white/40">|</span>
            <a href="tel:+61413888773" className="transition hover:text-gorilla-blue">
              0413 888 773
            </a>
          </p>
          <p className="mt-2">
            <a
              href="mailto:info.gorillaink@gmail.com"
              className="text-[#E5E5E5] transition hover:text-gorilla-yellow"
            >
              info.gorillaink@gmail.com
            </a>
          </p>
          <div className="mt-8">
            <h3 className="font-heading text-xl text-white">Opening Hours</h3>
            <ul className="mt-3 space-y-1 text-[#E5E5E5]">
              <li>Wed – Fri: 11am – 7pm</li>
              <li>Sat: 11am – 5pm</li>
              <li>Sun – Tue: By Appointment</li>
            </ul>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="https://www.instagram.com/gorillaink.tattoos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gorilla-blue hover:text-gorilla-blue"
              aria-label="Gorilla Ink on Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gorilla-yellow/80 hover:text-gorilla-yellow"
              aria-label="Gorilla Ink on Facebook"
            >
              <FacebookIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-6xl border-t border-white/10 px-4 pt-8 text-center text-sm text-white/50 md:px-6">
        © {new Date().getFullYear()} Gorilla Ink Tattoo Studio. All rights reserved.
      </p>
      <p className="mx-auto mt-4 max-w-6xl px-4 text-center text-xs text-white/35 md:px-6">
        Built and maintained by{" "}
        <a
          href={SITE_CREDIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gorilla-blue underline-offset-4 hover:text-gorilla-yellow hover:underline"
        >
          Bright Path Creative
        </a>
        .
      </p>
    </footer>
  );
}
