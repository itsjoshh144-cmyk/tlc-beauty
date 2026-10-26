import Link from "next/link";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { BookButton } from "../Buttons";
import { IconArrow } from "../Icons";
import { ImageSlot } from "../ImageSlot";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const signature = [
  {
    name: "Lash Lift & Tint",
    short: "a lash lift",
    meta: "60 mins · £45",
    copy: "Your own lashes, curled and darkened for six to eight weeks. No extensions, no mascara, no fuss in the morning.",
    img: images.sigLash,
  },
  {
    name: "Clinicare Carboxy Facial",
    short: "a Carboxy facial",
    meta: "50 mins · £80",
    copy: "An oxygenating clinical facial for dull, tired or congested skin. You walk out visibly brighter, and it keeps working for days.",
    img: images.sigFacial,
  },
  {
    name: "Hollywood / Brazilian Hot Wax",
    short: "a hot wax",
    meta: "30 mins · £36",
    copy: "Hot wax grips the hair, not the skin, so it is quicker and gentler. Discreet, unhurried and done by someone who has done thousands.",
    img: images.sigWax,
  },
];

export function Signature() {
  return (
    <section className="section-y">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Signature treatments"
          title={<>The three clients <em className="text-gold-ink">come back for</em></>}
          intro="Tania offers more than forty treatments. These are the ones people book again and again."
        />
        <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-20 lg:gap-12">
          {signature.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.1} className="group">
              <div className="arch overflow-hidden p-1.5 ring-1 ring-gold/30">
                <ImageSlot
                  slot={t.img}
                  className="arch aspect-[4/5] transition-transform duration-700 ease-lux group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 30vw, 90vw"
                  tint={i === 1 ? "stone" : "sand"}
                />
              </div>
              <p className="eyebrow mt-7">{t.meta}</p>
              <h3 className="h-display mt-2 text-3xl">{t.name}</h3>
              <p className="mt-3 leading-relaxed text-cocoa">{t.copy}</p>
              <a href={site.bookingUrl} target="_blank" rel="noopener" className="group/link mt-5 inline-flex min-h-11 items-center gap-2 border-b border-gold/50 font-semibold text-espresso hover:border-espresso">
                Book {t.short}
                <IconArrow className="size-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-20">
          <BookButton>Book a signature treatment</BookButton>
          <Link href="/treatments" className="group inline-flex min-h-12 items-center gap-2 px-4 font-semibold text-espresso">
            See the full menu &amp; prices
            <IconArrow className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
