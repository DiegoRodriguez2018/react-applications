const mongoose = require('mongoose');

const constellationSchema = new mongoose.Schema({
  id: Number,
  constellationName: String
});

module.exports = mongoose.model('Country', countrySchema);