const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({

    service: "gmail",
    auth: {
        user: process.env.nodemailer_email,
        pass: process.env.nodemailer_Password
    },



})

module.exports = transporter


// const mailOptions = {
//     from: `"Suntim Cleaning Services" <${process.env.nodemailer_email}>`,
//     to: process.env.owner_email,
//     subject: "🧼 New Cleaning Booking Received",
//     html: `
//     <h2>New Booking Request</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Service:</strong> ${service}</p>
//         <p><strong>Date:</strong> ${date}</p>
//         <p><strong>Message:</strong> ${message}</p>
//     `
// }
