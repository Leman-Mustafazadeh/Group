const mongoose = require("mongoose")
const popularSchema = require("../schemas/popular.schem")
const PopularModel = mongoose.model("Event",popularSchema)
module.exports=PopularModel