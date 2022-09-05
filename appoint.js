const mongoose = require("mongoose");

const appoint_schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    phone: String,
    email: String,
    medicalh: String,
    age:String
})


const appoint = new mongoose.model("appoint",appoint_schema)


module.exports= appoint;
