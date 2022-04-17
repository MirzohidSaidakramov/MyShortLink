const express = require('express');
const router = express.Router();
const User = require('../modules/user_module');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
 

router.post('',async (req,res)=>{
    const user = await User.findOne({login:req.body.login});
    if (!user) {return res.send(false).status(400)}
  
  
    const pwd = await bcrypt.compare(req.body.password,user.password);
    if (!pwd) {return res.send(false).status(400) }
    const token = jwt.sign({id:user._id},'gulshodaxonim');
    return res.send({isValid:true,token:token});
    
});

module.exports  =router;
