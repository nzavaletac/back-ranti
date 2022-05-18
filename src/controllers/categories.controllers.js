const Category = require("../models/categories.models");

exports.getCategories = async (req, res) => {
  try {
    Category.find().then((Categories) => {
      res.status(200).json({ categories: Categories });
    });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

exports.postCategories = async (req, res) => {
  const { body } = req;
  try {
    const category = await Category.create(body);
    res.status(201).json({ message: "Category created.", category });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
