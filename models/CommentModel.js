const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: "user",
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  approvedComment: {
    type: Boolean,
    default: true,
  },
});

module.exports = { Comment: mongoose.model("comment", CommentSchema) };
