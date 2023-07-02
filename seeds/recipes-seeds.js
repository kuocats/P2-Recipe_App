const { Recipe } = require("../models");

const recipeData = [
  {
    recipe_name: "Fries eggs",
    cook_time: 10,
    category_id: 1,
    recipe_text: `Heat a non-stick frying pan over medium heat. Add a small amount of butter to the pan and let it melt and coat the surface. Crack the egg into a small bowl or directly into the pan, being careful not to break the yolk. Sprinkle a pinch of salt and pepper over the egg.
    Allow the egg to cook undisturbed for about 2 minutes or until the whites are set but the yolk is still runny.
    If desired, you can carefully flip the egg using a spatula to cook the other side for an additional 30 seconds to 1 minute.
    Once cooked to your liking, remove the fried egg from the pan and transfer it to a plate.
    Season with additional salt and pepper, if desired.
    Serve the fried egg immediately as a standalone dish or as part of a breakfast or brunch.
    Enjoy your delicious fried egg!`,
    picture: "uploads/image.jpeg",
  },
  {
    recipe_name: "Beef steak",
    cook_time: 15,
    category_id: 4,
    recipe_text: `Remove the beef steak from the refrigerator and let it come to room temperature for about 30 minutes.
    Preheat a grill or a cast-iron skillet over high heat. Make sure it's very hot before cooking the steak.
    While the grill or skillet is heating, pat the steak dry with paper towels and season it generously with salt and pepper on both sides.
    If using garlic cloves and fresh herbs, you can rub them onto the steak to add extra flavor.
    If using a grill, lightly oil the grates. If using a skillet, add a drizzle of olive oil to coat the bottom.
    Carefully place the steak onto the hot grill or skillet. If using a skillet, you can also add a knob of butter for extra flavor.
    Cook the steak for about 4-5 minutes per side for medium-rare, or adjust the cooking time to your preferred doneness. You can use a meat thermometer to check the internal temperature (120-130°F / 49-54°C for medium-rare).`,
    picture: "uploads/image.jpeg",
  },
  {
    recipe_name: "Pizza Margherita",
    cook_time: 45,
    category_id: 8,
    recipe_text: `In a small bowl, combine the warm water, sugar, and yeast. Stir gently and let it sit for about 5 minutes until the mixture becomes frothy.

    In a large mixing bowl, combine the flour and salt. Make a well in the center and pour in the yeast mixture and olive oil.
    
    Stir the mixture with a wooden spoon until it comes together, then transfer it to a lightly floured surface.
    
    Knead the dough for about 5-7 minutes until it becomes smooth and elastic. Add more flour if needed to prevent sticking.
    
    Place the dough in a greased bowl and cover it with a clean kitchen towel. Let it rise in a warm area for about 1-2 hours until it doubles in size.
    
    Preheat your oven to the highest temperature (typically around 500°F/260°C).
    
    Once the dough has risen, punch it down and divide it into two equal portions. Roll out each portion into a round pizza shape on a lightly floured surface.
    
    Transfer the rolled-out dough to a baking sheet or pizza stone.
    
    Spread half of the tomato sauce or crushed tomatoes over each pizza dough, leaving a small border around the edges.
    
    Sprinkle the shredded mozzarella cheese evenly over the sauce.
    
    Tear fresh basil leaves and scatter them on top of the cheese. Drizzle a little extra-virgin olive oil over the pizza.
    
    Season with salt and pepper to taste.
    
    Place the pizzas in the preheated oven and bake for about 12-15 minutes or until the crust is golden and the cheese is bubbly and slightly browned.
    
    Remove the pizzas from the oven and let them cool for a few minutes.`,
    picture: "uploads/image.jpeg",
  },
  {
    recipe_name: "Scallops with lemon",
    cook_time: 10,
    category_id: 9,
    recipe_text: `Season the scallops with salt and pepper on both sides.
    
    Heat olive oil in a large skillet over medium-high heat.
    
    Once the oil is hot, add the scallops to the skillet in a single layer. Make sure not to overcrowd the pan. If necessary, cook them in batches.
    
    Cook the scallops for about 2-3 minutes per side until they are golden brown and opaque in the center. Avoid overcooking as scallops can become rubbery.
    
    Remove the cooked scallops from the skillet and set them aside.
    
    In the same skillet, add minced garlic and cook for about 1 minute until fragrant.
    
    Add lemon zest and lemon juice to the skillet. Stir well to combine with the garlic.
    
    Bring the lemon-garlic mixture to a simmer and cook for another 1-2 minutes until the sauce slightly thickens.
    
    Return the cooked scallops to the skillet and toss them gently in the lemon-garlic sauce to coat.
    
    Remove the skillet from the heat.
    
    Serve the scallops with lemon immediately, garnished with freshly chopped parsley.`,
    picture: "uploads/image.jpeg",
  },
  {
    recipe_name: " Angus Burder with bacon",
    cook_time: 29,
    category_id: 3,
    recipe_text: `Cook the bacon in a separate skillet over medium heat until crispy. Once cooked, transfer the bacon to a paper towel-lined plate to drain excess grease.

Place the burger patties on the preheated grill or skillet. Cook for about 4-5 minutes on each side for medium doneness or adjust the cooking time to your desired level of doneness.

During the last couple of minutes of cooking, place a slice of cheddar cheese on each patty to melt.

While the burgers are cooking, lightly toast the hamburger buns on the grill or in a toaster.

Assemble the burgers by placing a cooked patty on the bottom half of each bun.

Top each patty with a slice of bacon, lettuce leaves, tomato slices, red onion slices, and pickles if desired.

Spread your preferred condiments on the top half of the buns, such as ketchup, mustard, or mayo.

Place the top bun on the assembled burger.`,
    picture: "uploads/image.jpeg",
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
