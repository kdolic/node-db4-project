
exports.seed = function(knex) {
  return knex("instructions").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          recipe_id: 1,
          step_instruction: "Add Pasta, Milk, Chicken, Sauce",
          step_number: 1
        },
        {
          recipe_id: 1,
          step_instruction: "Preheat oven to 420",
          step_number: 2
        },
        {
          recipe_id: 1,
          step_instruction: "Stir often, leave in oven for 30 minutes",
          step_number: 3
        },
        {
          recipe_id: 1,
          step_instruction: "Take out and let it sit for 5 minutes then serve. Enjoy!",
          step_number: 4
        },
        {
          recipe_id: 2,
          step_instruction: "Add Pasta, Milk, Cheese in a pot",
          step_number: 1
        },
        {
          recipe_id: 2,
          step_instruction: "Place in oven at 450 and leave in for 20 minutes",
          step_number: 2
        },
        {
          recipe_id: 2,
          step_instruction: "Let it sit on counter for 3-5 minutes, serve!",
          step_number: 3
        },
        {
          recipe_id: 3,
          step_instruction: "Grab a bowl",
          step_number: 1
        },
        {
          recipe_id: 3,
          step_instruction: "Pour cereal and milk to fill the bowl",
          step_number: 2
        },
        {
          recipe_id: 3,
          step_instruction: "Grab a spoon and ENJOY!",
          step_number: 3
        },
      ]);
    });
};
