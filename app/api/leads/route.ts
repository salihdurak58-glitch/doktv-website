import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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

    // Spam-Schutz: Bots füllen oft versteckte Felder aus
    if (website) {
      return NextResponse.json({
        success: true,
        message: "Anfrage erfolgreich gesendet.",
      });
    }

    if (!name || !email || !message || !customer_type) {
      return NextResponse.json(
        { error: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 }
      );
    }

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
      from: "DokTV <info@doktv.de>",
      to: ["info@doktv.de"],
      replyTo: email,
      subject: `Neue Anfrage von ${name} (${customer_type})`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f7fafb; padding:24px;">
          <div style="max-width:640px; margin:0 auto; background:#ffffff; border-radius:18px; padding:28px; border:1px solid #e6eef1;">
            <div style="margin-bottom:24px;">
              <p style="margin:0; color:#6fa8b0; font-size:14px; font-weight:700; letter-spacing:0.04em;">
                DokTV Kontaktformular
              </p>
              <h2 style="margin:8px 0 0; color:#334c59; font-size:26px;">
                Neue Kontaktanfrage
              </h2>
            </div>

            <div style="background:#f7fafb; border-radius:14px; padding:18px; margin-bottom:20px;">
              <p style="margin:0 0 10px;"><strong>Name:</strong> ${name}</p>
              <p style="margin:0 0 10px;"><strong>Firma:</strong> ${company || "-"}</p>
              <p style="margin:0 0 10px;"><strong>E-Mail:</strong> ${email}</p>
              <p style="margin:0 0 10px;"><strong>Telefon:</strong> ${phone || "-"}</p>
              <p style="margin:0;"><strong>Kundentyp:</strong> ${customer_type}</p>
            </div>

            <div>
              <p style="margin:0 0 8px; color:#334c59;"><strong>Nachricht:</strong></p>
              <div style="background:#ffffff; border:1px solid #e6eef1; border-radius:14px; padding:18px; color:#334c59; line-height:1.6;">
                ${message}
              </div>
            </div>

            <p style="margin-top:24px; color:#7a8f98; font-size:13px;">
              Diese Anfrage wurde automatisch über doktv.de gesendet.
            </p>
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
          <div style="max-width:640px; margin:0 auto; background:#ffffff; border-radius:18px; padding:28px; border:1px solid #e6eef1;">
            <p style="margin:0; color:#6fa8b0; font-size:14px; font-weight:700;">
              DokTV
            </p>

            <h2 style="margin:10px 0 16px; color:#334c59; font-size:26px;">
              Vielen Dank für Ihre Anfrage
            </h2>

            <p style="color:#334c59; line-height:1.7;">
              Hallo ${name},
            </p>

            <p style="color:#334c59; line-height:1.7;">
              vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.
            </p>

            <div style="background:#f7fafb; border-radius:14px; padding:18px; margin:22px 0;">
              <p style="margin:0 0 8px;"><strong>Ihre Anfrage:</strong></p>
              <p style="margin:0; color:#334c59; line-height:1.6;">${message}</p>
            </div>

            <p style="color:#334c59; line-height:1.7;">
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