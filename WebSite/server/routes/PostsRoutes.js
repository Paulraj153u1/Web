const express = require('express');
const router = express.Router();
const {Posts}= require("../models")

// GET route
router.get('/',  async (req, res) => {
const listOfPosts =  await Posts.findAll()
res.json(listOfPosts);
});

//findbyId
router.get('/byId/:id',async(req,res)=>{
  const id =req.params.id;
  const postGetlist = await Posts.findByPk(id);
  res.json(postGetlist);
})

// POST route
router.post('/', async (req, res) => {
  const post = req.body;
 await Posts.create(post)
  res.json(post)
});

module.exports = router;
