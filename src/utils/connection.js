const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres' // pick one of 'mysql','sqlite','postgres','mssql',
  });

module.exports = sequelize;