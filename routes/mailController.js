import express from 'express';
import nodemailer from 'nodemailer';
import { SENDER, SENDER_PW } from '../config';

const router = express.Router();

router.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: SENDER,
      pass: SENDER_PW
    }
  });
  const mailOptions = {
    from: SENDER, // sender address
    to: 'mailsender.nuuksiontaika@gmail.com', // list of receivers
    replyTo: req.body.email,
    subject: 'Tarjouspyyntö', // Subject line
    html: req.body.html, // plain text body
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.json(err);
    } else {
      res.json(info);
    }
  });
});

export default router;
