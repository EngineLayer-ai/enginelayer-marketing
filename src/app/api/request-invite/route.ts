import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { company, role, trade, revenue, location, pain } = data;

    // Format the email body
    const body = [
      `Company: ${company || "—"}`,
      `Role: ${role || "—"}`,
      `Primary trade: ${trade || "—"}`,
      `Approx. revenue: ${revenue || "—"}`,
      `Location: ${location || "—"}`,
      ``,
      `Pain point:`,
      pain || "(not provided)",
    ].join("\n");

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // Fallback: log to server console if Resend is not configured
      console.log("=== NEW INVITE REQUEST ===");
      console.log(body);
      console.log("=========================");
      return NextResponse.json({ ok: true, method: "logged" });
    }

    // Send via Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "EngineLayer <noreply@enginelayer.ai>",
        to: "ryan.ford@enginelayer.ai",
        subject: `Invite request from ${company || "Unknown"}`,
        text: body,
      }),
    });

    const resBody = await res.text();

    if (!res.ok) {
      console.error("Resend error:", resBody);
      return NextResponse.json({ ok: false, method: "resend_error", detail: resBody }, { status: 500 });
    }

    return NextResponse.json({ ok: true, method: "resend", detail: resBody });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
