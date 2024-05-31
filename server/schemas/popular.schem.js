const mongoose = require("mongoose");
const popularSchema = new mongoose.Schema({
    imgScr:String,
    name:String,
   number:Number
},{timestamps:true})

module.exports = popularSchema