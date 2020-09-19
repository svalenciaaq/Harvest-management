//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('./database');
// import model for FK roleID
var Role = require('./Role');

var User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  dni: Sequelize.BIGINT,
  password: Sequelize.STRING,
  rolId: {
    type: Sequelize.INTEGER,
    // This is a reference to another model
    references: {
      model: Role,
      key: 'id'
    }
  }
},
{
	 timestamps: false,
});

User.belongsTo(Role)

module.exports = User