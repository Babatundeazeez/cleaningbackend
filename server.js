const express = require("express")
const dotenv = require("dotenv")
const cors = require('cors')
const connectedMongoDB = require("./ConnectedToDB")
const bookingRouters = require("./Router/BookingRouter")


dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000;


/////middleswares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use('/api/booking', bookingRouters)


connectedMongoDB()



////conecting to server
app.listen(PORT, () =>{
    console.log(`Listeneing to port : ${PORT}`);
    
})