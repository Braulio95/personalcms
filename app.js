const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

//Data base config
mongoose
  .connect("mongodb://localhost:27017/cms_braulio", {
    useNewUrlParser: true,
  })
  .then((response) => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log("Something happened try again :(");
  });

const PORT = 3000;

/*Express config*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
/*Express config ended*/

/*Main*/
app.use("/", (request, response) => {
  response.send("Welcome to the app");
});
/*Main end*/

app.listen(PORT, () => {
  console.log(`Listen app in port: ${PORT}`);
});
