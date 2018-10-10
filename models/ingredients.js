var mongoose = require('../index.js');

var ingredientSchema = new mongoose.Schema({
  name: String,
  quantity: Number
});

var Ingredient = mongoose.model('Ingredients', ingredientSchema);

var banana = new Ingredient({name: "banana", quantity: 4});
banana.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
