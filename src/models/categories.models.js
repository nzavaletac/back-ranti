const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 25,
    },
  },
  {
    timestamps: true,
  }
);

const Category = model("Category", categorySchema);
module.exports = Category;
