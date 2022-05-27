const Post = require("../models/post.models");

exports.createPost = async (req, res) => {
  const { body } = req;
  try {
    const post = await Post.create(body);
    res.status(201).json({ message: "Post created.", post });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.getPost = async (req, res) => {
  try {
    Post.find().then((Posts) => {
      res.status(200).json({ posts: Posts });
    });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

exports.putPost = async (req, res) => {
  const {
    body,
    params: { postId },
  } = req;
  try {
    const post = await Post.findOneAndUpdate({ _id: postId }, body, {
      new: true,
    });
    if (!post) {
      res.status(403).json({ message: "Post does not updated." });
      return;
    }
    res.status(200).json({ message: "Post updated.", post });
  } catch (e) {
    res
      .status(400)
      .json({ message: "An error has ocurred.", error: e.message });
  }
};

exports.destroyPost = async (req, res) => {
  const {
    params: { postId },
  } = req;
  try {
    const post = await Post.findOneAndDelete({ _id: postId });
    if (!post) {
      res.status(403).json({ message: "Unable to delete post." });
      return;
    }
    res.status(200).json({ message: "Post deleted", post });
  } catch (e) {
    res
      .status(400)
      .json({ message: "An error has ocurred.", error: e.message });
  }
};
