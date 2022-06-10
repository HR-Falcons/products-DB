const { Sequelize, DataTypes } = require('sequelize');
const {Photos} = require('./db.js');
// Basic select call

Photos.findAll({
  limit: 2,})
.then(data => console.log("All users: Photos", JSON.stringify(data, null, 2)));