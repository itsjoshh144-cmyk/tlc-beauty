import Image from "next/image";
import type { Slot } from "@/lib/images";
import { Monogram } from "./Monogram";

type Props = {
  slot: Slot;
  className?: string;
  sizes?: string;
  priority?: boolean;
  tint?: "sand" | "stone" | "espresso";
  style?: React.CSSProperties;
};

// Renders a real photo when one is set, otherwise a clearly marked photo slot.
export function ImageSlot({ slot, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", priority, tint = "sand", style }: Props) {
  if (slot.src) {
    return (
      <div style={style} className={`${className.includes("absolute") ? "" : "relative "}overflow-hidden ${className}`}>
        <Image src={slot.src} alt={slot.alt} fill sizes={sizes} priority={priority} className="object-cover" style={slot.position ? { objectPosition: slot.position } : undefined} />
      </div>
    );
  }
  const bg =
    tint === "espresso"
      ? "bg-[radial-gradient(120%_90%_at_30%_20%,#4a3a30_0%,#2b211c_70%)] text-gold-soft"
      : tint === "stone"
        ? "bg-[radial-gradient(120%_90%_at_30%_20%,#f3eadc_0%,#e3d6c3_80%)] text-gold-ink"
        : "bg-[radial-gradient(120%_90%_at_30%_20%,#fbf6ee_0%,#efe5d6_75%)] text-gold-ink";
  // No photo yet: a quiet branded panel with the TLC seal.
  return (
    <div aria-hidden style={style} className={`${className.includes("absolute") ? "" : "relative "}flex items-center justify-center overflow-hidden ${bg} ${className}`}>
      <Monogram className="size-28 opacity-35" tone={tint === "espresso" ? "cream" : "gold"} decorative />
    </div>
  );
}
