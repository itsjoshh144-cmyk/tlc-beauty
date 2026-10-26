import { site } from "@/lib/site";
import { IconCalendar, IconPhone, IconWhatsApp } from "./Icons";

// Sticky booking bar for phones: the main conversion route on mobile.
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-espresso/10 bg-cream px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_-16px_rgba(43,33,28,0.3)] md:hidden">
      <div className="flex gap-2">
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener"
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-espresso text-[0.95rem] font-semibold text-cream"
        >
          <IconCalendar className="size-[18px]" /> Book now
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener"
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-espresso/20 bg-ivory text-[0.95rem] font-semibold text-espresso"
        >
          <IconWhatsApp className="size-[18px] text-[#1f7a4d]" /> WhatsApp
        </a>
        <a
          href={site.phoneHref}
          aria-label={`Call Tania on ${site.phoneDisplay}`}
          className="flex size-12 shrink-0 items-center justify-center rounded-full border border-espresso/20 bg-ivory text-espresso"
        >
          <IconPhone className="size-[18px]" />
        </a>
      </div>
    </div>
  );
}
