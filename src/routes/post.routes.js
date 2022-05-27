const {
  createPost,
  destroyPost,
  getPost,
  putPost,
} = require("../controllers/post.controllers");

const router = require("express").Router();

router.route("/").get(getPost).post(createPost);
router.route("/:postId").put(putPost).delete(destroyPost);

module.exports = router;
