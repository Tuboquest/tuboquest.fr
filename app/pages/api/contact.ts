// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { firstName, lastName, phone, country, message } = req.body;

    // Configurez votre transporteur
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou utilisez un service SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Définir l'e-mail à envoyer
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "tuboquest@gmail.com",
      subject: `Nouveau message de contact de ${firstName} ${lastName}`,
      text: `
        Nom: ${firstName} ${lastName}
        Téléphone: ${phone}
        Pays: ${country}
        Message: ${message}
      `,
    };

    try {
      // Envoyer l'e-mail
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, error: "Erreur lors de l'envoi de l'e-mail" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
};

export default handler;
