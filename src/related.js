const { Sequelize, DataTypes } = require('sequelize');
const {Related} = require('./db.js');


// Use the findAll function with the Where clause to select data based on the product_id
function getRelatedById(current_product_id = 1) {

  let result = [];
  Related.findAll({
    where: {current_product_id},
    attributes: ['related_product_id']
  })
  .then((data) => {
      data.forEach(related_id => {
        result.push(related_id.related_product_id);
      });
      console.log('Found Product by id: ', JSON.stringify(result, null, 2))

    })
  .catch(err => console.log('Related products call failed. Error: ', err));
}

// Format data

// Found Product by id:  [
  // {
  //   "related_product_id": 5
  // },
  // {
  //   "related_product_id": 9
  // },
  // {
  //   "related_product_id": 7
  // },
  // {
  //   "related_product_id": 2
  // }

// To


getRelatedById(3);