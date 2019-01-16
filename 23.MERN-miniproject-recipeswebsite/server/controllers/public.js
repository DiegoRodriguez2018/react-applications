const express = require('express');
const router = new express.Router();

const Ingredient = require('../models/Ingredient');
const Recipe = require('../models/Recipe');

router.get('/', (req, res) => {
    return res.send('api working');
});

router.get('/ingredients', (req,res)=>{
    Ingredient.find({}, (err,docs)=>{
        return res.send(docs);
    })
});

router.get('/recipes', (req,res)=>{
    //POPULATE IMPLEMENTATION:
    //This match the _id in ingredientsInRecipe with the _id in ingredients collection and returns a populated recipe collection with data from ingredients. 
    Recipe.find({}).
    populate('ingredientsInRecipe').
    exec((err,docs)=>{
        return res.send(docs);
    })

    // Recipe.find({}).
    // then(doc=> {
    //     return res.send(doc)
    // })

});




module.exports=router;
