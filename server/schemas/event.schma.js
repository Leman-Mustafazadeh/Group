const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
    imgScr:String,
    name:String,
    title:String
},{timestamps:true})

module.exports = eventSchema