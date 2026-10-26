import { JsonLd } from "@/components/JsonLd";
import { BeforeAfterSection, Faq, FinalCta, GiftVouchers, Hero, HowBooking, Instagram, MeetTania, Reviews, Signature, TrustBar } from "@/components/home";
import { faqSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Signature />
      <MeetTania />
      <BeforeAfterSection />
      <Reviews />
      <HowBooking />
      <GiftVouchers />
      <Faq />
      <Instagram />
      <FinalCta />
      <JsonLd data={faqSchema()} />
    </>
  );
}
