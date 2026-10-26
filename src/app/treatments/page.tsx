import type { Metadata } from "next";
import { FinalCta } from "@/components/home";
import { PageHero } from "@/components/PageHero";
import { TreatmentBuilder } from "@/components/TreatmentBuilder";

export const metadata: Metadata = {
  title: "Treatments & Prices",
  description:
    "Full price list for facials, Clinicare peels, microneedling, waxing, gel nails, BIAB, lash lifts, brow lamination and massage in Peacehaven. Build your visit and book online.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments & prices"
        title={<>Build your <em className="text-gold-ink">visit</em></>}
        intro="Every treatment is carried out by Tania herself. Tap to add treatments and see your total time and price, then book the same ones in Timely."
      />
      <section className="py-14 pb-40 lg:py-20">
        <div className="container-lux">
          <TreatmentBuilder />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
