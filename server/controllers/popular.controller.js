const PopularModel = require("../models/popular.model")

const popular_controllers= {
    getAll:async(req,res)=>{
        const popular = await PopularModel.find()
        if (popular.length > 0) {
            res.status(200).send({
              message: "success",
              data: popular,
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
        let popular;
        try {
            popular = await PopularModel.findById(id);
        } catch (error) {
          res.send({ error: error });
        }
        if (popular) {
          res.status(200).send({
            message: "success",
            data: popular,
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
          response = await PopularModel.findByIdAndDelete(id);
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
        const response = await PopularModel.findByIdAndUpdate(id, req.body);
        res.send({
          message: "updated",
          response: response,
        });
      },
      post: async (req, res) => {
        const popular = new PopularModel(req.body);
        await popular.save();
        res.send({
          message: "posted",
          data: popular,
        });
      },
}

module.exports= popular_controllers