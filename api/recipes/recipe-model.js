const db = require('../../data/db-config')

function getRecipes(){
    return db('recipes')
}

function getRecipeById(recipe_id) {

}

module.exports = {
    getRecipes,
    getRecipeById,
}