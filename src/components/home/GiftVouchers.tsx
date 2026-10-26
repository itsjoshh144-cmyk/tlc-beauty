import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { WhatsAppButton } from "../Buttons";
import { IconGift } from "../Icons";
import { ImageSlot } from "../ImageSlot";
import { Reveal } from "../Reveal";
import { Todo } from "../Todo";

export function GiftVouchers() {
  return (
    <section id="gift-vouchers" className="scroll-mt-24 pb-20 lg:pb-32">
      <div className="container-lux">
        <div className="grid overflow-hidden rounded-[2rem] bg-sand lg:grid-cols-2">
          <ImageSlot slot={images.voucher} className="min-h-72 lg:min-h-full" sizes="(min-width: 1024px) 50vw, 100vw" tint="stone" />
          <Reveal className="p-8 sm:p-12 lg:p-16">
            <span className="flex size-12 items-center justify-center rounded-full bg-espresso text-gold-soft">
              <IconGift />
            </span>
            <p className="eyebrow mt-6">Gift vouchers</p>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              Give someone an hour of <em className="text-gold-ink">calm.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cocoa">
              Vouchers for any treatment or amount. Perfect for birthdays, Mother&rsquo;s Day, or a thank-you that actually gets used.
            </p>
            <div className="mt-6">
              {site.giftVouchers ? <p className="text-cocoa">{site.giftVouchers}</p> : <Todo>how vouchers are bought &amp; delivered</Todo>}
            </div>
            <WhatsAppButton className="mt-8" variant="dark" text="Hi Tania, I'd like to buy a gift voucher.">
              Ask Tania for a voucher
            </WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
