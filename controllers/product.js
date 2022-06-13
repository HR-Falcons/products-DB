const { Sequelize, DataTypes } = require('sequelize');
const {Product, Features} = require('./db.js');
// Basic select call

// Create a function that calls find all with offset and limit.
// The new offset is just the limit or count times the page.

function getProducts(limit = 5, page = 0) {

  let result;
  page = page === 0 ? 0 : page - 1;
  let offset = limit * page;

  return Product.findAll({
    limit,
    offset})
  .catch(err => console.log('Product failed to return data!\n Error code: ', err));
}

// console.log(getProducts());

function getProductsById(product_id = 1) {

  let result;
  Product.hasMany(Features, {
    foreignKey: 'product_id'
  });

  return Product.findByPk(product_id, {include:[
    {
      model: Features,
      attributes: ['feature', 'value']
    }
  ]}, {
    benchmark: true,
    logging: console.log,
  })
  .catch(err => console.log('Product failed to return data!\n Error code: ', err));
}

module.exports = {
  getProducts,
  getProductsById,
}
// Create a function that takes in the Product_Id as a value and adds features to the response call.

