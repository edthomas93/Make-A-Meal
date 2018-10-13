const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const axios = require('axios');
const dbUrl = "mongodb://eddyt993:mongopa55word1@ds125713.mlab.com:25713/ingredients";
const app_id = "8117fe3c";
const app_key = "855add853369ee83cc0e41420027dd32";

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

var db;

MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err)

  db = database.db('ingredients')
})

app.listen(8080, () => {
  console.log('listening on 8080');
});

app.get('/', (req, res) => {
  db.collection('ingredients').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {ingredients: result})
  })
})

app.get('/recipes/find', (req, res) => {
  axios.get(`https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}&from=0&to=3&calories=591-722&health=alcohol-free`)
  .then(function (response) {
    console.log(response.data.hits);
  })
  .catch(function (error) {
    console.log(error);
  });
  res.render('recipes.ejs');
});

app.post('/ingredients/new', (req, res) => {
  db.collection('ingredients').insertOne(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})