const express = require("express");
const router = express.Router();

const userModel = require("./users");
const postModel = require("./post");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const upload = require("./multer");

// Configure Passport Local Strategy
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/login", function (req, res, next) {
  // Pass flash messages to the view template
  res.render("login", { error: req.flash("error") });
});

router.get("/feed", function (req, res, next) {
  res.render("feed");
});

router.post(
  "/upload",
  isLoggedIn,
  upload.single("file"),
  async function (req, res, next) {
    if (!req.file) {
      return res.status(400).send("No files were uploaded");
    }

    const user = await userModel.findOne({
      username: req.session.passport.user,
    });

    const postData = await postModel.create({
      image: req.file.filename,
      imgText: req.body.imgcaption,
      user: user._id,
    });
    user.posts.push(postData._id);
    await user.save();
    console.log(postData);
    res.redirect("/profile");
  }
);

/* GET profile page. */
router.get("/profile", isLoggedIn, async function (req, res, next) {
  // Access the authenticated user from the session using req.user
  const user = await userModel
    .findOne({
      username: req.session.passport.user,
    })
    .populate("posts");
  // Log the user object to the terminal
  console.log(user);

  // Render the profile page
  res.render("profile", { user: user });
});

/* POST register user. */
router.post("/register", function (req, res, next) {
  const { username, email, fullname } = req.body;
  const userdata = new userModel({ username, email, fullname });

  userModel.register(userdata, req.body.password).then(function () {
    passport.authenticate("local")(req, res, function () {
      res.redirect("/profile");
    });
  });
});

/* POST login user. */
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

/* POST logout user. */
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

/* Middleware to check if user is authenticated. */
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

module.exports = router;
