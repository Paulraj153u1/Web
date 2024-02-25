const express = require('express');
const router = express.Router();
const {Users}= require("../models")
const bcrypt = require ("bcrypt")


// User add route
router.post('/', async (req, res) => {
  const {username,password} = req.body;
 await bcrypt.hash(password,10).then((hash)=>{
    Users.create({
        username: username,
        password : hash
    })
    res.json("success")
  })
});
//User login route
router.post('/login', async (req, res) => {
    const {username,password} = req.body;
    const  user = await Users.findOne({where:{username:username}});
    if(!user){
        return  res.json({error :'No User Found '})
    }
    bcrypt.compare(password,user.password).then((result)=> {
        if(!result) res.json({error :'Password incorrect'})
        else{
         res.json(200)
           }
    })
  });

module.exports = router;
