const HumanModel = require("../models/human.model")

const human_controllers= {
    getAll:async(req,res)=>{
        const human = await HumanModel.find()
        if (human.length > 0) {
            res.status(200).send({
              message: "success",
              data: human,
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
        let human;
        try {
            human = await HumanModel.findById(id);
        } catch (error) {
          res.send({ error: error });
        }
        if (human) {
          res.status(200).send({
            message: "success",
            data: human,
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
          response = await HumanModel.findByIdAndDelete(id);
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
        const response = await HumanModel.findByIdAndUpdate(id, req.body);
        res.send({
          message: "updated",
          response: response,
        });
      },
      post: async (req, res) => {
        const human = new HumanModel(req.body);
        await human.save();
        res.send({
          message: "posted",
          data: human,
        });
      },
}

module.exports= human_controllers