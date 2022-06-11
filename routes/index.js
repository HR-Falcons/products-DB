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

// Product routes
app.get('/products', (req, res) => {
  console.log('query data', req.query);
  controllers.product.getProducts(req.query.count, req.query.page)
  .then(data => (res.send(data)))
  .catch(err => (res.send('Products API has failed!\n Error: ', err)));

});

app.get('/products/:product_id', (req, res) => {

  controllers.product.getProductsById(req.params.product_id)
  .then(data => (res.send(data)))
  .catch(err => (res.send('Products API has failed!\n Error: ', err)));

});
// End of Product routes

// Styles routes
app.get('/products/:product_id/styles', (req, res) => {

  controllers.styles.getStylesById(req.params.product_id)
  .then(data => (res.send(data)))
  .catch(err => (res.send('Products API has failed!\n Error: ', err)));

});

// End of Styles routes

// Related routes

app.get('/products/:product_id/related', (req, res) => {
  controllers.related.getRelatedById(req.params.product_id)
  .then(data => (res.send(data)))
  .catch(err => (res.send('Related API has failed!\n Error: ', err)));
});

// End of Related routes

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});