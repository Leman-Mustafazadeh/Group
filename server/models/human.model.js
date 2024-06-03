const mongoose = require("mongoose")
const humanSchema = require("../schemas/human.schema.js")
const HumanModel = mongoose.model("Human",humanSchema)
module.exports=HumanModel