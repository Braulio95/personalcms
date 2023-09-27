module.exports = {
  mongoDbURL: "mongodb://127.0.0.1:27017/cmd_braulio",
  PORT: process.env.PORT || 3000,
  globalVariables: (request, response, next) => {
    response.locals.success_message = request.flash("success-message");
    response.locals.error_message = request.flash("error-message");
    next();
  },
};
