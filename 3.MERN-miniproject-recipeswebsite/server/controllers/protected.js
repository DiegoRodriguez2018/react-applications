const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Recipe = require('../models/Recipe');
const Ingredient = require('../models/Ingredient');

//GET current route (required, only authenticated users have access)
//working

const isAuthenticated = (req, res, next) => {
  const { token } = req.headers;
  //to validate a token we call the verify method:
  const SECRET = 'secret'; // note this is just for demonstration proposes, we need to store this in some kind of env variable. 
  const decoded = jwt.verify(token, SECRET);
  // jwt.verify will return a decoded version of the token with the data we sent in it. 

  console.log(decoded);
  req.headers.username = decoded.username;
  next();
}

router.get('/current', isAuthenticated, (req, res, next) => {
  const { username } = req.headers;
  console.log('req.headers', ': ', req.headers);

  return res.send(`Authenticated! Welcome ${username}`);

});

router.get('/', (req, res) => {
  return res.send("protected route working")
})

router.get('/ingredients', (req, res) => {
  Ingredient.find({}, (err, docs) => {
    return res.send(docs);
  })
});

router.get('/recipes',isAuthenticated, (req, res) => {
  Recipe.find({}).
    populate('ingredientsInRecipe').
    exec((err, docs) => {
      return res.send(docs);
    })
});


module.exports = router;
