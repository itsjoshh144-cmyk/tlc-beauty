"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type State = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="rounded-[1.5rem] bg-sand p-8">
        <p className="h-display text-3xl">Thank you.</p>
        <p className="mt-3 text-cocoa">Tania will reply as soon as she can. If it&rsquo;s urgent, WhatsApp is quickest.</p>
      </div>
    );
  }

  const field =
    "mt-2 block min-h-12 w-full rounded-xl border border-espresso/20 bg-ivory px-4 py-3 text-base text-espresso placeholder:text-cocoa/60 focus:border-espresso focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Your name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-semibold">
          Phone or email
          <input name="contact" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block text-sm font-semibold">
        Treatment you&rsquo;re interested in <span className="font-normal text-cocoa">(optional)</span>
        <input name="treatment" className={field} />
      </label>
      <label className="block text-sm font-semibold">
        Message
        <textarea name="message" required rows={5} className={`${field} resize-y`} />
      </label>
      {/* Honeypot: hidden from people, catches bots */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-espresso px-8 font-semibold text-cream transition-colors hover:bg-[#3a2d26] disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Send message"}
      </button>
      {state === "error" && (
        <p role="alert" className="text-sm text-[#8a2f2f]">
          Sorry, that didn&rsquo;t send. Please message Tania on{" "}
          <a className="underline" href={site.whatsappHref}>
            WhatsApp
          </a>{" "}
          or call {site.phoneDisplay}.
        </p>
      )}
    </form>
  );
}
