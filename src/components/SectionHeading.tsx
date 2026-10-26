import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p className={`eyebrow ${tone === "light" ? "!text-gold-soft" : ""}`}>{eyebrow}</p>
      <h2 className={`h-display mt-4 text-[2.4rem] sm:text-5xl lg:text-[3.6rem] ${tone === "light" ? "text-cream" : ""}`}>{title}</h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${tone === "light" ? "text-cream/80" : "text-cocoa"}`}>{intro}</p>
      )}
    </Reveal>
  );
}
