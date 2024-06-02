const event_controllers= require("./event.controller")
const human_controllers = require("./human.controller")
const place_controllers = require("./place.controller")
const popular_controllers = require("./popular.controller")

const controller = {
    event:event_controllers,
    popular:popular_controllers,
    place:place_controllers,
    human:human_controllers
}

module.exports= controller