const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  id: Number,
  item: String
}, {collection: 'list'});

module.exports = mongoose.model('List', listSchema);