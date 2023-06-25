# recipe-master

## Description

Deployed application link on GitHub

https://github.com/

## Table of Contents

- [Installation](#installation)
- [Requirements](#requirements)
- [Usage](#usage)
- [Mock-Up](#mock-up)
- [Credits](#credits)
- [License](#license)

## Installation

No special requirements

## Requirements

No special requirements

## Usage

Open your command-line interface.

Run `npm i` to install the required dependencies.

Update the configuration in the `.env` file with your MySQL settings.

Set up a MySQL database by running `mysql -u root -p` and entering your MySQL password.

In the MySQL command line interface, run `source db/schema.sql` to import the schema and create the necessary tables.

Run `node seeds/index.js` to populate the database with sample data.

Start the server by running `npm start`.

Open your browser and go to http://localhost:3001/ to access the application.

Test it in insomnia:

Recipes:
GET /api/recipes Get all recipes.
GET /api/recipes/:name Get a specific recipe by its name.
POST /api/recipes Creates a new recipe.
PUT /api/recipes/:name Updates a recipe by its name.
DELETE /api/recipes/:id Deletes a recipe by its ID.

Categories:
GET /api/categories Gets all categories.
GET /api/categories/:name Gets a specific category by its name.
POST /api/categories Creates a new category.
PUT /api/categories/:name Updates a category by its name.
DELETE /api/categories/:id Deletes a category by its ID.

Ingredients:
GET /api/ingredients Gets all ingredients.
GET /api/ingredients/:name Gets a specific ingredient by its name.
POST /api/ingredients: Creates a new ingredient.
PUT /api/ingredients/:name Updates an ingredient by its name.
DELETE /api/ingredients/:id Deletes an ingredient by its ID.

## Mock-Up

Screenshots located in `./assets/` folder.

The following screenshot shows the application's GET routes to return all recipes:

![Get recipes](./assets/get-recipes.png)

The following screenshot shows the application's GET routes to return all categories:

![Get categories](./assets/get-categories.png)

The following screenshot shows the application's GET routes to return category by ID being tested in Insomnia:

![Get ingredients](./assets/get-ingredients.png)

## Credits

## License

Please refer to the LICENSE in the repo.
