const { Recipe } = require("../models");

const recipeData = [
  {
    recipe_name: "Breakfast Fried Rice",
    cook_time: 5,
    category_id: 1,
<<<<<<< HEAD
    recipe_Ingredient: `2 Eggs, 5 Slices of Bacon, 3 green onions (thinly sliced), 3 cups day-old cooked rice, 1/3 cup low-sodium soy sauce, 1 TBSP rice vinegar, 1 TBSP toasted sesame seeds, 1/4 tsp crushed red pepper flakes, 1 TBSP unsalted butter`,
    recipe_text: `In a heavy-bottomed skillet over medium heat, cook the bacon, turning it until it's browned evenly. Remove the bacon from the pan and let drain on paper towels. Once the bacon is cool enough to handle, roughly chop.
    In a large skillet over medium heat, warm the sesame oil until shimmering. Add 2 of the sliced green onions, and cook for 2 to 3 minutes.
    Stir in the cooked rice, breaking up any large clumps. Add the soy sauce, rice vinegar, bacon, toasted sesame seeds, and crushed red pepper flakes. Stir to fully incorporate the ingredients and cook for 5 minutes, or until warmed through.
    In a non-stick skillet over medium heat, add the butter. Crack the eggs into the skillet and immediately cover the pan with a lid. Cook until the egg white is cooked through and the egg yolk is barely set, approximately 5 minutes.
    Place a fried egg on top of each bowl of breakfast fried rice and garnish with the remaining sliced green onion. Serve immediately, being sure to break the yolk over the rice so it can act like a sauce.`,
    picture: "path/to/image.jpg",
  },
  {
    recipe_name: "Ham and Cheese Omelette",
    cook_time: 5,
    category_id: 1,
    recipe_Ingredient: `3 Eggs, 1/3-1/2 cup shredded Cheese, 1/3 cup chopped Ham, 1 TBSP unsalted butter, 1 TBSP cream, Pinch of Salt`,
    recipe_text: `Whisk the eggs with a pinch of salt and cream or milk (if using). Whisk well until fully combined and a bit foamy. Use a non stick 24cm/9.5″ wide pan, or thereabouts (18cm/7 1/4″ flat base). You will need at least 
    1 rubber spatula for cooking, though 2 will make your omelette folding life a whole lot easier! Melt a tiny dab of butter in the pan over medium heat. Once foaming, swirl/spread then, using a rubber spatula (which we need for the omelette), cook the ham just for a minute 
    or two until it is warmed through. Transfer to a bowl and set aside. Return the pan to the stove and melt the remaining butter until foaming. We want the stove on moderate heat; which might be medium low or low for you, depending on the strength of your stove and the size 
    of the stove ring you are using. We don't want it too high else you'll have to deal with the surface burning before the inside cooks through. Too low, and the omelette takes so long to cook it kind of turns rubbery. We need to find the happy medium! Give the eggs a quick whisk 
    then pour into the pan. Leave it for 15 seconds or until you see the edges just start to set. Then, using the rubber spatula, start making long, leisurely strokes, scraping the cooked eggs off the base to allow the uncooked egg to run, until the eggs are partially cooked. Spread 
    the custardy semi-scrambled eggs across the base of the skillet and roughly smooth the surface.  Sprinkle half the omelette with the cheese, then the warmed ham. Ensure the naked side of the omelette is not stuck by running the rubber spatula around the edge (it won't be, because 
    you are using a good non-stick pan!). Then using 2 rubber spatulas, fold the omelette over. Hecking again to ensure the omelette is not stuck to the pan. Then either slide the omelette out like a normal person or be a bit cheffy and flip it out onto the plate. `,
    picture: "path/to/image.jpg",
  },
  {
    recipe_name: "Smashed Avocado Toast With Egg",
    cook_time: 20,
    category_id: 1,
    recipe_Ingredient: `1 Slice of Bread (toasted), 1/2 ripe medium Avocado, 1 hard-boiled Egg, Olive Oil, Salt(to taste)`,
    recipe_text: `Use a fork to smash the avocado down onto the toasted bread slice. Scatter a small squeeze of lemon juice 
    over the avocado. Slice the hard-boiled egg into coins, and then place them on top of the smashed avocado. Finish by sprinkling 
    a little pepper, salt, and a very light drizzle of olive oil on top of the egg.`,
    picture: "path/to/image.jpg",
=======
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
>>>>>>> 848a9f70f893d4b52bedd62a624a3407eb564c72
  },
  {
    recipe_name: "Quick Overnight Oats",
    cook_time: 5 (Chill Time: 8 Hours),
    category_id: 1,
    recipe_Ingredient: `1/2 cup rolled oats, 1/2 cup milk (dairy or dairy-free), 1/4 cup Greek Yogurt (dairy or dairy-free), 1 TBSP Chia Seeds, 1 TBSP Maple Syrup`,
    recipe_text: ` In a small jar, stir together the oats, milk, yogurt, chia seeds, and maple syrup. Place the jar in the fridge to let the oats soak for at least 
    2 hours, though overnight is best.The next morning, add your favorite toppings and enjoy! Alternatively, you can scoop the oats out into a bowl and add toppings from there.`,
    picture: "path/to/image.jpg",
  },
  {
    recipe_name: "Easy Blueberry Muffins",
    cook_time: 25,
    category_id: 1,
    recipe_Ingredient: `1 1/2 cups All-Purpose Flour, 3/4 Granulated Sugar, 1/2 tsp salt, 2 tsp baking powder, 1/3 cup vegetable oil, 1 Egg, 1/3-1/2 cup milk, 1 1/2 TSP Vanilla Extract, 1 cup frozen blueberries`,
    recipe_text: `Preheat oven to 400º F (Makes 12 regular size muffins). In a large bowl whisk flour, sugar, baking powder and salt. Use a measuring cup that holds at least 1 cup and add vegetable oil, add the egg and 
    then fill the cup to the 1-cup line with milk (about ⅓ to a ½ cup of milk). Add vanilla and whisk until combined. Add milk mixture to the bowl with all purpose flour and sugar (the dry ingredients) then use a fork to combine. Do not over mix. (The muffin batter will be pretty thick).
    Add blueberries and use a spatula or spoon to gently fold the blueberries into the muffin batter. Divide the batter between the muffin cups filling about ½ full using your ice cream scoop. Sprinkle a little granulated sugar on top of each muffin. 
    Bake for 15-20 minutes or until a toothpick insert comes out clean.`,
    picture: "path/to/image.jpg",
  },
  {
    recipe_name: "Ground Beef and Rice Skillet",
    cook_time: 30, 
    category_id: 2,
    recipe_Ingredient: `1.5lb Ground Beef, 1 Yellow Onion, 1 Red Bell Pepper, 2 minced cloves garlic, 1 TSP Salt, 1 TSP Pepper, 10oz Rotel Diced Tomatoes & Green Chilies (undrained), 1 1/2 cups Beef Broth, 1 cup Long Grain Rice, 2 TBSP Worchestershire Sauce, 1 cup shredded Cheddar Cheese`,
    recipe_text: `In a large skillet, brown ground beef over medium-high heat. Drain and return to skillet. While meat is browning, dice onion and bell pepper. Add onion, pepper, garlic, salt, and pepper to meat and stir to mix. Cook 3 minutes stirring occasionally.
    Add beef broth, rice, Rotel, and Worcestershire to the skillet and stir to mix. Bring to a boil, reduce heat and cover. Simmer for 20 minute or until rice is tender. Remove from heat and sprinkle with cheese. Serve with chopped parsley if desired.`,
    picture: "path/to/image.jpg",
  },
  {
    recipe_name: "Juicy BLT",
    cook_time: 10,
<<<<<<< HEAD
    category_id: 2, 
    recipe_Ingredient: `4 Thick-Cut Bacon, 1 Heirloom Tomato, 1 TSP red wine vinegar, 1 1/2 TBSP Extra-Virgin Olive Oil, Salt, Pepper, 2 Slices of Bread, 1/3 Cup Mayonnaise, 3 Butter Lettuce Leaves`,
    recipe_text: `Heat a cast iron skillet over medium heat and melt the butter in the pan.
    Place each piece of bread face down on the skillet and cook on one side until golden and toasted. Repeat with all the pieces of bread. Set aside.
    In a small bowl, combine the mayonnaise and garlic and whisk together. Slice your tomatoes fairly thick and season well with salt and pepper.
    Prepare your lettuce. Assemble your sandwiches right before serving by spreading the mayo mixture on the untoasted side of all the pieces of bread.
    Top one piece of mayo'd bread with several pieces of lettuce, slices of seasoned tomatoes and as much bacon as you want. Then place another piece of mayo'd bread on top (mayo side down of course!) Serve and enjoy!`,
    picture: "path/to/image.jpg",
  },
  {
    recipe_name: "Tuna Melt"
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
=======
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
>>>>>>> 848a9f70f893d4b52bedd62a624a3407eb564c72
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },
  {
    recipe_name:
    cook_time:
    category_id:
    recipe_Ingredient:
    recipe_text:
    picture: "path/to/image.jpg",
  },

];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
