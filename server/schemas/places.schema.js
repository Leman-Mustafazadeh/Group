const mongoose = require("mongoose");
const placeSchema = new mongoose.Schema({
    imgScr:String,
    name:String,
    title:String
},{timestamps:true})

module.exports = placeSchema