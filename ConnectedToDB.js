const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv,dotenv.config()

const myMongoose = process.env.mongooseURL

const connectedMongoDB = async () =>{
    console.log('conecting...............');
    try {
        const connectedDB = await mongoose.connect(myMongoose)
        if(connectedDB){
            console.log("MongoDB is currently connected.......");
            
        }
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}
module.exports = connectedMongoDB