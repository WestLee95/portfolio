"use server";

import { Resend } from "resend";
import { ContactEmail } from "@/app/emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface FormState {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string;
    email?: string;
    details?: string;
  };
}

export async function sendContactEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const details = formData.get("details") as string;
  const contactService = formData.get("contactService") as string;

  // Server-side validation
  const errors: FormState["errors"] = {};

  if (!name || !name.trim()) {
    errors.name = "Name is required.";
  } else if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
    errors.name = "Name can only contain letters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    errors.email = "A valid email address is required.";
  }

  if (!details || !details.trim()) {
    errors.details = "Project details cannot be empty.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["eugenewestley95@gmail.com"],
      subject: `New ${contactService ? contactService.toUpperCase() : "GENERAL"} Inquiry from ${name}`,
      replyTo: email,
      react: ContactEmail({ name, email, details, contactService }),
    });

    if (error) {
      return {
        success: false,
        message: error.message || "Failed to send email through Resend.",
      };
    }

    return {
      success: true,
      message: `Thank you, ${name}! Your inquiry has been sent successfully.`,
    };
  } catch (err: any) {
    return {
      success: false,
      message: err.message || "An unexpected error occurred on the server.",
    };
  }
}