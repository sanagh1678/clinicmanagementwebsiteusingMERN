const mongoose = require("mongoose");

const registerschema = new mongoose.Schema({
      name: String,
      pass:String ,
      dob:String ,
      phone:Number,
      address:String,
      medicalh:String,
      email:String
})


const loginn = new mongoose.model("loginn",registerschema)


module.exports= loginn;
