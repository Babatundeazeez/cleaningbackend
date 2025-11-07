const bookingModels = require("../BookinModel");
const nodemailer = require("nodemailer")

const createBooking = async (req, res) =>{
    try {
        //creating booking
        const booking = await bookingModels.create({
            ...req.body
        })
        if(!booking){
            return res.status(400).json({
                status : "error",
                message : "Booking was not created",
                booking
            })
        }
        
        const transporter = nodemailer.createTransport({
        
            service: "gmail",
            auth: {
                user: process.env.nodemailer_email,
                pass: process.env.nodemailer_Password
            },
         });

         const sendEmails = {
            from: `"Suntim Cleaning Services" <${process.env.nodemailer_email}>`,
            to: process.env.owner_email,
            subject: "New Cleaning Booking Received 🧹",
            html: `
                        <h3>New Booking Details</h3>
                        <p><b>Name:</b> ${req.body.name}</p>
                        <p><b>Email:</b> ${req.body.email}</p>
                        <p><b>Phone:</b> ${req.body.phone}</p>
                        <p><b>Service:</b> ${req.body.service}</p>
                        <p><b>Date:</b> ${req.body.date}</p>
                        <p><b>Message:</b> ${req.body.message}</p>
            
            `,
            };

            try {
                await transporter.sendMail(sendEmails);

                 console.log("Email sent successfully!");
                
            } catch (error) {
                console.error("Email send failed:", error);
                
            }


       return res.status(200).json({
            success : true,
            message : "Booking created successfully and email sent",
            data : booking

        })

       
        
    } catch (error) {
        console.error("error creating booking", error);
        if(!res.headersSent){
            return res.status(500).json({
                success: false,
                message: "Server error Please try again later"
              });
        }
      
        
    }

    

}
module.exports = {
    createBooking
}