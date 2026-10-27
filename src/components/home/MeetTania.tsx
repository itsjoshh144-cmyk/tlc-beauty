import Link from "next/link";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { IconArrow, IconCheck } from "../Icons";
import { ImageSlot } from "../ImageSlot";
import { Reveal } from "../Reveal";

export function MeetTania() {
  return (
    <section className="section-y bg-sand/60">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-md">
          <ImageSlot slot={images.taniaPortrait} className="arch aspect-[4/5]" sizes="(min-width: 1024px) 40vw, 90vw" tint="stone" />
          <div aria-hidden className="arch absolute -inset-3 -z-10 border border-gold/40" />
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow">Meet your therapist</p>
            <h2 className="h-display mt-4 text-[2.4rem] sm:text-5xl lg:text-[3.6rem]">
              Hello, I&rsquo;m <em className="text-gold-ink">Tania.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-7 space-y-5 text-lg leading-relaxed text-cocoa">
            <p>
              I&rsquo;ve been a beauty therapist for more than 25 years, qualified to NVQ Level 3, and I still love the moment a client
              looks in the mirror and smiles.
            </p>
            <p>
              I have my own private treatment room inside Allure Beauty Suites, a friendly beauty clinic in Peacehaven that I share with
              other skilled practitioners. You&rsquo;ll see me at every appointment, you&rsquo;ll never be rushed, and I&rsquo;ll remember
              your skin from one visit to the next.
            </p>
            <p>Clients come from {site.areas.slice(1, -1).join(", ")} and {site.areas.at(-1)}, and most of them have been coming back for years.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["NVQ Level 2 & 3 qualified", "25+ years' experience", "Clinicare clinical facials", "Patch tests for tints & lifts"].map((q) => (
                <li key={q} className="flex items-center gap-3 text-sm font-medium">
                  <span className="flex size-6 items-center justify-center rounded-full bg-espresso text-gold-soft">
                    <IconCheck className="size-3.5" />
                  </span>
                  {q}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-4">
              <span aria-hidden className="h-px w-10 bg-gold" />
              <p>
                <span className="block font-display text-3xl italic text-gold-ink">Tania Lena Cahalane</span>
                <span className="eyebrow !text-[0.65rem] !text-cocoa">Beauty therapist · NVQ Level 3</span>
              </p>
            </div>
            <Link href="/about" className="group mt-6 inline-flex min-h-12 items-center gap-2 font-semibold">
              More about Tania
              <IconArrow className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
