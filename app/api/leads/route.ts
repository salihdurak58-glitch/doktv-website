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
    console.log("API HIT");

    const body = await req.json();

    const {
      name,
      company,
      email,
      phone,
      customer_type,
      message,
    } = body;

    // 🛑 Validierung
    if (!name || !email || !message || !customer_type) {
      return NextResponse.json(
        { error: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 }
      );
    }

    // 💾 1. In Supabase speichern
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

    console.log("Saved to Supabase");

    // 📧 2. E-Mail an dich
    const { data, error: resendError } = await resend.emails.send({
      from: "DokTV <info@doktv.de>",
      to: ["info@doktv.de"],
      replyTo: email,
      subject: "Neue Anfrage über DokTV Website",
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Firma:</strong> ${company || "-"}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "-"}</p>
        <p><strong>Kundentyp:</strong> ${customer_type}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Resend result:", data);

    if (resendError) {
      console.error("Resend error:", resendError);
    }

    // 📩 3. Auto-Reply an Kunden
    await resend.emails.send({
      from: "DokTV <info@doktv.de>",
      to: [email],
      subject: "Danke für deine Anfrage bei DokTV",
      html: `
        <p>Hallo ${name},</p>
        <p>vielen Dank für deine Anfrage! Wir melden uns schnellstmöglich bei dir.</p>
        <br/>
        <p>Beste Grüße</p>
        <p><strong>DokTV Team</strong></p>
      `,
    });

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