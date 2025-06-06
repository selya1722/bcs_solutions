import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface QuoteRequestBody {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, serviceType, message } = body as QuoteRequestBody;

    // Validate input
    if (!name || !email || !serviceType || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'bcssolutions12@gmail.com',
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Service Type: ${serviceType}
        Message: ${message}
      `,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Quote request sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send quote request' }, { status: 500 });
  }
}