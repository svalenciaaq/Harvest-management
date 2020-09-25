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


controller.edit = async (req, res) => {
  
}
  
  module.exports = controller;