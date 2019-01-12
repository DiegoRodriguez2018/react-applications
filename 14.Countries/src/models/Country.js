const mongoose = require('mongoose');

const constellationSchema = new mongoose.Schema({
  id: Number,
  name: String
});

module.exports = mongoose.model('Country', countrySchema);