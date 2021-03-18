const express = require('express')
const router = express.Router()

const Recipe = require('./recipe-model')

router.get('/', async (req, res, next) => {
    try{
        const recipe = await Recipe.getRecipes()
        res.status(200).json(recipe)
    } catch(err){
        next(err)
    }
})

router.get('/:id/recipes', async (req, res, next) => {
    try{
        const recipeById = await Recipe.getRecipeById(req.params.id)
        res.status(200).json(recipeById)
    } catch(err){
        next(err)
    }
})

router.get('/:id/instructions', async (req, res, next) => {
    try{
        const instructions = await Recipe.getRecipeById(req.params.id)
        res.status(200).json(instructions)
    } catch(err){
        next(err)
    }
})

module.exports = router