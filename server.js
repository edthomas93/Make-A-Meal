const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const ingredientsRoutes = require('./routes/ingredients');
const recipesRoutes = require('./routes/recipes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/ingredients', ingredientsRoutes);
app.use('/recipes', recipesRoutes);

app.listen(8080, () => {
  console.log('listening on 8080');
});

app.get('/', (req, res) => {
  res.redirect('/ingredients');
});