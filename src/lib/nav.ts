import { hasReviews } from "./reviews";

export const nav = [
  { href: "/treatments", label: "Treatments" },
  { href: "/about", label: "About Tania" },
  { href: "/gallery", label: "Gallery" },
  ...(hasReviews ? [{ href: "/reviews", label: "Reviews" }] : []),
  { href: "/contact", label: "Contact" },
];
