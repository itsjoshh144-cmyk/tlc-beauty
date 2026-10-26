import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { ReviewsCarousel } from "./ReviewsCarousel";

export function Reviews() {
  return (
    <section className="section-y bg-espresso text-cream">
      <div className="container-lux">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading align="left" tone="light" eyebrow="What clients say" title={<>Kind words from <em className="text-gold-soft">the chair</em></>} />
          <Reveal className="text-sm text-cream/75">
            {site.rating && (
              <p>
                Rated {site.rating.value.toFixed(1)} from {site.rating.count} reviews on {site.rating.source}
              </p>
            )}
            <Link href="/reviews" className="mt-3 block font-semibold text-gold-soft underline underline-offset-4">
              Read all reviews
            </Link>
          </Reveal>
        </div>
        <Reveal className="mt-12">
          <ReviewsCarousel />
        </Reveal>
      </div>
    </section>
  );
}
