const {verify} = require('jsonwebtoken')
const express = require("express");

const validateTokenMiddleWare = (req,res,next) => {
    const accessToken = req.header("accessToken");
    if(!accessToken){
        return  res.json({error:"User not logged in"})
    }
    else{
         try {
        const validToken = verify(accessToken,'The simple token')
        req.user=validToken;
        if (validToken) {
            return next();
        }
    } catch (err) {
        return res.json({error:err})
        // return res
    }
    }
}


module.exports={validateTokenMiddleWare};  