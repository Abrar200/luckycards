import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { companyName, contactName, email, platformType, message } = req.body;

  const platformLabels: Record<string, string> = {
    casino: 'Casino Operator',
    aggregator: 'Game Aggregator',
    investor: 'Investor',
    other: 'Other',
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'info@nexadigital.com.au',
      pass: 'lobq gajd vuyi dlhd',
    },
  });

  try {
    await transporter.sendMail({
      from: '"Lucky Cards Enquiries" <info@nexadigital.com.au>',
      to: 'info@nexadigital.com.au',
      replyTo: email,
      subject: `New Enquiry — ${companyName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #000; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            New Lucky Cards Enquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #555;">Company</td>
              <td style="padding: 8px 0;">${companyName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Contact Name</td>
              <td style="padding: 8px 0;">${contactName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #D4AF37;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Platform Type</td>
              <td style="padding: 8px 0;">${platformLabels[platformType] ?? platformType}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
            </tr>` : ''}
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Sent from the Lucky Cards contact form.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Email error:', err);
    return res.status(500).json({ error: err?.message || 'Unknown error' });
  }
}