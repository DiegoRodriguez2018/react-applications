// const Joi = require('joi');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//configuring mongoose 
mongoose.connect('mongodb://localhost:27017/toDoList');
mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});
mongoose.connection.on('error', () => {
  console.log('failed to connect to mongod');
});

const ToDoList = require('./models/ToDoList');

// Setting up express.js
const app = express();
app.use(express.json());
app.use(cors());


app.get('/list', (req, res) => {
  // return all constellations
  ToDoList.find({})
    .then(doc => res.json(doc));
});

app.post('/list', (req, res) => {
  ToDoList.find().exec(function (err, results) {
    const count = results.length
    console.log('count', ': ', count);
    if (count > 0) {
      console.log('count', ': ', count);
      const item = new ToDoList({ id: (count + 1), item: req.body.item });
      item.save();
    } else {
      const item = new ToDoList({ id: 1, item: req.body.item });
      item.save();
    }
    return count;
  })

  return res.send({ message: "Post received" });
});


app.delete('/list', (req, res) => {

  ToDoList.deleteMany({}, function (err) {
    if (err) {
      console.log(err)
    } else {
      res.end('success');
    }
  }
  );

  return res.send({ message: "Delete request received" });
});


app.listen(3500, () => {
  console.log('listening on port 3500');
});