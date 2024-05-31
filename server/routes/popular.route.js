const express = require("express");
const popular_route = express.Router()
const controller = require("../controllers/index.js")


popular_route.get("/popular",controller.event.getAll)
popular_route.get("/popular/:id",controller.event.getOne)
popular_route.delete("/popular/:id",controller.event.delete)
popular_route.patch("/popular/:id",controller.event.update)
popular_route.post("/popular",controller.event.post)

module.exports=popular_route