const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://eddyt993:mongopa55word1@ds125713.mlab.com:25713/ingredients";

app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect(url, (err, database) => {
  if (err) return console.log(err);

  var db = database.db('ingredients')

  app.listen(8080, () => {
    console.log('listening on 8080')
    app.get('/', (req, res) => {
      res.sendFile('/Users/edwardthomas/Projects/PostCourse/Make-A-Meal/index.html')
    })
    app.post('/next', (req, res) => {
      db.collection('ingredients').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/')
      })
    })
  })
})
