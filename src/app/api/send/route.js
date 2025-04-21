import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: true, // Use SSL (for port 465) or set to false for TLS (port 587)
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email to yourself
        const mailToSelf = {
            from: email,
            to: process.env.TO_EMAIL, // Your email
            subject: `Portfolio Website Form Submission: ${name}`,
            text: `You received a new message from ${email}.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Email back to the user
        const mailToUser = {
            from: process.env.FROM_EMAIL,
            to: email, // 👈 Send to the email they filled
            subject: `Thanks for contacting me, ${name}!`,
            text: `Hi ${name},\n\nThanks for reaching out! Here’s a copy of your message:\n\n"${message}"\n\nI'll get back to you soon!\n\nBest Wishes,\nRavi Shekhar`,
        };

        // Send email
        await Promise.all([
            transporter.sendMail(mailToSelf),
            transporter.sendMail(mailToUser),
        ]);


        return new Response(JSON.stringify({ success: true, message: "Email sent!" }), { status: 200 });
    } catch (error) {
        console.error("Email sending failed:", error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}



// import { NextResponse } from "next/server";
// import { Resend } from "resend";
//
// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;
//
// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contact us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//       console.log("Email sent:", data);
//     return NextResponse.json(data);
//   } catch (error) {
//       console.error("Email sending failed:", error);
//       return NextResponse.json({ success: false, error: error.message || error });
//   }
// }