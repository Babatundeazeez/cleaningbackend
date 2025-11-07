const express = require("express")
const { createBooking } = require("../Model/Controller/BookingController")

const bookingRouters = express.Router()


bookingRouters.post("/",createBooking)

module.exports = bookingRouters