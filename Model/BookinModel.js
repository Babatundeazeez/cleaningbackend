const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema({
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
    service : {
        type : String,
        require : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    message : {
        type : String,
        require : true
    }
})
const bookingModels = mongoose.model("booking", BookingSchema)
module.exports = bookingModels