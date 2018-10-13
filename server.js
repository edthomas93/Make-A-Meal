const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://eddyt993:mongopa55word1@ds125713.mlab.com:25713/ingredients";

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

MongoClient.connect(url, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err)

  var db = database.db('ingredients')

  app.listen(8080, () => {
    console.log('listening on 8080')
    app.get('/', (req, res) => {
      db.collection('ingredients').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('index.ejs', {ingredients: result})
      })
    })
    app.post('/ingredients/new', (req, res) => {
      db.collection('ingredients').insertOne(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/')
      })
    })
  })
})
