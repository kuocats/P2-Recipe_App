const searchForm = document.querySelector(".search-bar");
const recipeInput = document.getElementById("recipeInput");
const recipeContainer = document.getElementById("recipeContainer");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the default form submission

  const userInput = recipeInput.value.trim(); // Get the value from the input field

  if (userInput === "") {
    // If the input is empty, clear
    recipeContainer.innerHTML = "";
    return;
  }

  const apiUrl = `http://localhost:3001/api/recipes?name=${encodeURIComponent(
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

      // Set the content for each element
      recipeName.textContent = recipe.recipe_name;
      recipeText.textContent = recipe.recipe_text;
      cookTime.textContent = "Cook Time: " + recipe.cook_time + " minutes";

      // Append the elements to the recipeDiv
      recipeDiv.appendChild(recipeName);
      recipeDiv.appendChild(recipeText);
      recipeDiv.appendChild(cookTime);

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
