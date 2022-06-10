const { Sequelize, DataTypes } = require('sequelize');
const {Product, Features} = require('./db.js');
// Basic select call

// Create a function that calls find all with offset and limit.
// The new offset is just the limit or count times the page.

function getProducts(limit = 5, page = 0) {

  page = page === 0 ? 0 : page - 1;
  Product.findAll({
    benchmark: true,
    logging: console.log,
    limit,
    offset: (limit * page)})
  .then(data => console.log("All users: Product ", JSON.stringify(data, null, 2)))
  .catch(err => console.log('Product failed to return data!\n Error code: ', err));
}

function getProductsById(product_id = 1) {

  Product.hasMany(Features, {
    foreignKey: 'product_id'
  });

  Product.findByPk(product_id, {include:[
    {
      model: Features,
      attributes: ['feature', 'value']
    }
  ]}, {
    benchmark: true,
    logging: console.log,
  })
  .then(data => console.log('Found Product by id: ', JSON.stringify(data, null, 2)))
}

getProducts();
// Create a function that takes in the Product_Id as a value and adds features to the response call.

