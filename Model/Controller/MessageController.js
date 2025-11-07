const messageModel = require("../MessageModel")
const nodemailer = require("nodemailer")

const createMessage = async(req, res) =>{
    try {
        //create message
        const messages = await messageModel.create({
            ...req.body
        })
        if(!messages){
            return res.status(401).json({
                status : "error",
                message : "Mesage could not sent",
                messages
            })

        }
        //send message to main
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.nodemailer_email,
                pass: process.env.nodemailer_Password
            },

        });
        const sendMessage = {
            from: `"Suntim Cleaning Services" <${process.env.nodemailer_email}>`,
            to: process.env.owner_email,
            subject: "Inquiry mssage Received 🧹",
            html: `
                        <h3>New Inquiry Details</h3>
                        <p><b>Name:</b> ${req.body.name}</p>
                        <p><b>Email:</b> ${req.body.email}</p>
                        <p><b>Phone:</b> ${req.body.phone}</p>
                        <p><b>Message:</b> ${req.body.message}</p>
            
            `,
        };
        try {
            await transporter.sendMail(sendMessage);
            console.log("Message sent successfully");

        } catch (error) {
            console.error("Message send failed:", emailError);
            
        }
        
        return res.status(200).json({
            success : true,
            message : "Inquiry Message created successfully and email sent",
            data : messages

        })
    } catch (error) {
        console.error("error creating Inquiry mesage", error);
        if(!res.headersSent){
            return res.status(500).json({
                success: false,
                message: "Server error Please try again later"
              });
        }
        
    }

}
module.exports = {
    createMessage
}