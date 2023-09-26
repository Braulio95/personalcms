module.exports = {
  index: (_request, response) => {
    response.render("default/index");
  },
  loginGet: (_request, response) => {
    response.render("default/login");
  },
  loginPost: (_request, response) => {
    response.send("Post Done");
  },
  registerGet: (_request, response) => {
    response.render("default/register");
  },
  regsiterPost: (_request, response) => {
    response.send("Register Done");
  },
};
