const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: "Gorilla Ink Tattoo Studio",
    description:
      "Tattoo studio in Oakleigh, Melbourne specializing in black and grey, fine line, and Japanese tattoo art.",
    ...(siteUrl ? { url: siteUrl, image: `${siteUrl.replace(/\/$/, "")}/gorilla-logo.jpg` } : {}),
    telephone: ["+61399961567", "+61413888773"],
    email: "info.gorillaink@gmail.com",
    sameAs: [
      "https://www.instagram.com/gorillaink.tattoos/",
      "https://www.facebook.com/gorillaink.aus",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "First Floor, 53A Warrigal Road",
      addressLocality: "Hughesdale-Oakleigh",
      addressRegion: "VIC",
      postalCode: "3166",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -37.9035,
      longitude: 145.0842,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday", "Friday"],
        opens: "11:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "11:00",
        closes: "17:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Melbourne",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "63",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
