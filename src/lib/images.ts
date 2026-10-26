// Every photo on the site is referenced by a slot key. Drop the file into
// /public/images and set its path here; until then the slot renders as a
// clearly marked placeholder (never a stock photo).

export type Slot = { src: string | null; alt: string; label: string };

const slot = (label: string, alt: string, src: string | null = null): Slot => ({ src, alt, label });

export const images = {
  heroTania: slot("Tania at work, portrait", "Tania Cahalane carrying out a facial at Allure Beauty Suites, Peacehaven"),
  taniaPortrait: slot("Tania, head and shoulders", "Tania Cahalane, beauty therapist in Peacehaven"),
  suite: slot("The treatment suite", "The private treatment room at Allure Beauty Suites, Peacehaven"),
  sigLash: slot("Lash lift result", "Lash lift and tint result by Tania in Peacehaven"),
  sigFacial: slot("Carboxy facial in progress", "Clinicare Carboxy Facial treatment in Peacehaven"),
  sigWax: slot("Waxing room / hot wax", "Hot wax being prepared for a Hollywood wax"),
  before: slot("Before photo", "Client skin before treatment"),
  after: slot("After photo", "The same client's skin after treatment"),
  voucher: slot("Gift voucher photo", "TLC Beauty Specialist gift voucher"),
  gallery: [
    slot("Lash lift result", "Lash lift result"),
    slot("Brow lamination result", "Brow lamination result"),
    slot("Facial glow, after", "Skin after a Clinicare facial"),
    slot("Gel manicure", "Gel manicure by Tania"),
    slot("BIAB nails", "BIAB nails by Tania"),
    slot("The suite", "Treatment suite at Allure Beauty Suites"),
    slot("Lash & brow tint", "Lash and brow tint result"),
    slot("Gel pedicure", "Gel pedicure by Tania"),
    slot("Hot stone massage set-up", "Hot stone massage set-up"),
  ],
} satisfies Record<string, Slot | Slot[]>;
