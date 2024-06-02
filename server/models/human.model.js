const mongoose = require("mongoose")
const humanSchema = require("../schemas/human.schma")
const HumanModel = mongoose.model("Human",humanSchema)
module.exports=HumanModel