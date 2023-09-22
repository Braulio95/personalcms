const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { engine } = require("express-handlebars");
const { mongoDbURL, PORT } = require("./config/config");

const app = express();

//Data base config
mongoose
  .connect(mongoDbURL, {
    useNewUrlParser: true,
  })
  .then((_response) => {
    console.log("Connected");
  })
  .catch((_error) => {
    console.log("Something happened try again :(");
  });

/*Express config*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
/*Express config ended*/

//Setup view engine to use handlebars
app.engine("handlebars", engine({ defaultLayout: "default" }));
app.set("view engine", "handlebars");

/*Main*/
app.use("/", (_request, response) => {
  response.render("default/index");
});
/*Main end*/

app.listen(PORT, () => {
  console.log(`Listen app in port: ${PORT}`);
});
