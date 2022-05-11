const {
  register,
  update,
  destroy,
  login,
} = require("../controllers/user.controllers");
const { auth } = require("../utils/auth");

const router = require("express").Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/:userId").put(auth, update).delete(auth, destroy);

module.exports = router;
