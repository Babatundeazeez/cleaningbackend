const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    phone : {
        type : Number,
        require : true
    },
    message : {
        type : String,
        require : true
    }
})
const messageModel = mongoose.model("messageSent", MessageSchema)
module.exports = messageModel