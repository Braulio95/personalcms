const express = require("express");
const router = express.Router();
const {
  index,
  getPosts,
  sumbitPosts,
  createPosts,
  editPosts,
} = require("../../controllers/adminControllers");

router.all("/*", (request, _response, next) => {
  request.app.locals.layout = "admin";

  next();
});

router.route("/").get(index);

router.route("/posts").get(getPosts);

router.route("/posts/create").get(createPosts).post(sumbitPosts);

router.route("/posts/edit/:id").get(editPosts);

module.exports = router;
