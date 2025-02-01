import { EmailTemplate } from '@/components/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: `${email}`,
      to: ['arthurharry06@gmail.com'],
      subject: 'New Lead',
      react: EmailTemplate({ name, message, phone }),
    });

    if (error) {
      console.error("Error sending message", error)
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error sending post", error)
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
}
