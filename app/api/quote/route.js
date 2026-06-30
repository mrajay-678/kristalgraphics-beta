import { Resend } from "resend";
import { NextResponse } from "next/server";
import { productOptionsByService, serviceOptions } from "@/data/quote";

const QUOTE_RECIPIENT = process.env.QUOTE_TO_EMAIL || "theajay678@gmail.com";
const QUOTE_FROM =
  process.env.QUOTE_FROM_EMAIL || "Kristal Graphics <onboarding@resend.dev>";

export const runtime = "nodejs";

const requiredFields = [
  "name",
  "email",
  "phone",
  "serviceType",
  "quantity",
  "deadline",
  "artwork",
  "privacyPolicy",
];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function labelFromOptions(options, value) {
  return (
    options.find((option) => option.value === value)?.label ||
    value ||
    "Not provided"
  );
}

function formatList(values, options = []) {
  if (!Array.isArray(values) || values.length === 0) return "Not provided";

  return values
    .map((value) => labelFromOptions(options, value))
    .filter(Boolean)
    .join(", ");
}

function validateQuote(body) {
  const missing = requiredFields.filter((field) => {
    const value = body[field];

    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === "boolean") return value !== true;

    return !String(value ?? "").trim();
  });

  if (missing.length > 0) {
    return `Missing required fields: ${missing.join(", ")}`;
  }

  if (!isValidEmail(body.email)) {
    return "Please provide a valid email address.";
  }

  return "";
}

function buildEmail(body) {
  const productOptions = productOptionsByService[body.serviceType] || [];
  const rows = [
    ["Name", body.name],
    ["Email", body.email],
    ["Phone", body.phone],
    ["Company Type", body.companyType],
    ["Service", labelFromOptions(serviceOptions, body.serviceType)],
    ["Products", formatList(body.products, productOptions)],
    ["Quantity", body.quantity],
    ["Deadline", body.deadline],
    ["Rush Service", body.rushService ? "Yes" : "No"],
    ["Artwork", formatList(body.artwork)],
    ["How They Heard About Us", body.hearAbout],
    ["Additional Notes", body.notes],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 14px;border-bottom:1px solid #eeeeee;font-weight:700;width:190px;color:#111111;">${escapeHtml(label)}</td>
          <td style="padding:12px 14px;border-bottom:1px solid #eeeeee;color:#222222;">${escapeHtml(value || "Not provided")}</td>
        </tr>
      `,
    )
    .join("");

  const text = rows
    .map(([label, value]) => `${label}: ${value || "Not provided"}`)
    .join("\n");

  return {
    subject: `New quote request from ${body.name}`,
    text,
    html: `
      <div style="margin:0;padding:24px;background:#f6f6f6;font-family:Arial,sans-serif;color:#111111;">
        <div style="max-width:720px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e8e8e8;">
          <div style="padding:24px 28px;background:#111111;color:#ffffff;">
            <p style="margin:0 0 6px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#FEBB12;">Kristal Graphics</p>
            <h1 style="margin:0;font-size:28px;line-height:1.2;">New Quote Request</h1>
          </div>
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
            ${htmlRows}
          </table>
        </div>
      </div>
    `,
  };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const validationError = validateQuote(body);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is missing.");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const email = buildEmail(body);

    const { error } = await resend.emails.send({
      from: QUOTE_FROM,
      to: QUOTE_RECIPIENT,
      replyTo: body.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });

    if (error) {
      throw new Error(
        error.message || "Resend could not send the quote email.",
      );
    }

    const { error: confirmationError } = await resend.emails.send({
      from: QUOTE_FROM,
      to: body.email,
      subject: "We've received your quote request",
      text: `Hi ${body.name},

Thank you for contacting Kristal Graphics.

We've received your quote request successfully. Our team will review your requirements and get back to you within 24 hours.

Regards,
Kristal Graphics Team`,
      html: `<div style="font-family:Arial;padding:40px">

                <h2>Hi ${escapeHtml(body.name)},</h2>

                <p>
                  Thank you for contacting <strong>Kristal Graphics</strong>.
                </p>

                <p>
                  We've received your quote request successfully.
                </p>

                <p>
                  Our team will review your requirements and get back to you within
                  <strong>24 hours</strong>.
                </p>

                <br/>

                <p>
                  Regards,<br/>
                  Kristal Graphics Team
                </p>

              </div>
            `,
    });

    if (confirmationError) {
      console.warn("Quote confirmation email failed:", confirmationError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote email failed:", error);

    return NextResponse.json(
      { error: "Unable to send quote request right now." },
      { status: 500 },
    );
  }
}
