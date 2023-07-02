const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#recipe_name").value.trim();
  const cookTime = document.querySelector("#cook_time").value.trim();
  const category = document.querySelector("#category").value.trim();
  const recipeText = document.querySelector("#recipe_text").value.trim();
  const pictureInput = document.querySelector("#recipe_image");
  const picture = pictureInput.files[0];

  const formData = new FormData();
  formData.append("recipe_name", name);
  formData.append("cook_time", cookTime);
  formData.append("category", category);
  formData.append("recipe_text", recipeText);
  formData.append("recipe_image", picture);

  try {
    const response = await fetch("/api/recipes", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create recipe");
    }
  } catch (error) {
    console.error("Error creating recipe:", error);
  }
};

const delButtonHandler = async (event) => {
  if (event.target.classList.contains("delete-recipe")) {
    const id = event.target.getAttribute("data-id");

    try {
      const response = await fetch(`/api/recipes/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        location.reload();
      } else {
        console.error("Failed to delete recipe.");
      }
    } catch (err) {
      console.error("Failed to delete recipe:", err);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const populateCategoriesDropdown = async () => {
    try {
      const response = await fetch("/api/categories");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const categories = await response.json();
      const categorySelect = document.getElementById("category");
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.category_name;
        categorySelect.appendChild(option);
      });
    } catch (error) {
      console.error("Error populating categories:", error);
    }
  };

  populateCategoriesDropdown();

  // Function to handle adding a new ingredient input field
  const addIngredientField = () => {
    const ingredientsContainer = document.getElementById(
      "ingredients-container"
    );
    const newIngredientRow = document.createElement("div");
    newIngredientRow.classList.add("ingredient-row");
    newIngredientRow.innerHTML = `
      <input type="text" name="ingredients[]" required />
      <button type="button" class="remove-ingredient-btn">Remove</button>
    `;
    ingredientsContainer.appendChild(newIngredientRow);
  };

  // Function to handle removing an ingredient input field
  const removeIngredientField = (event) => {
    if (event.target.classList.contains("remove-ingredient-btn")) {
      const ingredientRow = event.target.parentElement;
      ingredientRow.remove();
    }
  };

  // Add event listener to the "Add Ingredient" button
  document
    .getElementById("add-ingredient-btn")
    .addEventListener("click", addIngredientField);

  // Add event listener to the container to handle ingredient removal
  document
    .getElementById("ingredients-container")
    .addEventListener("click", removeIngredientField);
});

document
  .querySelector("#create-recipe-form")
  .addEventListener("submit", newFormHandler);
document
  .querySelector(".project-list")
  .addEventListener("click", delButtonHandler);
