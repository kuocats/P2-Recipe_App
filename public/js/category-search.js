document.addEventListener("DOMContentLoaded", async () => {
  const apiUrl = window.location.href; // Get the current URL
  const recipeContainer = document.getElementById("recipeContainer");

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Clear the recipeContainer before adding new recipes
    recipeContainer.innerHTML = "";

    data.forEach((recipe) => {
      // Create the elements (same as in your previous code)
      const recipeDiv = document.createElement("div");
      const recipeName = document.createElement("h2");
      const recipeText = document.createElement("p");
      const cookTime = document.createElement("p");
      const ingredientsList = document.createElement("ul");
      const categoryLink = document.createElement("a");
      const recipeImage = document.createElement("img"); // Image element for the picture

      // Set the content for each element (same as in your previous code)
      recipeName.textContent = recipe.recipe_name;
      recipeText.textContent = recipe.recipe_text;
      cookTime.textContent = "Cook Time: " + recipe.cook_time + " minutes";
      // Add the "recipe-title" class to the h2 element
      recipeName.id = "recipe-title";

      // Set the picture (same as in your previous code)
      recipeImage.src = `/${recipe.picture}`;
      recipeImage.alt = recipe.recipe_name;
      recipeImage.classList.add("recipe-photo");

      // Create a heading for ingredients (same as in your previous code)
      const ingredientsTitle = document.createElement("h3");
      ingredientsTitle.textContent = "Ingredients";

      // Create clickable ingredients (same as in your previous code)
      recipe.ingredients.forEach((ingredient) => {
        const ingredientItem = document.createElement("li");
        const ingredientLink = document.createElement("a");
        ingredientLink.textContent = ingredient.ingredient_name;
        ingredientLink.href = `/api/ingredients/${encodeURIComponent(
          ingredient.ingredient_name
        )}`;

        ingredientItem.appendChild(ingredientLink);
        ingredientsList.appendChild(ingredientItem);
      });

      // Set category link (same as in your previous code)
      categoryLink.textContent = "Category: " + recipe.category.category_name;
      categoryLink.href = `/api/categories/${encodeURIComponent(
        recipe.category.category_name
      )}`;

      // Append the elements to the recipeDiv (same as in your previous code)
      recipeDiv.appendChild(recipeName);
      recipeDiv.appendChild(recipeImage);
      recipeDiv.appendChild(recipeText);
      recipeDiv.appendChild(cookTime);
      recipeDiv.appendChild(ingredientsTitle);
      recipeDiv.appendChild(ingredientsList);
      recipeDiv.appendChild(categoryLink);

      // Append the recipeDiv to the recipeContainer (same as in your previous code)
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
