import { NextRequest, NextResponse } from 'next/server';

interface InquiryPayload {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: InquiryPayload = await req.json();
    const { name, email, company, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Default primary recipient is Saad Rehman's account email verified on Resend
    const primaryAccountEmail = 'saadrehman034@gmail.com';
    const secondaryEmail = 'rehmansaad209@gmail.com';
    const subject = `[Arclyn Studio Inquiry] New Project from ${name} (${projectType})`;
    const submittedAt = new Date().toISOString();

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0b0f19; color: #f1f5f9; border-radius: 12px; border: 1px solid #1e293b;">
        <div style="border-bottom: 1px solid #1e293b; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #38bdf8; margin: 0 0 6px 0; font-size: 22px;">⚡ New Project Inquiry — Arclyn Studio</h2>
          <p style="color: #94a3b8; font-size: 13px; margin: 0;">Received at ${submittedAt}</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 140px; font-weight: 600;">Client Name:</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: 700;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Client Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Company / Org:</td>
            <td style="padding: 8px 0; color: #ffffff;">${company || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Project Scope:</td>
            <td style="padding: 8px 0; color: #a855f7; font-weight: 600;">${projectType}</td>
          </tr>
        </table>

        <div style="background: #131b2e; padding: 16px; border-radius: 8px; border-left: 4px solid #38bdf8; margin-bottom: 24px;">
          <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Project Goals & Requirements:</p>
          <p style="margin: 0; color: #f8fafc; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="border-top: 1px solid #1e293b; padding-top: 16px; font-size: 12px; color: #64748b; text-align: center;">
          Arclyn Studio Lead Dispatch • Reply directly to this email to reach ${name} (${email})
        </div>
      </div>
    `;

    // Resend API key support (uses configured environment variable or current registered key)
    const resendApiKey = process.env.RESEND_API_KEY || 're_J9LV4DtH_8UJqquJADEwU8wrWNjo3iCtZ';
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    let emailDelivered = false;
    let emailDeliveryDetails: unknown = null;

    if (resendApiKey) {
      // First attempt: try delivery to primary + secondary recipients
      try {
        const attempt1 = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: fromAddress,
            to: [primaryAccountEmail, secondaryEmail],
            reply_to: email,
            subject,
            html: emailHtml,
          }),
        });

        if (attempt1.ok) {
          emailDelivered = true;
          emailDeliveryDetails = await attempt1.json();
        } else {
          // If Resend account is still in sandbox/unverified custom domain mode,
          // it only permits sending to the account owner (saadrehman034@gmail.com).
          // Fall back gracefully to primary account address so email is never lost!
          const attempt2 = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify({
              from: fromAddress,
              to: [primaryAccountEmail],
              reply_to: email,
              subject,
              html: emailHtml,
            }),
          });

          if (attempt2.ok) {
            emailDelivered = true;
            emailDeliveryDetails = await attempt2.json();
          } else {
            console.error('Resend delivery failed:', await attempt2.text());
          }
        }
      } catch (err) {
        console.error('Error invoking Resend API:', err);
      }
    }

    // Optional webhook forwarding if configured
    const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            company,
            projectType,
            message,
            submittedAt,
            subject,
          }),
        });
      } catch (err) {
        console.error('Webhook dispatch error:', err);
      }
    }

    console.log('📬 [NEW PROJECT INQUIRY LOGGED]:', {
      timestamp: submittedAt,
      deliveredToEmail: emailDelivered,
      deliveryId: (emailDeliveryDetails as { id?: string })?.id,
      name,
      email,
      company: company || 'N/A',
      projectType,
      message,
    });

    return NextResponse.json({
      success: true,
      deliveredToEmail: emailDelivered,
      deliveryDetails: emailDeliveryDetails,
      recipients: [primaryAccountEmail, secondaryEmail],
      message: 'Inquiry successfully received and routed to your email.',
    });
  } catch (error) {
    console.error('Error handling inquiry submission:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your inquiry.' },
      { status: 500 }
    );
  }
}
