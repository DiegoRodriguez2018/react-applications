const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  isCompleted: Boolean
})

module.exports = mongoose.model('Todo', todoSchema);