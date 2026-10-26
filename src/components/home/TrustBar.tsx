import { site } from "@/lib/site";
import { IconStar } from "../Icons";

export function TrustBar() {
  const items = [
    { big: "NVQ 2 & 3", small: "Fully qualified therapist" },
    { big: "25+ years", small: "Experience in beauty" },
    site.rating ? { big: "rating", small: "" } : { big: "Clinicare", small: "Clinical skincare" },
    { big: "One-to-one", small: "Private suite in Peacehaven" },
  ];
  return (
    <section aria-label="Why clients trust Tania" className="border-y border-gold/25 bg-ivory">
      <ul className="container-lux grid grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <li
            key={i}
            className={`flex flex-col items-center justify-center gap-1 px-3 py-7 text-center ${i % 2 ? "border-l border-gold/20" : ""} ${i > 1 ? "border-t border-gold/20 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:border-gold/20" : ""}`}
          >
            {item.big === "rating" ? (
              site.rating ? (
                <>
                  <span className="flex items-center gap-1 text-gold" aria-hidden>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <IconStar key={s} />
                    ))}
                  </span>
                  <span className="h-display text-2xl">
                    {site.rating.value.toFixed(1)} from {site.rating.count} reviews
                  </span>
                  <span className="text-xs uppercase tracking-[0.14em] text-cocoa">{site.rating.source}</span>
                </>
              ) : null
            ) : (
              <>
                <span className="h-display text-[1.75rem] sm:text-3xl">{item.big}</span>
                <span className="text-xs uppercase tracking-[0.14em] text-cocoa">{item.small}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
