const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const multer = require("multer");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars as the view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

// Set up multer for file upload
// Destination folder for uploaded files
const upload = multer({ dest: "uploads/" });

app.post("/api/recipes", upload.single("recipe_image"), (req, res) => {
  // Access the uploaded file using req.file
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  // Process other form data and save the recipe to the database
  const { recipe_name, cook_time, category, recipe_text } = req.body;
  const picture = req.file.path;

  // Respond with a success message
  return res.status(200).json({ message: "Recipe created successfully." });
});

// Set up session
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 86400000, // 1 day in milliseconds
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Set up routes
app.use(routes);

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
