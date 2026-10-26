import { NextResponse } from "next/server";

// Sends contact form messages to the owner via Resend (https://resend.com).
// Set RESEND_API_KEY and CONTACT_TO_EMAIL in Vercel. CONTACT_FROM_EMAIL is
// optional and must be on a domain verified in Resend.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Bad request" }, { status: 400 });

  const { name, contact, treatment, message, company } = body as Record<string, string | undefined>;
  if (company) return NextResponse.json({ ok: true }); // honeypot hit
  if (!name?.trim() || !contact?.trim() || !message?.trim() || message.length > 5000) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    return NextResponse.json({ error: "Contact email is not configured yet" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "TLC Beauty website <onboarding@resend.dev>",
      to: [to],
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nContact: ${contact}\nTreatment: ${treatment || "-"}\n\n${message}`,
    }),
  });

  return res.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Send failed" }, { status: 502 });
}
