var User = require('../model/Users');



const controller = {}

controller.add = async (req, res) => {
    var newRecord = new User({
        name: req.body.name,
        email: req.body.email,
        dni: req.body.dni,
        cellphone:req.body.cellphone,
        rol: req.body.rol
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
  }
     

  controller.list =  async ( req, res) => {
    const users = await User.find()
    .then(users =>{
      res.send(users)
    })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving tutorials."
        });
    });
  }
    
  
  module.exports = controller;