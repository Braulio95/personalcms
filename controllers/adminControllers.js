const Post = require("../models/PostModel").Post;

module.exports = {
  index: (_request, response) => {
    response.render("admin/index");
  },

  getPosts: (_request, response) => {
    Post.find()
      .lean()
      .then((posts) => {
        response.render("admin/posts/index", { posts: posts });
      });
  },
  sumbitPosts: (request, response) => {
    //ToDo: Form validation is pending

    const commentsAllowed = request.body.allowComments ? true : false;
    const newPost = new Post({
      title: request.body.title,
      description: request.body.description,
      status: request.body.status,
      allowComments: commentsAllowed,
    });

    newPost.save().then((post) => {
      console.log(post);
      request.flash("success-message", "Post created successfully.");
      response.redirect("/admin/posts");
    });
  },
  createPosts: (_request, response) => {
    response.render("admin/posts/create");
  },
  editPosts: (request, response) => {
    const id = request.params.id;
    console.log(id);
    Post.findById(id)
      .lean()
      .then((post) => {
        response.render("admin/posts/edit", { post: post });
      });
  },
};
