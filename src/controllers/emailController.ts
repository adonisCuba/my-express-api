import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export class EmailController {
    public async sendEmail(req: Request, res: Response): Promise<void> {
        const { recipient, subject, text } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: recipient,
            subject: subject,
            text: text,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error sending email', error });
        }
    }
}