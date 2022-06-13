const express = require('express');
const controllers = require('../controllers/controllers.js');
const app = express();
const port = 3000;
jest.setTimeout(10000);

// Env variables

// Middleware

app.get('/', (req, res) => {
  res.send('You have connected to the Products API!');
});

// Product routes
app.get('/products', (req, res) => {
  let isCount = !req.query.count || parseInt(req.query.count) > 0;
  let isPage = !req.query.page || parseInt(req.query.page) > 0;
  if(isCount && isPage) {

    controllers.product.getProducts(req.query.count, req.query.page)
    .then(data => (res.status(200).send(data)))
    .catch(err => (res.send('Products API has failed!\n Error: ', err)));
  } else {
    res.status(400).send({});
  }

});

app.get('/products/:product_id', (req, res) => {
  let isProduct_id = !req.params.product_id || parseInt(req.params.product_id) > 0;
  if (isProduct_id) {

    controllers.product.getProductsById(req.params.product_id)
    .then(data => (res.status(200).send(data)))
    .catch(err => (res.send('Products API has failed!\n Error: ', err)));
  } else {
    res.status(400).send({});
  }

});
// End of Product routes

// Styles routes
app.get('/products/:product_id/styles', (req, res) => {

  let isProduct_id = parseInt(req.params.product_id) > 0;
  if (isProduct_id) {

    console.log('Params product id: ', isProduct_id);
    controllers.styles.getStylesById(req.params.product_id)
    .then(data => (res.status(200).send(data)))
    .catch(err => (res.send('Products API has failed!\n Error: ', err)));
  } else {
    res.status(400).send({});
  }



});

// End of Styles routes

// Related routes

app.get('/products/:product_id/related', (req, res) => {
  controllers.related.getRelatedById(req.params.product_id)
  .then(data => (res.status(200).send(data)))
  .catch(err => (res.send('Related API has failed!\n Error: ', err)));
});

// End of Related routes

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

module.exports = app;