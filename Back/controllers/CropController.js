const express = require('express')
var router = express.Router()
var  Crop = require('../model/Crop')




const controller = {}

controller.add = async (req, res) => {
    var newRecord = new Crop({
      location: req.body.location,
      administrator: req.body.administrator,
      picture:req.body.picture,
      dateofinaguration:req.body.dateofinaguration,
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
  }

  controller.list = async ( req, res) => {
    const crops = await Crop.find()
    .then(crops =>{
      res.send(crops)
    })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving tutorials."
        });
    });

}


controller.delete = async (req , res) =>{
  Crop.findByIdAndRemove(req.params.id, (error, data) => {
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

  Crop.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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


controller.findOne = async (req , res) =>{
  Crop.findById(req.params.id)
  .then((crop) => {
    if (!crop) {
      return res.status(404).send({
        message: "User not found with id " + req.params.id,
      })
      
   
    }
    res.status(200).send(crop);
    console.log(crop);
  })
  .catch((err) => {
    return res.status(500).send({
      message: "Error retrieving user with id " + req.params.id,
    });
});
}
  
  module.exports = controller;