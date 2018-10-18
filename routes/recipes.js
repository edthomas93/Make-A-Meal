const express = require('express');
const router = express.Router();
const axios = require('axios');
const app_id = "8117fe3c";
const app_key = "855add853369ee83cc0e41420027dd32";
const ingredientsModel = require('../models/ingredientsModel')

router.get('/find', (req, res) => {
  ingredientsModel.getIngredients()
    .then(result => iterateIngredients(result));
  // .then(result => getRecipes(result[0].name))
  // .then(recipes => res.render('recipes.ejs', {recipes: recipes.data.hits}))
});

async function iterateIngredients(ingredients) {
  const promises = ingredients.map(ingredient => {
    getRecipes(ingredient.name);
  })
  await Promise.all(promises);
  console.log('Recipes :', promises);
}

function getRecipes(ingredient) {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.edamam.com/search?q=${ingredient}&app_id=${app_id}&app_key=${app_key}&from=0&to=3`)
    .then(function (response) {
      resolve(response)
    })
    .catch(function (error) {
      reject(error)
    });
  })
}

module.exports = router;