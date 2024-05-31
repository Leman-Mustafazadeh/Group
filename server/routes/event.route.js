const express = require("express");
const event_route = express.Router()
const controller = require("../controllers/index.js")


event_route.get("/travel",controller.event.getAll)
event_route.get("/travel/:id",controller.event.getOne)
event_route.delete("/travel/:id",controller.event.delete)
event_route.patch("/travel/:id",controller.event.update)
event_route.post("/travel",controller.event.post)

module.exports=event_route