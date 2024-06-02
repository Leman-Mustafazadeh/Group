const express = require("express");
const place_route = express.Router()
const controller = require("../controllers/index.js")


place_route.get("/place",controller.place.getAll)
place_route.get("/place/:id",controller.place.getOne)
place_route.delete("/place/:id",controller.place.delete)
place_route.patch("/place/:id",controller.place.update)
place_route.post("/place",controller.place.post)

module.exports=place_route