/// <reference path="./global.d.ts" />
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { Resend } from "resend";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

    const resend = new Resend(apiKey);
    const fromEmail = Deno.env.get("RESEND_FROM_EMAIL");
    const toEmail = Deno.env.get("CONTACT_EMAIL_TO");
    if (!fromEmail || !toEmail) {
      throw new Error("RESEND_FROM_EMAIL and CONTACT_EMAIL_TO must be configured");
    }

    const { name, email, subject, message }: ContactFormData = await req.json();

    if (!name || !email || !message) {
      throw new Error("Missing required fields: name, email, and message are required");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email address");
    }

    const escapeHtml = (text: string): string => {
      const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      };
      return text.replace(/[&<>"']/g, (char) => map[char]);
    };

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
      <h3>Message:</h3>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">This message was sent from your website contact form.</p>
    `;

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact: ${name}${subject ? ` - ${subject}` : ""}`,
      html: emailHtml,
    });

    if (emailResponse.error) {
      throw new Error(emailResponse.error.message || "Resend rejected the email");
    }

    console.log("Email sent successfully:", emailResponse.data?.id);

    return new Response(
      JSON.stringify({ success: true, messageId: emailResponse.data?.id }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: unknown) {
    console.error("Error in send-message function:", error);
    const message = error instanceof Error ? error.message : "Failed to send message";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
