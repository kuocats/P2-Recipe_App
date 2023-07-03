const router = require("express").Router();
const { User } = require("../../models");

// CREATE new user
router.post("/", (req, res) => {
  User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      // Set up sessions with a 'logged_in' variable set to `true`
      req.session.logged_in = true;
      req.session.user_id = dbUserData.id;
      res.status(200).json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Login
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: "Incorrect email or password. Please try again!" });
        return;
      }

      dbUserData
        .checkPassword(req.body.password)
        .then((validPassword) => {
          if (!validPassword) {
            res.status(400).json({
              message: "Incorrect email or password. Please try again!",
            });
            return;
          }

          // Once the user successfully logs in, set up the sessions variable 'logged_in'
          req.session.logged_in = true;
          req.session.user_id = dbUserData.id;
          res
            .status(200)
            .json({ user: dbUserData, message: "You are now logged in!" });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Logout
router.post("/logout", (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
