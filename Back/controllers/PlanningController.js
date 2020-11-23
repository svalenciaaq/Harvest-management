const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId
var  Planning = require('../model/Planning.js')




const controller = {}

controller.add = async (req, res) => {

    var str = req.body.date;
    var split= str.split("-");
    var entryDate= new Date(split[0],split[1]-1,split[2]);
  
    console.log(req.body.tratament)
    if(req.body.tratament=="irrigation"){
      entryDate.setDate(entryDate.getDate()+5);
      var mDate = entryDate.getMonth();
      var yDate = entryDate.getUTCFullYear();
      var dDate = entryDate.getDate();
  
      var mMonth = parseInt(mDate) + 1;

    }

    
    if(req.body.tratament=="pruning"){
      entryDate.setDate(entryDate.getDate()+3);
      var mDate = entryDate.getMonth();
      var yDate = entryDate.getUTCFullYear();
      var dDate = entryDate.getDate();
  
      var mMonth = parseInt(mDate) + 1;

    }

    if(req.body.tratament=="cloning"){
      entryDate.setDate(entryDate.getDate()+4);
      var mDate = entryDate.getMonth();
      var yDate = entryDate.getUTCFullYear();
      var dDate = entryDate.getDate();
  
      var mMonth = parseInt(mDate) + 1;

    }

    if(req.body.tratament=="fumigation"){
      entryDate.setDate(entryDate.getDate()+6);
      var mDate = entryDate.getMonth();
      var yDate = entryDate.getUTCFullYear();
      var dDate = entryDate.getDate();
  
      var mMonth = parseInt(mDate) + 1;

    }
   
     

    var date= yDate + "-" + mMonth   + "-" + dDate;


  
    var newRecord = new Planning({
        date: date,
        tratament: req.body.tratament,
        plant: req.body.plant
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
  }

  controller.list = async ( req, res) => {
    const planning = await Planning.find({"plant": req.params.id})
      .then(planning =>{
        res.send(planning)
      })
        .catch(err => {
          res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
          });
      });
      
      }
    
    



controller.findOne = async (req , res) =>{
  Planning.findById(req.params.id)
  .then((planning) => {
    if (!planning) {
      return res.status(404).send({
        message: "User not found with id " + req.params.id,
      })
      
   
    }
    res.status(200).send(planning);
    console.log(planning);
  })
  .catch((err) => {
    return res.status(500).send({
      message: "Error retrieving user with id " + req.params.id,
    });
});
}
controller.delete = async (req , res) =>{
  Planning.findByIdAndRemove(req.params.id, (error, data) => {
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

  Planning.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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