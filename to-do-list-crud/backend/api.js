// const Joi = require('joi');
const express = require('express');
const cors = require('cors');
const DbHandler = require('./Db')

//         new DbHandler(<ModelName>)
const Db = new DbHandler('Item'); 
//setup() will configure mongoose 
Db.setup();

// Setting up express.js
const app = express();
app.use(express.json());
app.use(cors());

// app.get('/', ItemDb.getAll);

app.get('/items', Db.getAll);

app.get('/items/:id', Db.getOne);

app.post('/items', Db.post);

app.delete('/items', Db.deleteAll);

app.delete('/items/:id', Db.deleteOne);



app.get('/users', Db.getAll);







app.listen(3500, () => {
  console.log('listening on port 3500');
});