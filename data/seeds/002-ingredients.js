
exports.seed = function(knex) {
  return knex("ingredients").truncate()
    .then(function () {
      return knex("ingredients").insert([
        {ingredient_name: "Pasta" },
        {ingredient_name: "Chicken"},
        {ingredient_name: "Sauce"},
        {ingredient_name: "Cheese"},
        {ingredient_name: "Milk"},
        {ingredient_name: "Cocoa Puffs"},
      ]);
    });
};
