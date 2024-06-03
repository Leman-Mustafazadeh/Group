const mongoose = require("mongoose")
const popularSchema = require("../schemas/popular.schem")
const PopularModel = mongoose.model("Popular",popularSchema)
module.exports=PopularModel