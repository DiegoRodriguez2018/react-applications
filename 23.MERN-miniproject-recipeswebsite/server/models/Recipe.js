// maybe add: photo, directions, description, prep tipe, cook time, clean-up time, difficulty, nutrition info, username id, review id, ingredients id, category id
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  ingredientsInRecipe:[{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}],
});

module.exports = mongoose.model('Recipe', recipeSchema);