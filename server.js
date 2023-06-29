const path = require('path');
const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");
// Import and use file upload routes
const uploadRoutes = require("./routes/api/upload-routes");
// Import express-session
const session = require('express-session');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 3600,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);
app.use("/api/uploads", uploadRoutes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
