const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId
var  History = require('../model/History')




const controller = {}

controller.add = async (req, res) => {


  
    var newRecord = new History({
        description: req.body.description,
        date: req.body.date,
        tratament: req.body.tratament,
        plant: req.body.plant
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
  }

  controller.list = async ( req, res) => {
    const historys = await History.find({"plant": req.params.id})
      .then(historys =>{
        res.send(historys)
      })
        .catch(err => {
          res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
          });
      });
      
      }
    
    



controller.findOne = async (req , res) =>{
  History.findById(req.params.id)
  .then((history) => {
    if (!history) {
      return res.status(404).send({
        message: "User not found with id " + req.params.id,
      })
      
   
    }
    res.status(200).send(history);
    console.log(history);
  })
  .catch((err) => {
    return res.status(500).send({
      message: "Error retrieving user with id " + req.params.id,
    });
});
}
controller.delete = async (req , res) =>{
  History.findByIdAndRemove(req.params.id, (error, data) => {
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

  const id = req.params.id;

  History.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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