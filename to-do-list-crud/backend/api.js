const DbHandler = require('./Db')

const Db = new DbHandler('Item'); 
//DbHandler(<ModelName>)

//configuring mongoose 
Db.setup();

// const Joi = require('joi');
const express = require('express');
const cors = require('cors');

// Setting up express.js
const app = express();
app.use(express.json());

app.use(cors());

app.get('/', Db.getAll);

app.get('/items', Db.getAll);

app.get('/items/:id', Db.getOne);

app.post('/items', Db.post);

app.delete('/items/deleteAll', Db.deleteAll);

app.delete('/items/delete/:id', Db.deleteOne);

app.listen(3500, () => {
  console.log('listening on port 3500');
});