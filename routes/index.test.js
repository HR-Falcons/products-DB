/* globals describe, expect, it */
const request = require('supertest');
const app = require('./index.js');

describe("GET /products", () => {

  test('Should respond with a 200 status code', (done) => {
    request(app).get('/products')
    .then(response => {
      expect(response.statusCode).toBe(200);
      done();
    })
  });

  test('Should respond with a 400 status code', (done) => {
    request(app).get('/products?page=j&&count=i')
    .then(response => {
      expect(response.statusCode).toBe(400);
      done();
    })
  });

  test('Should respond with a 200 status code', (done) => {
    request(app).get('/products?page=3&&count=1')
    .then(response => {
      expect(response.statusCode).toBe(200);
      done();
    })
  });
});

describe("GET /products/:product_id", () => {

  test('Should respond with a 200 status code', (done) => {
    request(app).get('/products/1')
    .then(response => {
      expect(response.statusCode).toBe(200);
      done();
    })
  });

  test('Should respond with a 400 status code', (done) => {
    request(app).get('/products/i')
    .then(response => {
      expect(response.statusCode).toBe(400);
      done();
    })
  });


});

describe("GET /products/:product_id/styles", () => {

  test('Should respond with a 200 status code', (done) => {
    request(app).get('/products/1/styles')
    .then(response => {
      expect(response.statusCode).toBe(200);
      done();
    })
  });

  test('Should respond with a 400 status code', (done) => {
    request(app).get('/products/i/styles')
    .then(response => {
      expect(response.statusCode).toBe(400);
      done();
    })
  });


});
