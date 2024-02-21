const express = require('express');
const router = express.Router();
const {Posts}= require("../models")

// GET route
router.get('/',  async (req, res) => {
//   res.send('Hi');
const listOfPosts =  await Posts.findAll()
res.json(listOfPosts);
});

// POST route
router.post('/', async (req, res) => {
  // Handle the POST request here
  const post = req.body;
 await Posts.create(post)
  res.json(post)
});

module.exports = router;
