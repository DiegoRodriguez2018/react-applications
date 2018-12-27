// const Joi = require('joi');
const cors = require('cors');

// Setting up express.js
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());

//Setting up MongooseHandler
const MongooseHandler = require('./MongooseHandler')
// setup is a MongooseHandler static method and takes databaseName as an argument
MongooseHandler.setup('myList');
// note that if databaseName does not exist Mongoose will create one.

const ResourcesGenerator = require ('./ResourcesGenerator');
// ResourcesGenerator, generates get, post, put and delete routes for the specified routeName. eg:
// app.get('/items', Db.getAll);
// app.delete('/items/:id', Db.deleteOne);

//ResourcesGenerator requires a routeName, which has to correspond to a mongoose model. 
const itemsResources = new ResourcesGenerator('items');
// Note that generate also requires app as an argument. 
itemsResources.generate(app);

const usersResources = new ResourcesGenerator('users');
usersResources.generate(app);


app.listen(3500, () => {
  console.log('listening on port 3500');
});