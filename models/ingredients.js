var mongoose = require('../index.js');

var ingredientSchema = new mongoose.Schema({
  name: String,
  quantity: Number
});

var Ingredient = mongoose.model('Ingredient', ingredientSchema);

var banana = new Ingredient({name: "banana", quantity: 4});

banana.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

Ingredient.updateOne({ name: 'banana' }, { quantity: 10 }, function(err, res) {
  if (err) return handleError(err);
  // Updated at most one doc, `res.modifiedCount` contains the number
  // of docs that MongoDB updated
});
