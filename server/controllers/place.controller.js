const PlaceModel = require("../models/place.model")

const place_controllers= {
    getAll:async(req,res)=>{
        const place = await PlaceModel.find()
        if (place.length > 0) {
            res.status(200).send({
              message: "success",
              data: place,
            });
          } else {
            res.send({
              message: "not found",
              data: null,
            });
          }
    },
    getOne: async (req, res) => {
        const { id } = req.params;
        let place;
        try {
            place = await PlaceModel.findById(id);
        } catch (error) {
          res.send({ error: error });
        }
        if (place) {
          res.status(200).send({
            message: "success",
            data: place,
          });
        } else {
          res.send({
            message: "no content",
            data: null,
          });
        }
      },
      delete: async (req, res) => {
        const { id } = req.params;
        let response;
        try {
          response = await PlaceModel.findByIdAndDelete(id);
        } catch (error) {
          res.send({
            error: error,
          });
        }
        res.send({
          message: "deleted",
          response: response,
        });
      },
      update: async (req, res) => {
        const { id } = req.params;
        const response = await PlaceModel.findByIdAndUpdate(id, req.body);
        res.send({
          message: "updated",
          response: response,
        });
      },
      post: async (req, res) => {
        const place = new PlaceModel(req.body);
        await place.save();
        res.send({
          message: "posted",
          data: place,
        });
      },
}

module.exports= place_controllers