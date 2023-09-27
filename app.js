const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { engine } = require("express-handlebars");
const { mongoDbURL, PORT, globalVariables } = require("./config/config");
const defaultRoutes = require("./routes/default/defaultRoutes");
const adminRoutes = require("./routes/admin/adminRoutes");
const flash = require("connect-flash");
const session = require("express-session");

const app = express();

//Data base config
mongoose
  .connect(mongoDbURL, {
    useNewUrlParser: true,
  })
  .then((response) => {
    //console.log(response);
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

// Flash and session
app.use(
  session({
    secret: "anysecret",
    saveUninitialized: true,
    resave: true,
  })
);

app.use(flash());
app.use(globalVariables);
//Setup view engine to use handlebars
app.engine("handlebars", engine({ defaultLayout: "default" }));
app.set("view engine", "handlebars");

/*Main*/
app.use("/", defaultRoutes);
app.use("/admin", adminRoutes);
/*Main end*/

app.listen(PORT, () => {
  console.log(`Listen app in port: ${PORT}`);
});
