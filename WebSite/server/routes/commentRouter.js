const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const {validateTokenMiddleWare} = require("../middlewares/AuthMiddleware")

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({ where: { PostId: postId } });
  res.json(comments);
});

router.post("/", validateTokenMiddleWare, async (req, res) => {
  const comment = req.body;
  const username = req.user.username;
  comment.username = username;
  await Comments.create(comment);
  res.json(comment);
  // res.json()
});

module.exports = router;