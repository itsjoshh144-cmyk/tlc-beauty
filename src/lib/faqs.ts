import { fullAddress, site } from "./site";

export type Faq = { q: string; a: string | null; todo?: string };

export const faqs: Faq[] = [
  {
    q: "I've never had a facial. Which should I choose?",
    a: "Start with the Express & Glow Facial (30 mins, £35), or message Tania and she'll recommend one for your skin.",
  },
  { q: "How long does a lash lift last?", a: "Usually six to eight weeks, as your natural lashes grow through." },
  {
    q: "Do I need a patch test?",
    a: "Yes, for tints, lash lifts and brow lamination, at least 48 hours before your appointment. Message Tania to arrange it.",
  },
  { q: "Is hot wax painful?", a: "Most clients find it far gentler than strip wax, especially on intimate areas, because it grips the hair rather than the skin." },
  { q: "Can I cancel or move my booking?", a: site.cancellationPolicy, todo: "cancellation policy" },
  {
    q: "Do you sell gift vouchers?",
    a: site.giftVouchers ? `Yes. ${site.giftVouchers}` : null,
    todo: "how gift vouchers are sold",
  },
  { q: "Where exactly are you?", a: `${fullAddress}. Tania is there on ${site.hoursSummary}.` },
  { q: "Is there parking?", a: site.parking, todo: "parking details" },
];
