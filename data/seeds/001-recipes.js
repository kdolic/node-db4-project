
exports.seed = function(knex) {
  return knex("recipes").truncate()
    .then(function () {
      return knex("recipes").insert([
        {recipe_name: "Spaghetti Bolognese"},
        {recipe_name: "Mac & Cheese"},
        {recipe_name: "Cereal"}
      ]);
    });
};
