var Sequelize = require('sequelize');
var sequelize = require('./database');

var Role = sequelize.define('rol', {
  name: Sequelize.STRING,
  description: Sequelize.STRING
},
{
	 timestamps: false,
});

module.exports = Role