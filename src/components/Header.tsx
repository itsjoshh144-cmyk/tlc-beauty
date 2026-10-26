"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { IconArrow, IconClose } from "./Icons";
import { nav } from "@/lib/nav";
import { Wordmark } from "./Wordmark";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuTop, setMenuTop] = useState(72);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (open && headerRef.current) setMenuTop(headerRef.current.getBoundingClientRect().bottom);
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 transition-[background,box-shadow] duration-500 ${
        open ? "bg-cream" : scrolled ? "bg-cream/90 shadow-[0_1px_0_rgba(43,33,28,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-lux flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" aria-label="TLC Beauty Specialist, home">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="relative text-sm font-medium text-espresso/80 transition-colors hover:text-espresso aria-[current=page]:text-espresso after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-espresso px-6 text-sm font-semibold text-cream transition-colors hover:bg-[#3a2d26] sm:inline-flex"
          >
            Book now <IconArrow className="size-3.5" />
          </a>
          <button
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <IconClose />
            ) : (
              <span aria-hidden className="flex w-6 flex-col gap-1.5">
                <span className="h-px w-full bg-espresso" />
                <span className="h-px w-4 bg-espresso" />
              </span>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        style={{ top: menuTop }}
        className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto border-t border-espresso/10 bg-cream lg:hidden"
      >
        <nav aria-label="Mobile" className="container-lux flex flex-col pb-32 pt-6">
          <Link href="/" className="border-b border-espresso/10 py-4 font-display text-3xl">
            Home
          </Link>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="border-b border-espresso/10 py-4 font-display text-3xl">
              {item.label}
            </Link>
          ))}
          <p className="mt-8 text-sm text-cocoa">{site.hoursSummary}</p>
          <a href={site.phoneHref} className="mt-1 text-sm font-semibold text-espresso">
            {site.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
