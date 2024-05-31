const mongoose = require("mongoose")
const hotelSchema = require("../schemas/event.schma")
const EventModel = mongoose.model("Event",eventSchema)
module.exports=EventModel