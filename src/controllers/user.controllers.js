const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { body } = req;
  try {
    const user = await User.create(body);
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 21 * 365,
    });
    res.status(201).json({ token, user });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.update = async (req, res) => {
  const {
    body,
    params: { userId },
  } = req;
  try {
    const user = await User.findOneAndUpdate({ _id: userId }, body, {
      new: true,
    });
    if (!user) {
      res.status(403).json({
        message: "User does not updated.",
      });
      return;
    }
    res.status(200).json({
      message: "User updated.",
      user,
    });
  } catch (e) {
    res
      .status(400)
      .json({ message: "An error has ocurred.", error: e.message });
  }
};

exports.destroy = async (req, res) => {
  const {
    params: { userId },
  } = req;
  try {
    const user = await User.findOneAndDelete({ _id: userId });
    if (!user) {
      res.status(403).json({ message: "Unable to delete user." });
      return;
    }
    res.status(200).json({ message: "User deleted.", user });
  } catch (e) {
    res
      .status(400)
      .json({ message: "An error has ocurred.", error: e.message });
  }
};
