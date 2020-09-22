var User = require('../models/Users');
var Role = require('../models/Role');
var sequelize = require('../models/database');


const controller = {}

controller.test =  (req, res) => {
    const response = await sequelize.sync().then(function() {
    


        Role.create({
            name:  'Admin',
            description: 'Admin'
         });
      User.create({
          name: 'Santiago valencia',
          email: 'sanvalenciaarango@gmail.com',
          dni: '1214746404',
          password: 'santii4',
          rolId: 1
      })
     });
     res.json(response)
   
   
   
  
  }

  controller.list =  ( req, res) => {

    const data = await User.findAll();
    res.json(data)

}
  
  module.exports = controller;