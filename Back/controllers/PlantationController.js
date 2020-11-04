const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId
var  Plantation = require('../model/Plantation')




const controller = {}

controller.add = async (req, res) => {
    var newRecord = new Plantation({
        address: req.body.address,
        administrator: req.body.administrator,
        crops: req.body.crops,
        picture: req.body.picture
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
  }

  controller.list = async ( req, res) => {
    const plantations = await Plantation.find()
      .then(plantations =>{
        res.send(plantations)
      })
        .catch(err => {
          res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
          });
      });

}


controller.delete = async (req , res) =>{
  Plantation.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
}


controller.edit = async (req, res) => {
  plantation.findByIdAndUpdate(req.params.id, req.data, function (err, category) {
    if (err) return callback(err);
    
  });
}


controller.findOne = async (req , res) =>{
  Plantation.findById(req.params.id)
  .then((plantation) => {
    if (!plantation) {
      return res.status(404).send({
        message: "User not found with id " + req.params.id,
      })
      
   
    }
    res.status(200).send(plantation);
    console.log(plantation);
  })
  .catch((err) => {
    return res.status(500).send({
      message: "Error retrieving user with id " + req.params.id,
    });
});
}



controller.edit = async (req, res) => {

  const id = req.params.id;

  Plantation.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });

  
}

  
  module.exports = controller;