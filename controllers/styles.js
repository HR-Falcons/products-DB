const { Sequelize, DataTypes } = require('sequelize');
const {Styles, Skus, Photos} = require('./db.js');
// Basic select call

function getStylesById(product_id = 1) {

  Styles.hasMany(Photos, {
    foreignKey: 'style_id'
  });

  Styles.hasMany(Skus, {
    foreignKey: 'style_id'
  });

  Styles.findAll({
    where: {
      product_id,
    },
    include:[
      {
        model: Photos,
        attributes: ['url', 'thumbnail_url']
      },
      {
        model: Skus,
        attributes: ['size', 'quantity'],
      }
   ],

  }, {
    benchmark: true,
    logging: console.log,
  })
  .then(data => console.log('Found Style by id: ', JSON.stringify(data, null, 2)))
  .catch(err => console.log('Style query failed!\n Error: ', err));
}

module.exports = {
  getStylesById,
};
