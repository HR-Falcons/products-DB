const { Sequelize, DataTypes } = require('sequelize');
const {Styles} = require('./db.js');
// Basic select call

Styles.findAll({
  limit: 2,})
.then(data => console.log("All users: Styles", JSON.stringify(data, null, 2)));