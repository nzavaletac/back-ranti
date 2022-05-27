const { Schema, model } = require("mongoose");
const letterRegexp =
  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      minlength: 5,
      maxlength: 25,
    },
    description: {
      type: String,
      required: [true, "Description is required."],
      minlength: 5,
      maxlength: 100,
    },
    category: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    changeFor: {
      type: String,
      required: [true, "Change for is required."],
      minlength: 5,
      maxlength: 50,
    },
    district: {
      type: String,
      required: [true, "District and province is required."],
      minlength: 3,
      maxlength: 50,
    },
    image: {
      type: String,
      required: [true, "Image is required."],
    },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);
module.exports = Post;