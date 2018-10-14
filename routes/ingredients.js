const express = require('express');
const router = express.Router();
const ingredientsModel = require('../models/ingredientsModel');

router.get('/', (req, res) => {
  ingredientsModel.getIngredients()
  .then(result => res.render('index.ejs', {ingredients: result}))
})

// router.post('/ingredients/new', (req, res) => {
//   db.collection('ingredients').insertOne(req.body, (err, result) => {
//     if (err) return console.log(err)
//     console.log('saved to database')
//     res.redirect('/')
//   })
// })

module.exports = router;