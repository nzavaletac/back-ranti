const {
  createPost,
  destroyPost,
  getPost,
  putPost,
  getPostXId,
} = require("../controllers/post.controllers");

const router = require("express").Router();

router.route("/").get(getPost).post(createPost);
router.route("/:postId").put(putPost).delete(destroyPost).get(getPostXId);

module.exports = router;
