const Db = require('./Db')

// const Joi = require('joi');
const express = require('express');
const cors = require('cors');

//configuring mongoose 
Db.setup();

// Setting up express.js
const app = express();
app.use(express.json());

app.use(cors());

app.get('/', Db.getAll);

app.get('/list', Db.getAll);

app.get('/list/:id', Db.getOne);

app.post('/list', Db.post);

app.delete('/list/deleteAll', Db.deleteAll);

app.delete('/list/delete/:id', Db.deleteOne);

app.listen(3500, () => {
  console.log('listening on port 3500');
});