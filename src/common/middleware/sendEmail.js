"use strict"

const nodemailer = require("nodemailer")

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'mail.shoeslab.id',
      port: 465,
      secure: true,
      auth: {
        user: 'admin@shoeslab.id',
        pass: 'Shoeslab.id',
      },
    })

    await transporter.sendMail({
      from: 'admin@shoeslab.id',
      to: email,
      subject: subject,
      text: text,
    })

    console.log("email sent sucessfully")
  } catch (error) {
    console.log(error, "email not sent")
  }
}

module.exports = sendEmail
