const DbHandler = require('./DbHandler')

// const Joi = require('joi');
const express = require('express');
const cors = require('cors');

//configuring mongoose 
DbHandler.setup();

// Setting up express.js
const app = express();
app.use(express.json());

app.use(cors());

app.get('/', DbHandler.getAll);

app.get('/list', DbHandler.getAll);

app.get('/list/:id', DbHandler.getOne);

app.post('/list', DbHandler.post);

app.delete('/list/deleteAll', DbHandler.deleteAll);

app.delete('/list/delete/:id', DbHandler.deleteOne);

app.listen(3500, () => {
  console.log('listening on port 3500');
});