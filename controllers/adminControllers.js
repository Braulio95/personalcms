module.exports = {
  index: (_request, response) => {
    response.render("admin/index");
  },

  getPosts: (_request, response) => {
    response.send("All posts");
  },
  sumbitPosts: (_request, response) => {
    response.send("Post submitted");
  },
  createPosts: (_request, response) => {
    response.render("admin/posts/create");
  },
};
