document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const recipeInput = document.getElementById("recipeInput");
  const recipeContainer = document.getElementById("recipeContainer");

  // Add the "No recipes found" message element
  const noRecipesMessage = document.getElementById("noRecipesMessage");

  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Get the value from the input field

    const userInput = recipeInput.value.trim();
    if (userInput === "") {
      // If the input is empty, clear
      recipeContainer.innerHTML = "";
      noRecipesMessage.style.display = "none"; // Hide the "No recipes found" message
      return;
    }

    const apiUrl = `/api/recipes/${encodeURIComponent(userInput)}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Clear the recipeContainer before adding new recipes
      recipeContainer.innerHTML = "";

      if (data.length === 0) {
        // If no recipes found, show the "No recipes found" message
        noRecipesMessage.style.display = "block";
      } else {
        // Hide the "No recipes found" message if there are recipes
        noRecipesMessage.style.display = "none";
        data.forEach((recipe) => {
          // Create the elements
          // ... your existing code to render recipes ...
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  const apiUrl = "/api/recipes";
  const recipeListContainer = document.getElementById("recipeListContainer");

  // Get the Handlebars template
  const recipeListTemplateSource =
    document.getElementById("recipeListTemplate").innerHTML;

  // Compile the Handlebars template
  const recipeListTemplate = Handlebars.compile(recipeListTemplateSource);
  console.log("recipeListContainer:", recipeListContainer);

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
