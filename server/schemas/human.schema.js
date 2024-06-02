const mongoose = require("mongoose");
const humanSchema = new mongoose.Schema({
    imgScr:String,
    name:String,
   number:Number
},{timestamps:true})

module.exports = humanSchema