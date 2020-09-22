
const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId
var { Plant } = require('../model/Plant')




const controller = {}

controller.add = async (req, res) => {
    var newRecord = new Plant({
        name: req.body.name,
        description: req.body.description
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
  }

  controller.list = async ( req, res) => {
    const tasks = await Plant.find();
    res.render('index', {
        tasks
      });

}

controller.findOne = async (req , res) =>{
  Plant.findById(req.params.id)
  .then((plant) => {
    if (!plant) {
      return res.status(404).send({
        message: "User not found with id " + req.params.id,
      });
    }
    res.status(200).send(plant);
    console.log(plant);
  })
  .catch((err) => {
    return res.status(500).send({
      message: "Error retrieving user with id " + req.params.id,
    });
});
}
controller.delete = async (req , res) =>{
  Plant.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
}
  
  module.exports = controller;