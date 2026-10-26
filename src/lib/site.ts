// Business details used across the site. Anything still to be supplied is
// marked TODO and rendered on the page as a visible "to add" slot.

export const site = {
  name: "TLC Beauty Specialist",
  owner: "Tania Lena Cahalane",
  ownerShort: "Tania",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tlc-beauty.vercel.app",
  bookingUrl:
    "https://bookings.gettimely.com/allurebeautysuites/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F258807%3Fmobile%3DTrue",
  phoneDisplay: "07841 709929",
  phoneHref: "tel:+447841709929",
  whatsappHref: "https://wa.me/447841709929",
  instagramHandle: "@tlc.beautyspecialist",
  instagramUrl: "https://www.instagram.com/tlc.beautyspecialist/",
  address: {
    venue: "Allure Beauty Suites",
    street: "226 South Coast Road",
    town: "Peacehaven",
    county: "East Sussex",
    postcode: "BN10 8JR",
  },
  geo: { lat: 50.7926, lng: -0.0006 },
  mapEmbed:
    "https://www.google.com/maps?q=Allure+Beauty+Suites,+226+South+Coast+Road,+Peacehaven,+BN10+8JR&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Allure+Beauty+Suites+226+South+Coast+Road+Peacehaven+BN10+8JR",
  hours: [
    { day: "Wednesday", open: "09:00", close: "17:00", label: "9am – 5pm" },
    { day: "Friday", open: "09:00", close: "17:00", label: "9am – 5pm" },
  ],
  hoursSummary: "Wednesdays & Fridays, 9am – 5pm",
  areas: ["Peacehaven", "Newhaven", "Saltdean", "Rottingdean", "Telscombe", "Seaford", "Brighton"],

  // TODO slots: fill these in and the "to add" markers disappear.
  rating: null as null | { value: number; count: number; source: string },
  googleReviewUrl: null as null | string,
  newClientOffer: null as null | string,
  giftVouchers: null as null | string,
  parking: null as null | string,
  cancellationPolicy: null as null | string,
} as const;

export function waLink(text?: string) {
  return text ? `${site.whatsappHref}?text=${encodeURIComponent(text)}` : site.whatsappHref;
}

export const fullAddress = `${site.address.venue}, ${site.address.street}, ${site.address.town}, ${site.address.county} ${site.address.postcode}`;
