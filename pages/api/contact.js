import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "selwyn.cybersec@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-top: 0; font-size: 24px; border-bottom: 2px solid #f13024; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin-top: 25px;">
              <p style="margin: 12px 0; color: #4b5563;">
                <strong style="color: #1f2937; display: inline-block; min-width: 80px;">Name:</strong>
                <span style="color: #111827;">${name}</span>
              </p>
              
              <p style="margin: 12px 0; color: #4b5563;">
                <strong style="color: #1f2937; display: inline-block; min-width: 80px;">Email:</strong>
                <a href="mailto:${email}" style="color: #f13024; text-decoration: none;">${email}</a>
              </p>
              
              <p style="margin: 12px 0; color: #4b5563;">
                <strong style="color: #1f2937; display: inline-block; min-width: 80px;">Subject:</strong>
                <span style="color: #111827;">${subject}</span>
              </p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <h3 style="color: #1f2937; margin-top: 0; margin-bottom: 15px; font-size: 18px;">Message:</h3>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; color: #111827; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                You can reply directly to this email to respond to ${name}.
              </p>
            </div>
          </div>
          
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
