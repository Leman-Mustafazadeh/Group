const express = require("express");
const human_route = express.Router()
const controller = require("../controllers/index.js")


human_route.get("/human",controller.human.getAll)
human_route.get("/human/:id",controller.human.getOne)
human_route.delete("/human/:id",controller.human.delete)
human_route.patch("/human/:id",controller.human.update)
human_route.post("/human",controller.human.post)

module.exports=human_route