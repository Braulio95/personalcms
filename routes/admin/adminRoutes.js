const express = require("express");
const router = express.Router();
const { index } = require("../../controllers/adminControllers");

router.all("/*", (request, _response, next) => {
  request.app.locals.layout = "admin";

  next();
});

router.route("/").get(index);

module.exports = router;
