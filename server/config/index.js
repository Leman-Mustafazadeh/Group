const express = require('express')
const app = express()
const mongoose = require('mongoose');
// var express = require('express')
// var cors = require('cors')
// app.use(cors())

const PORT = 5050
const CONNECTION_STRING = "mongodb+srv://laman:laman123@djoz.unjz8zh.mongodb.net/"
const PASSWORD="laman123"
const USERNAME="laman"
mongoose.connect(CONNECTION_STRING)
  .then(() => console.log('Connected!'));

  app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`)
  })
  module.exports = app;