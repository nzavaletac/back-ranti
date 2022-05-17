const {
  getCategories,
  postCategories,
} = require("../controllers/categories.controllers");

const router = require("express").Router();

router.route("/").get(getCategories).post(postCategories);

module.exports = router;
