const express = require('express');
// const Joi = require('joi');

//configuring mongoose 
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/countries');
mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});
mongoose.connection.on('error', () => {
  console.log('failed to connect to mongod');
});

const Country = require('./models/Country');

const app = express();

// Setting up express.js
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => {
    // return all Countrys
    Country.find({})
      .then(doc => res.json(doc));
});


app.get('/Country', (req, res) => {
    // return all Countrys
    Country.find({})
      .then(doc => res.send(doc));
  });


// // get '/starData' to controller#action
// app.get('/starData', (req, res) => {
//   return res.send(starData);
// });

app.get('/Country/:id', (req, res) => {
  // return one Country
  const { id } = req.params;
  Country.findOne({ id })
    .then(doc => res.send(doc));
});

// app.get('/Country/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   console.log('id',': ', id);
  
//   const CountryInfo = Country.find(p => p.id === id);
//   if (!CountryInfo) {
//     // STATUS CODES:
//     // 200 range - all good
//     // 300 range - redirected
//     // 400 range - user error
//     // 500 range - server error
//     return res.status(404).send('starData not found!');
//   }
//   return res.send(CountryInfo);
// });




app.listen(3500, () => {
  console.log('listening on port 3500');
});