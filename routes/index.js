const express = require('express');
const controllers = require('../controllers/controllers.js');
const app = express();
const port = 3000;

// {
//   product: {
//     getProducts: [Function: getProducts],
//     getProductsById: [Function: getProductsById]
//   },
//   related: { getRelatedById: [Function: getRelatedById] },
//   styles: { getStylesById: [Function: getStylesById] }
// }

// Env variables

// Middleware

app.get('/', (req, res) => {
  res.send('You have connected to the Products API!');
});

app.get('/products', (req, res) => {

  controllers.product.getProducts()
  .then(data => (res.send(data)))
  .catch(err => (res.send('Products API has failed!\n Error: ', err)));

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});