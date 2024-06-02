const mongoose = require("mongoose")
const placeSchema = require("../schemas/places.schema")
const PlaceModel = mongoose.model("Event",placeSchema)
module.exports = PlaceModel