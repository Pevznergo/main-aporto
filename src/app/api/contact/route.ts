import { NextResponse } from "next/server";
import { Resend } from "resend";

// Ensure the API key is provided
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Target email from environment, fallback for safety
const targetEmail = process.env.CONTACT_EMAIL || "info@aporto.tech";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const { firstName, lastName, email, company, role, message, timeframe } = data;

        // Basic validation
        if (!firstName || !email || !role || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        if (!resend) {
            console.error("RESEND_API_KEY is not configured.");
            return NextResponse.json(
                { error: "Server email configuration is missing" },
                { status: 500 }
            );
        }

        // Attempt to send email via Resend
        const { data: resendData, error } = await resend.emails.send({
            from: "Aporto website <onboarding@resend.dev>", // Needs verified domain in prod
            to: [targetEmail],
            subject: `New Contact Request from ${firstName} ${lastName || ""}`,
            html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Timeframe:</strong> ${timeframe || "Not provided"}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data: resendData });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Failed to process request" },
            { status: 500 }
        );
    }
}
