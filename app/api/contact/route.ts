import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, details, contactService } = await req.json();

    if (!name || !email || !details) {
      return NextResponse.json(
        { success: false, message: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    const serviceLabel = contactService ? contactService.toUpperCase() : "GENERAL";

    // Send email using Resend SDK
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["eugenewestley95@gmail.com"],
      subject: `New ${serviceLabel} Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h3>New Inquiry Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Type:</strong> ${contactService || "N/A"}</p>
        <p><strong>Details:</strong></p>
        <p>${details}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message || "Failed to send email." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
