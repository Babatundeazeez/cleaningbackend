const express = require("express")
const { createMessage } = require("../Model/Controller/MessageController")


const messageRouter = express.Router()


messageRouter.post('/', createMessage)

module.exports = messageRouter