var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect("mongodb://eddyt993:mongopa55word1@ds125713.mlab.com:25713/ingredients", { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'Sorry, unable to connect:'));
db.once('open', function() {
  console.log('Working')
});

module.exports = mongoose;
