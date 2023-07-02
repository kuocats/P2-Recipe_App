document.addEventListener("DOMContentLoaded", async () => {
  const recipeContainer = document.getElementById("recipeContainer");

  const apiUrl = "http://localhost:3001/api/recipes";

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
      recipeImage.src = `http://localhost:3001/${recipe.picture}`; // Use the correct image path here
      recipeImage.alt = recipe.recipe_name; // Provide an alternative text for the image
      recipeImage.classList.add("recipe-photo"); // Add the "recipe-photo" class to the image

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
      recipeDiv.appendChild(recipeImage);
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
