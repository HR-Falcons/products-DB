const express = require('express');
const controllers = require('../controllers/controllers.js');
const app = express();
const cors = require('cors');
const port = 3000;

// Env variables

// Middleware
app.use(cors());

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
    res.status(500).send({});
  }

});

app.get('/products/:product_id', (req, res) => {
  let isProduct_id = !req.params.product_id || parseInt(req.params.product_id) > 0;
  if (isProduct_id) {

    controllers.product.getProductsById(req.params.product_id)
    .then(data => (res.status(200).send(data)))
    .catch(err => (res.send('Products API has failed!\n Error: ', err)));
  } else {
    res.status(500).send({});
  }

});
// End of Product routes

// Styles routes
app.get('/products/:product_id/styles', (req, res) => {

  let isProduct_id = parseInt(req.params.product_id) > 0;
  if (isProduct_id) {

    console.log('Params product id: ', isProduct_id);
    controllers.styles.getStylesById(req.params.product_id)
    .then(data => (res.status(200).send(
      {
        product_id: req.params.product_id,
        results: data,
      }
    )))
    .catch(err => (res.send('Products API has failed!\n Error: ', err)));
  } else {
    res.status(500).send({});
  }



});

// End of Styles routes

// Related routes

app.get('/products/:product_id/related', (req, res) => {
  controllers.related.getRelatedById(req.params.product_id)
  .then(data => (res.status(200).send(data)))
  .catch(err => (res.send('Related API has failed!\n Error: ', err)));
});

app.get('/loaderio-d9615ddbbf60d65a0e02e22d78217c06.txt', (req, res) => {
  res.sendFile(`${__dirname}/loaderio-d9615ddbbf60d65a0e02e22d78217c06.txt`);
})

// End of Related routes

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

module.exports = app;
