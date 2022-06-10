const { Sequelize, DataTypes } = require('sequelize');
const {Features} = require('./db.js');
// Basic select call

Features.findAll({
  limit: 2,})
.then(data => console.log("All users: Features", JSON.stringify(data, null, 2)));