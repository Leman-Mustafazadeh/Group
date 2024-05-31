const event_controllers= require("./event.controller")
const popular_controllers = require("./popular.controller")

const controller = {
    event:event_controllers,
    popular:popular_controllers
}

module.exports= controller