const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "public",
  },

  description: {
    type: String,
    required: true,
  },

  creationDate: {
    type: Date,
    default: Date.now(),
  },
  allowComments: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

module.exports = { Post: mongoose.model("post", PostSchema) };
