require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Todo = require('./models/Todo');

const driver = process.env.MONGO_DRIVER;
mongoose.connect(driver);

mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});

mongoose.connection.on('error', () => {
  console.log('failed to connect to mongod');
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Connected to API'));

app.post('/todos', (req, res) => {
  const { title } = req.body;
  new Todo({
    title,
    isCompleted: false
  }).save()
    .then(doc => res.send(doc));
});

app.get('/todos', (req, res) => {
  Todo.find({})
    .then(docs => res.send(docs));
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  Todo.deleteOne({ _id: id })
    .then(resp => res.send(`deleted ${id}`));
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));