const express = require('express');
const router = new express.Router();
const Ingredient = require('../models/Ingredient');
const Recipe = require('../models/Recipe');

const isAuthenticated = (req, res, next) => {
    console.log('req.user', ': ', req.user);
    if (!req.user) {
        return res.status(403).send('Not authorised, please login.')
    }
    next();
}

router.use(isAuthenticated);

router.post('/', (req,res) => {
    const { username } = req.headers;
    return res.send(`Authenticated! Welcome ${username}`);
})

router.get('/', (req, res) => {
    return res.send('You have accessed the protected resources');
})

router.get('/ingredients', (req,res)=>{
    Ingredient.find({}, (err,docs)=>{
        return res.send(docs);
    })
});

router.get('/recipes', (req,res)=>{
    Recipe.find({}).
    populate('ingredientsInRecipe').
    exec((err,docs)=>{
        return res.send(docs);
    })
});

module.exports = router;