const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema({
    imgScr:String,
    name:String,
   number:Number
},{timestamps:true})

module.exports = hotelSchema