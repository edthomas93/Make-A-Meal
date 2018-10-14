const express = require('express');
const router = express.Router();
const axios = require('axios');
const app_id = "8117fe3c";
const app_key = "855add853369ee83cc0e41420027dd32";

router.get('/find', (req, res) => {
  axios.get(`https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}&from=0&to=3&calories=591-722&health=alcohol-free`)
  .then(function (response) {
    console.log(response.data.hits);
  })
  .catch(function (error) {
    console.log(error);
  });
  res.render('recipes.ejs');
});

module.exports = router;