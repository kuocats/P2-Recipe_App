document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const recipeInput = document.getElementById("recipeInput");
  const recipeContainer = document.getElementById("recipeContainer");

  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Get the value from the input field

    const userInput = recipeInput.value.trim();
    if (userInput === "") {
      // If the input is empty, clear
      recipeContainer.innerHTML = "";
      return;
    }

    const apiUrl = `http://localhost:3001/api/recipes/${encodeURIComponent(
      userInput
    )}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Clear the recipeContainer before adding new recipes
      recipeContainer.innerHTML = "";

      data.forEach((recipe) => {
        // Create the elements
        const recipeDiv = document.createElement("div");
        const recipeName = document.createElement("h2");
        const recipeText = document.createElement("p");
        const cookTime = document.createElement("p");
        const ingredientsList = document.createElement("ul");
        const categoryLink = document.createElement("a");
        const recipeImage = document.createElement("img"); // Image element for the picture

        // Set the content for each element
        recipeName.textContent = recipe.recipe_name;
        recipeText.textContent = recipe.recipe_text;
        cookTime.textContent = "Cook Time: " + recipe.cook_time + " minutes";
        // Add the "recipe-title" class to the h2 element
        recipeName.id = "recipe-title";

        // Set the picture
        // Use the correct image path here
        recipeImage.src = `http://localhost:3001/${recipe.picture}`;
        // Provide an alternative text for the image
        recipeImage.alt = recipe.recipe_name;
        // Add the "recipe-photo" class to the image
        recipeImage.classList.add("recipe-photo");

        // Create a heading for ingredients
        const ingredientsTitle = document.createElement("h3");
        ingredientsTitle.textContent = "Ingredients";
        // Create clickable ingredients
        recipe.ingredients.forEach((ingredient) => {
          const ingredientItem = document.createElement("li");
          const ingredientLink = document.createElement("a");
          ingredientLink.textContent = ingredient.ingredient_name;
          ingredientLink.href = `http://localhost:3001/api/recipes?ingredient=${encodeURIComponent(
            ingredient
          )}`;

          ingredientItem.appendChild(ingredientLink);
          ingredientsList.appendChild(ingredientItem);
        });

        // Set category link
        categoryLink.textContent = "Category: " + recipe.category.category_name;
        categoryLink.href = `http://localhost:3001/api/recipes?category=${encodeURIComponent(
          recipe.category
        )}`;

        // Append the elements to the recipeDiv
        recipeDiv.appendChild(recipeName);
        recipeDiv.appendChild(recipeImage); // Append the image to the recipeDiv
        recipeDiv.appendChild(recipeText);
        recipeDiv.appendChild(cookTime);
        recipeDiv.appendChild(ingredientsTitle);
        recipeDiv.appendChild(ingredientsList);

        recipeDiv.appendChild(categoryLink);

        // Append the recipeDiv to the recipeContainer
        recipeContainer.appendChild(recipeDiv);
      });

      // Add slide-in animation
      recipeContainer.classList.add("slide-in-animation");
      setTimeout(() => {
        recipeContainer.classList.remove("slide-in-animation");
      }, 500);
    } catch (error) {
      console.error("Error:", error);
    }
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  const apiUrl = "http://localhost:3001/api/recipes";
  const recipeListContainer = document.getElementById("recipeListContainer");

  // Get the Handlebars template
  const recipeListTemplateSource =
    document.getElementById("recipeListTemplate").innerHTML;

  // Compile the Handlebars template
  const recipeListTemplate = Handlebars.compile(recipeListTemplateSource);

  try {
    // Fetch the JSON data from the API
    const response = await fetch(apiUrl);
    const recipeData = await response.json();

    console.log(recipeData);

    // Render the compiled template with the recipe data
    const recipeListHTML = recipeListTemplate({ recipes: recipeData });

    // Display the rendered HTML on the page
    recipeListContainer.innerHTML = recipeListHTML;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
