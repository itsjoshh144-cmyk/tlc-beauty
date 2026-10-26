import type { Metadata } from "next";
import { BookButton } from "@/components/Buttons";
import { FinalCta } from "@/components/home";
import { ImageSlot } from "@/components/ImageSlot";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Tania",
  description:
    "Meet Tania Lena Cahalane, NVQ Level 2 & 3 qualified beauty therapist with more than 25 years' experience, working one-to-one at Allure Beauty Suites, Peacehaven.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "One therapist, every time", copy: "You see Tania at every appointment. She remembers your skin, your preferences and what worked last time." },
  { title: "Honest advice", copy: "If a cheaper treatment will do the job, she'll tell you. If something isn't right for your skin, she'll say so." },
  { title: "Clinical where it counts", copy: "Clinicare facials, peels, microdermabrasion and microneedling for results you can see, not just a nice hour." },
  { title: "Calm, private, unhurried", copy: "A quiet suite on South Coast Road with no busy reception and no being rushed out the door." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Twenty-five years of <em className="text-gold-ink">getting it right</em></>}
        intro={`${site.owner} is a beauty therapist qualified to NVQ Level 2 and 3, working one-to-one from Allure Beauty Suites in Peacehaven.`}
      />
      <section className="section-y">
        <div className="container-lux grid items-start gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal className="mx-auto w-full max-w-md lg:sticky lg:top-28">
            <ImageSlot slot={images.taniaPortrait} className="arch aspect-[4/5]" tint="stone" />
          </Reveal>
          <Reveal className="space-y-6 text-lg leading-relaxed text-cocoa">
            <p className="font-display text-3xl leading-snug text-espresso">
              &ldquo;I still love the moment a client looks in the mirror and smiles. After 25 years, that hasn&rsquo;t changed.&rdquo;
            </p>
            <p>
              Tania has worked in beauty for more than a quarter of a century. In that time she has seen almost every skin type, brow shape and
              lash there is, and built her menu around the clinical skincare she believes in.
            </p>
            <p>
              She works alone, by appointment, so every visit is one-to-one. There is no team to be passed between and no upselling script.
              Just someone experienced, listening to what you want and telling you honestly how to get there.
            </p>
            <p>
              Clients travel from {site.areas.slice(1, -1).join(", ")} and {site.areas.at(-1)} to the suite at {site.address.street}, Peacehaven. Many have been coming
              for years.
            </p>
            <div className="!mt-10">
              <BookButton />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-y bg-sand/60">
        <div className="container-lux">
          <Reveal>
            <p className="eyebrow">What to expect</p>
            <h2 className="h-display mt-4 max-w-2xl text-[2.4rem] sm:text-5xl">How Tania works</h2>
          </Reveal>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.08} className="border-t border-gold/40 pt-6">
                <h3 className="h-display text-2xl">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-cocoa">{v.copy}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-y">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2">
          <ImageSlot slot={images.suite} className="aspect-[4/3] rounded-[1.75rem]" />
          <Reveal>
            <p className="eyebrow">The suite</p>
            <h2 className="h-display mt-4 text-[2.4rem] sm:text-5xl">A quiet room on South Coast Road</h2>
            <p className="mt-5 text-lg leading-relaxed text-cocoa">
              Tania works from her own private suite inside Allure Beauty Suites, {site.address.street}, Peacehaven {site.address.postcode}.
              Warm, calm and spotless, with everything prepared before you arrive.
            </p>
          </Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
