const {
  register,
  update,
  destroy,
} = require("../controllers/user.controllers");

const router = require("express").Router();

router.route("/register").post(register);
router.route("/:userId").put(update).delete(destroy);

module.exports = router;
