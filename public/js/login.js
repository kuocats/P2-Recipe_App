const showSuccessMessage = (id, message) => {
  const successMessage = document.getElementById(id);
  successMessage.textContent = message;
  successMessage.style.display = "block";
};

const showErrorMessage = (id, message) => {
  const errorMessage = document.getElementById(id);
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
};

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  console.log("Login form submitted.");
  console.log("Email:", email);
  console.log("Password:", password);

  if (email && password) {
    // Send a POST request to the API endpoint for login
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      showSuccessMessage("login-success", "Login successful!");
      document.location.replace("/profile");
    } else {
      showErrorMessage(
        "login-error",
        "Login failed. Please check your credentials."
      );
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    // Send a POST request to the API endpoint for signup
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      showSuccessMessage(
        "signup-success",
        "Signup successful! You can now log in with your credentials."
      );
      document.querySelector("#name-signup").value = "";
      document.querySelector("#email-signup").value = "";
      document.querySelector("#password-signup").value = "";
    } else {
      showErrorMessage(
        "signup-error",
        "Signup failed. Please try again later."
      );
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
