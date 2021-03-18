const db = require('../../data/db-config')

function getRecipes(){
    return db('recipes')
}

function getRecipeById(recipe_id) {
return db('recipe_ingredients as r')
    .join('ingredients as i', 'r.ingredient_id', 'i.ingredient_id')
    .where('recipe_id', recipe_id)
    .select('ingredient_name as Ingredient', 'quantity as Quantity')
}

function getInstructions(recipeId){
    return db('instructions as i')
    .join('recipes as r', 'i.recipe_id', 'r.recipe_id')
    .where('r.recipe_id', recipeId)
    .select('step_number as Step', 'step_instruction as Instruction')
    .orderBy('step_number')
}

module.exports = {
    getRecipes,
    getRecipeById,
    getInstructions
}