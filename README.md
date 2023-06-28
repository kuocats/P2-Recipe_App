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

## Mock-Up

Screenshots located in `./assets/` folder.

The following screenshot shows the application's GET routes to return all recipes:

![Get recipes](./assets/get-recipes.png)

The following screenshot shows the application's GET routes to return all categories:

![Get categories](./assets/get-categories.png)

The following screenshot shows the application's GET routes to return ingredients:

![Get ingredients](./assets/get-ingredients.png)

## Credits

Documetation for the following npm packages were used to create this application:
https://www.npmjs.com/package/multer
https://www.npmjs.com/package/slugify

Here documentation for Sequelize fearch by word
`[Op.like]: '%hat'`
https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

## License

Please refer to the LICENSE in the repo.
