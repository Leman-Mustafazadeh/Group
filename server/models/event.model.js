const mongoose = require("mongoose")
const eventSchema = require("../schemas/event.schma")
const EventModel = mongoose.model("Event",eventSchema)
module.exports=EventModel