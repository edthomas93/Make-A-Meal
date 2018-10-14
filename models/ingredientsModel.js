const MongoClient = require('mongodb').MongoClient;
const dbUrl = "mongodb://eddyt993:mongopa55word1@ds125713.mlab.com:25713/ingredients";

var db;

MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err)

  db = database.db('ingredients')
})

function getIngredients(){
  return new Promise((resolve, reject) => {
    db.collection('ingredients').find().toArray((err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

module.exports.getIngredients = getIngredients;