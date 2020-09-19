var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'bd_harverst',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;