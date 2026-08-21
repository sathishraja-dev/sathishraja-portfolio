import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are all required." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error(
        "RESEND_API_KEY is not set in this environment — contact form cannot send email.",
      );
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "er.sathishraja@gmail.com",
      replyTo: email,
      subject: `New Lead: ${name} via sathishraja.com`,
      text: `Customer Name: ${name}\nCustomer Email: ${email}\n\nMessage Payload:\n${message}`,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Email service rejected the request." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    const message =
      error instanceof Error ? error.message : "Internal connection failure.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
