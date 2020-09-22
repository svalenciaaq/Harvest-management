const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId
var  Plantation = require('../model/Plantation')




const controller = {}

controller.add = async (req, res) => {
    var newRecord = new Plantation({
        name: req.body.name,
        description: req.body.description
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
  }

  controller.list = async ( req, res) => {
    const plantation = await Plantation.find();
    res.render('index', {title:
        plantation
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
  
}
  
  module.exports = controller;