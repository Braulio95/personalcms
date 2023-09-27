const express = require("express");
const router = express.Router();
const {
  index,
  getPosts,
  sumbitPosts,
  createPosts,
} = require("../../controllers/adminControllers");

router.all("/*", (request, _response, next) => {
  request.app.locals.layout = "admin";

  next();
});

router.route("/").get(index);

router.route("/posts").get(getPosts);

router.route("/posts/create").get(createPosts).post(sumbitPosts);

module.exports = router;
