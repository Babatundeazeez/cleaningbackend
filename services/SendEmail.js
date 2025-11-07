const { transporter } = require("./Transporter")

const sendMyEmail = () =>{

    // const sendEmails = {
    //         from: `"Suntim Cleaning Services" <${process.env.nodemailer_email}>`,
    //         to: process.env.owner_email,
    //         subject: "New Cleaning Booking Received 🧹",
    //         html: `
    //                     <h3>New Booking Details</h3>
    //                     <p><b>Name:</b> ${req.body.name}</p>
    //                     <p><b>Email:</b> ${req.body.email}</p>
    //                     <p><b>Phone:</b> ${req.body.phone}</p>
    //                     <p><b>Service:</b> ${req.body.service}</p>
    //                     <p><b>Date:</b> ${req.body.date}</p>
    //                     <p><b>Message:</b> ${req.body.message}</p>
            
    //         `
    // }
    transporter.sendEmail(sendEmails)
}
module.exports = sendMyEmail