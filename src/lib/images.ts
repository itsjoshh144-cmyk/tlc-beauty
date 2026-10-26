// Every photo on the site is referenced by a slot key. Drop the file into
// /public/images and set its path here; until then the slot renders as a
// clearly marked placeholder (never a stock photo).

export type Slot = { src: string | null; alt: string; label: string; position?: string; ratio?: string };

const slot = (label: string, alt: string, src: string | null = null, position?: string): Slot => ({ src, alt, label, position });

export const images = {
  heroTania: slot("Tania, portrait", "Tania Cahalane, TLC Beauty Specialist, in her treatment room in Peacehaven", "/images/tania-menu-portrait.jpg", "50% 22%"),
  taniaPortrait: slot("Tania, head and shoulders", "Tania Cahalane, beauty therapist at Allure Beauty Suites, Peacehaven", "/images/tania-portrait.jpg", "62% 30%"),
  suite: slot("The treatment suite", "The private treatment room at Allure Beauty Suites, Peacehaven"),
  sigLash: slot("Lash lift result", "Lash lift and tint result by Tania in Peacehaven"),
  sigFacial: slot("Facial in progress", "Tania carrying out a facial on a client in Peacehaven", "/images/facial-in-progress.jpg", "30% 50%"),
  sigWax: slot("Waxing room / hot wax", "Hot wax being prepared for a Hollywood wax"),
  before: slot("Before photo", "A client's brows before treatment with Tania", "/images/brows-before.jpg"),
  after: slot("After photo", "The same client's brows after treatment with Tania", "/images/brows-after.jpg"),
  voucher: slot("Gift voucher photo", "TLC Beauty Specialist gift voucher"),
  gallery: [
    { ...slot("Brow lamination, after", "Brow lamination result by Tania: full, brushed-up brows", "/images/brow-lamination-after.jpg"), ratio: "1009 / 352" },
    slot("Brows, after", "A client's brows after treatment with Tania", "/images/brows-after.jpg"),
    slot("Facial in progress", "Tania carrying out a facial", "/images/facial-in-progress.jpg", "30% 50%"),
    { ...slot("Brow lamination, before", "A client's brows before brow lamination", "/images/brow-lamination-before.jpg"), ratio: "1009 / 346" },
    slot("Brows, before", "A client's brows before treatment", "/images/brows-before.jpg"),
    slot("Lash lift result", "Lash lift result"),
    slot("Gel manicure", "Gel manicure by Tania"),
    slot("BIAB nails", "BIAB nails by Tania"),
    slot("The suite", "Treatment suite at Allure Beauty Suites"),
    slot("Lash & brow tint", "Lash and brow tint result"),
    slot("Gel pedicure", "Gel pedicure by Tania"),
    slot("Hot stone massage set-up", "Hot stone massage set-up"),
  ],
} satisfies Record<string, Slot | Slot[]>;
