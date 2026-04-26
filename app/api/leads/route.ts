import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function cleanPhone(phone: string) {
  return phone.replace(/[^0-9]/g, "");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      company,
      email,
      phone,
      customer_type,
      message,
      website,
    } = body;

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message || !customer_type) {
      return NextResponse.json(
        { error: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Bitte eine gültige E-Mail-Adresse eingeben." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || "-");
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "");
    const safeCustomerType = escapeHtml(customer_type);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
    const phoneDigits = cleanPhone(phone || "");

    const { error: supabaseError } = await supabase.from("leads").insert([
      {
        name,
        company,
        email,
        phone,
        customer_type,
        message,
      },
    ]);

    if (supabaseError) {
      console.error("Supabase error:", supabaseError);
      return NextResponse.json(
        { error: "Fehler beim Speichern der Daten." },
        { status: 500 }
      );
    }

    const adminEmail = await resend.emails.send({
      from: "DokTV Kontaktformular <info@doktv.de>",
      to: ["info@doktv.de"],
      replyTo: `${name} <${email}>`,
      subject: `Neue Anfrage von ${name} (${customer_type})`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f7fafb; padding:24px;">
          <div style="max-width:640px; margin:auto; background:white; border-radius:16px; padding:28px; border:1px solid #e6eef1;">

            <p style="margin:0 0 8px; color:#6fa8b0; font-weight:bold;">
              DokTV Kontaktformular
            </p>

            <h2 style="margin:0 0 20px; color:#334c59;">
              Neue Anfrage über DokTV.de
            </h2>

            <div style="background:#edf7f8; border-radius:14px; padding:18px; margin-bottom:22px;">
              <p style="margin:0 0 8px; font-size:16px;">
                <strong>Antwort an Kunde:</strong>
              </p>

              <p style="margin:0;">
                <a href="mailto:${safeEmail}?subject=Re:%20Ihre%20Anfrage%20bei%20DokTV" style="color:#334c59; font-size:18px; font-weight:bold;">
                  ${safeEmail}
                </a>
              </p>
            </div>

            <div style="margin:20px 0;">
              <a href="mailto:${safeEmail}?subject=Re:%20Ihre%20Anfrage%20bei%20DokTV" 
                 style="display:inline-block; background:#334c59; color:white; padding:12px 18px; border-radius:999px; text-decoration:none; font-weight:bold; margin-right:10px;">
                 📧 Kunden direkt anschreiben
              </a>

              ${
                phoneDigits
                  ? `
              <a href="tel:${phoneDigits}" 
                 style="display:inline-block; background:#6fa8b0; color:white; padding:12px 18px; border-radius:999px; text-decoration:none; font-weight:bold; margin-right:10px;">
                 📞 Anrufen
              </a>

              <a href="https://wa.me/${phoneDigits}" 
                 style="display:inline-block; background:#25D366; color:white; padding:12px 18px; border-radius:999px; text-decoration:none; font-weight:bold;">
                 💬 WhatsApp
              </a>
              `
                  : ""
              }
            </div>

            <hr style="border:none; border-top:1px solid #e6eef1; margin:24px 0;" />

            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Firma:</strong> ${safeCompany}</p>
            <p><strong>E-Mail:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Telefon:</strong> ${safePhone || "-"}</p>
            <p><strong>Typ:</strong> ${safeCustomerType}</p>

            <p><strong>Nachricht:</strong></p>
            <div style="background:#f7fafb; padding:15px; border-radius:10px; line-height:1.6;">
              ${safeMessage}
            </div>

          </div>
        </div>
      `,
    });

    console.log("Admin email result:", adminEmail);

    const customerEmail = await resend.emails.send({
      from: "DokTV <info@doktv.de>",
      to: [email],
      subject: "Danke für Ihre Anfrage bei DokTV",
      html: `
        <div style="font-family: Arial, sans-serif; background:#f7fafb; padding:24px;">
          <div style="max-width:640px; margin:auto; background:white; border-radius:16px; padding:28px; border:1px solid #e6eef1;">
            <h2 style="color:#334c59;">Vielen Dank für Ihre Anfrage</h2>

            <p>Hallo ${safeName},</p>

            <p>
              vielen Dank für Ihre Anfrage bei DokTV. Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.
            </p>

            <p>
              Beste Grüße<br/>
              <strong>Ihr DokTV Team</strong>
            </p>

            <p style="margin-top:24px; color:#7a8f98; font-size:13px;">
              DokTV UG (haftungsbeschränkt) · Berlin · info@doktv.de
            </p>
          </div>
        </div>
      `,
    });

    console.log("Customer email result:", customerEmail);

    return NextResponse.json({
      success: true,
      message: "Anfrage erfolgreich gesendet.",
    });
  } catch (error) {
    console.error("API error:", error);

    return NextResponse.json(
      { error: "Serverfehler." },
      { status: 500 }
    );
  }
}