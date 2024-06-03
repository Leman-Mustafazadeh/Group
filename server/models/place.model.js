const mongoose = require("mongoose")
const placeSchema = require("../schemas/places.schema.js")
const PlaceModel = mongoose.model("Place" , placeSchema)
module.exports = PlaceModel