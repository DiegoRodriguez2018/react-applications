// This api deals with the GET request so we dont have to do it in the fron end. This help us to work around the CORS error. Note we need to configure setupProxy.js so it redirects the request from port 3000 to port 5000. This approach is useful for handling API authentication. 

const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  return res.send('api working');
});

app.get('/api/quotes', (req, res) => {
  axios.get('http://positive-quotes.herokuapp.com/v1/quotes/random')
    .then(resp => res.send(resp.data));
});

const port = 5000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});