const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: Number,
  item: String
}, {collection: 'item'});

module.exports = mongoose.model('Item', itemSchema);

//mongoose.model(modelName, schema):