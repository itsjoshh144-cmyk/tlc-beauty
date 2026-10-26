import { BookButton } from "../Buttons";
import { Reveal } from "../Reveal";
import { BeforeAfter } from "./BeforeAfter";

export function Results() {
  return (
    <section className="section-y overflow-hidden">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:order-2">
          <Reveal>
            <p className="eyebrow">Results</p>
            <h2 className="h-display mt-4 text-[2.4rem] sm:text-5xl lg:text-[3.6rem]">
              Real clients, real results. <em className="text-gold-ink">No filters.</em>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cocoa">
              Drag the slider to see the difference. Every photo is one of Tania&rsquo;s own clients, shared with their permission.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 grid max-w-md grid-cols-3 gap-6 border-t border-gold/30 pt-8">
            {[
              ["6–8", "weeks from a lash lift"],
              ["40+", "treatments on the menu"],
              ["1", "therapist, every visit"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="h-display text-4xl text-gold-ink">{n}</p>
                <p className="mt-1 text-xs leading-snug text-cocoa">{l}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <BookButton>Book your treatment</BookButton>
          </Reveal>
        </div>
        <Reveal y={40}>
          <BeforeAfter />
        </Reveal>
      </div>
    </section>
  );
}
