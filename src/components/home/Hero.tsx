import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { BookButton, WhatsAppButton } from "../Buttons";
import { IconClock } from "../Icons";
import { ImageSlot } from "../ImageSlot";
import { Monogram } from "../Monogram";

export function Hero() {
  return (
    <section className="relative -mt-[4.5rem] overflow-hidden pt-[4.5rem]">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.22),transparent_65%)]" />
      <div className="container-lux grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-28 lg:pt-16">
        <div>
          <div>
            <p className="eyebrow">Peacehaven · East Sussex</p>
          </div>
          <div>
            <h1 className="h-display mt-5 text-[2.45rem] sm:text-6xl lg:text-[4.4rem] xl:text-[4.9rem]">
              Brighter skin and lifted lashes, by a Peacehaven therapist with{" "}
              <em className="text-gold-ink">25 years&rsquo;</em> experience.
            </h1>
          </div>
          <div>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cocoa">
              Clinical facials, lash lifts, waxing, nails and massage with Tania Cahalane at Allure Beauty Suites. One therapist, one quiet
              room, and an hour that is entirely about you.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row hero-in">
            <BookButton />
            <WhatsAppButton text="Hi Tania, I'd like to ask about a treatment." />
          </div>
          <div>
            <p className="mt-6 flex items-center gap-2 text-sm text-cocoa">
              <IconClock className="size-4 text-gold-ink" />
              {site.hoursSummary} · Book online to see available times
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none hero-in [animation-delay:120ms]">
          <div className="arch relative aspect-[4/5] w-full p-2 ring-1 ring-gold/40">
            <ImageSlot slot={images.heroTania} priority className="arch size-full" sizes="(min-width: 1024px) 40vw, 90vw" />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-full bg-cream p-1.5 shadow-[0_10px_40px_-12px_rgba(43,33,28,0.35)] sm:-left-10">
            <Monogram className="size-28 sm:size-32" />
          </div>
          <div className="absolute -right-2 top-10 rounded-2xl bg-ivory/95 px-5 py-4 shadow-[0_10px_40px_-14px_rgba(43,33,28,0.35)] backdrop-blur sm:-right-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cocoa">Wed &amp; Fri · 9am – 5pm</p>
            <p className="h-display mt-1 text-2xl">Book online, 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
