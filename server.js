const express = require('express');
const bodyParser= require('body-parser')
const app = express();
// var mongoose = require('mongoose');
// var db = mongoose.connection;

app.use(bodyParser.urlencoded({extended: true}))

app.listen(8080, function() {
  console.log('listening on 8080')
  app.get('/', (req, res) => {
    res.sendFile('/Users/edwardthomas/Projects/PostCourse/Make-A-Meal/index.html')
  })

  app.post('/next', (req, res) => {
    console.log(req.body)
  })
})

// mongoose.connect("mongodb://eddyt993:mongopa55word1@ds125713.mlab.com:25713/ingredients", { useNewUrlParser: true });
// db.on('error', console.error.bind(console, 'Sorry, unable to connect:'));
// db.once('open', function() {
//   console.log('Working')
// });
//
// module.exports = mongoose;
