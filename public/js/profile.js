// Define formData outside the event listener function
let formData;

document
  .getElementById("create-recipe-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    formData = new FormData(event.target);
    console.log(formData.get("picture"));

    try {
      const response = await fetch("/api/recipes", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to create recipe");
      }
      const data = await response.json();
      console.log(data);

      // Show the success message
      const successMessage = document.getElementById("success-message");
      successMessage.style.display = "block";

      // Hide the success message after 3 seconds (adjust as needed)
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);

      // Clear the form after successful submission
      event.target.reset();

      // Update the recipes list
      populateRecipesList();
    } catch (error) {
      console.error("Error:", error);
    }
  });

// Function to populate the list of recipes
const populateRecipesList = async () => {
  try {
    const response = await fetch("/api/recipes");
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const recipes = await response.json();
    console.log("Fetched recipes:", recipes);

    // Your code to display the recipes in the UI goes here
  } catch (error) {
    console.error("Error populating recipes:", error);
  }
};

// Function to add a new ingredient input field
const addIngredientField = () => {
  const ingredientsContainer = document.getElementById("ingredients-container");
  const ingredientRow = document.createElement("div");
  ingredientRow.classList.add("ingredient-row");
  ingredientRow.innerHTML = `
    <input type="text" name="ingredients[]" required />
    <button type="button" class="remove-ingredient-btn">Remove</button>
  `;
  ingredientsContainer.appendChild(ingredientRow);
};

// Function to remove an ingredient input field
const removeIngredientField = (event) => {
  if (event.target.classList.contains("remove-ingredient-btn")) {
    const ingredientRow = event.target.parentElement;
    const ingredientsContainer = document.getElementById(
      "ingredients-container"
    );
    ingredientsContainer.removeChild(ingredientRow);
  }
};

// Function to populate the categories dropdown
const populateCategoriesDropdown = async () => {
  try {
    const response = await fetch("/api/categories");
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const categories = await response.json();
    console.log("Fetched categories:", categories);

    const categorySelect = document.getElementById("category");
    categorySelect.innerHTML = ""; // Clear existing options

    // Add the "Select a category" option
    const defaultOption = document.createElement("option");
    defaultOption.value = ""; // Set an empty value for this option
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = "Select a category";
    categorySelect.appendChild(defaultOption);

    if (categories.length > 0) {
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.category_name;
        categorySelect.appendChild(option);
      });
    } else {
      // If there are no categories, display a "No categories available" option
      const noCategoryOption = document.createElement("option");
      noCategoryOption.disabled = true;
      noCategoryOption.textContent = "No categories available";
      categorySelect.appendChild(noCategoryOption);
    }
  } catch (error) {
    console.error("Error populating categories:", error);
  }
};

// Call the populateCategoriesDropdown function when the page is loaded
window.addEventListener("load", () => {
  populateCategoriesDropdown();
});
