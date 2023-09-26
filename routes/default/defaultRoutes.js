const express = require("express");
const router = express.Router();
const {
  index,
  loginGet,
  loginPost,
  registerGet,
  regsiterPost,
} = require("../../controllers/defaultControllers");

router.all("/*", (request, _response, next) => {
  request.app.locals.layout = "default";

  next();
});

router.route("/").get(index);

router.route("/login").get(loginGet).post(loginPost);

router.route("/register").get(registerGet).post(regsiterPost);

module.exports = router;
