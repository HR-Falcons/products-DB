const { Sequelize, DataTypes } = require('sequelize');
const {Skus} = require('./db.js');
// Basic select call
Skus.findAll({
  limit: 2,})
.then(data => console.log("All users: Skus", JSON.stringify(data, null, 2)));