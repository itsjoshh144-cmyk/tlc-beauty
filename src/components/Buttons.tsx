import { site, waLink } from "@/lib/site";
import { IconArrow, IconWhatsApp } from "./Icons";

type Variant = "dark" | "light" | "outline" | "gold";

const styles: Record<Variant, string> = {
  dark: "bg-espresso text-cream hover:bg-[#3a2d26]",
  light: "bg-cream text-espresso hover:bg-ivory",
  gold: "bg-gold-soft text-espresso hover:bg-[#d4b67c]",
  outline: "border border-espresso/25 text-espresso hover:border-espresso hover:bg-espresso/[0.03]",
};

const shape =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 text-[0.95rem] font-semibold tracking-wide transition-all duration-300 ease-lux";

export function BookButton({
  children = "Book with Tania",
  variant = "dark",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a href={site.bookingUrl} target="_blank" rel="noopener" className={`${shape} ${styles[variant]} ${className}`}>
      {children}
      <IconArrow className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      <span className="sr-only"> (opens Timely booking in a new tab)</span>
    </a>
  );
}

export function WhatsAppButton({
  children = "Message on WhatsApp",
  text,
  variant = "outline",
  className = "",
}: {
  children?: React.ReactNode;
  text?: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a href={waLink(text)} target="_blank" rel="noopener" className={`${shape} ${styles[variant]} ${className}`}>
      <IconWhatsApp className="size-5" />
      {children}
    </a>
  );
}
