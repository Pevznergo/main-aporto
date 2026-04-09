import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const { firstName, lastName, email, company, role, message, timeframe } = data;

        // Ensure the API key and target email are provided dynamically at runtime
        const resendApiKey = process.env.RESEND_API_KEY;
        const targetEmail = process.env.CONTACT_EMAIL || "owen.walker@aporto.tech";

        // Basic validation
        if (!firstName || !email || !role || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        if (!resendApiKey) {
            console.error("RESEND_API_KEY is not configured.");
            return NextResponse.json(
                { error: "Server email configuration is missing from environment variables." },
                { status: 500 }
            );
        }

        const resend = new Resend(resendApiKey);

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
