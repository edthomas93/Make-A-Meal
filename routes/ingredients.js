const express = require('express');
const router = express.Router();
const ingredientsModel = require('../models/ingredientsModel');

router.get('/', (req, res) => {
  ingredientsModel.getIngredients()
  .then(result => res.render('index.ejs', {ingredients: result}))
})

router.post('/new', (req, res) => {
  console.log('anything')
  ingredientsModel.postIngredients(req.body)
  .then(res.redirect('/'))
})

module.exports = router;