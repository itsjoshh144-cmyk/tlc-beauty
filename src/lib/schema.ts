import { faqs } from "./faqs";
import { site } from "./site";
import { categories, treatments } from "./treatments";

export function salonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${site.url}/#salon`,
    name: site.name,
    description:
      "Clinical facials, lash lifts, waxing, nails and massage with Tania Lena Cahalane, NVQ Level 2 & 3 qualified beauty therapist with 25+ years' experience.",
    url: site.url,
    image: `${site.url}/opengraph-image`,
    telephone: "+447841709929",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.venue}, ${site.address.street}`,
      addressLocality: site.address.town,
      addressRegion: site.address.county,
      postalCode: site.address.postcode,
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapLink,
    areaServed: site.areas.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.open,
      closes: h.close,
    })),
    sameAs: [site.instagramUrl],
    founder: { "@type": "Person", name: site.owner, jobTitle: "Beauty Therapist" },
    potentialAction: { "@type": "ReserveAction", target: site.bookingUrl },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Treatments",
      itemListElement: categories.map((c) => ({
        "@type": "OfferCatalog",
        name: c.name,
        itemListElement: treatments
          .filter((t) => t.category === c.name)
          .map((t) => ({
            "@type": "Offer",
            price: t.price,
            priceCurrency: "GBP",
            itemOffered: { "@type": "Service", name: t.name },
          })),
      })),
    },
    ...(site.rating
      ? { aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating.value, reviewCount: site.rating.count } }
      : {}),
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs
      .filter((f) => f.a)
      .map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
