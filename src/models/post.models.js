const { Schema, model } = require("mongoose");
const letterRegexp =
  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      minlength: 5,
    },
    description: {
      type: String,
      required: [true, "Description is required."],
      minlength: 5,
    },
    category: {
      type: String,
      // required: true,
    },
    state: {
      type: String,
      // required: true,
    },
    changeFor: {
      type: String,
      required: [true, "Change for is required."],
      minlength: 5,
    },
    district: {
      type: String,
      required: [true, "District and province is required."],
      minlength: 3,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    creatorName: {
      type: String,
    },
    whatsapp: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);
module.exports = Post;
