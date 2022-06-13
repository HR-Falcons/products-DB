import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  vus: 10,
  duration: '30s'
}


export default function () {
  let product_id = Math.floor(Math.random() * (1000011 - 900002 + 1)) + 900002;
  http.get(`http://localhost:3000/products/${product_id}/styles`);
}