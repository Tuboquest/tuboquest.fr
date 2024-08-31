import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, phone, country, message } = req.body;

    try {
      const emailResponse = await resend.send({
        to: "tuboquest@gmail.com", // Remplacez par votre adresse email
        from: "no-reply@example.com", // Adresse email de l'expéditeur
        subject: "New Contact Form Submission",
        text: `
          First Name: ${firstName}
          Last Name: ${lastName}
          Phone: ${phone}
          Country: ${country}
          Message: ${message}
        `,
      });

      res
        .status(200)
        .json({ message: "Email sent successfully", emailResponse });
    } catch (error) {
      res.status(500).json({ message: "Failed to send email", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
