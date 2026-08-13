import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Dispatches the notification payload directly to your personal email address
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "er.sathishraja@gmail.com",
      replyTo: email, // CRITICAL: Points the reply address header straight to the customer's input email
      subject: `New Lead: ${name} via sathishraja.com`,
      text: `Customer Name: ${name}\nCustomer Email: ${email}\n\nMessage Payload:\n${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal connection failure." },
      { status: 500 },
    );
  }
}
