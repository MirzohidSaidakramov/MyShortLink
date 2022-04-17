const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const User = require('../modules/user_module');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/',async (req,res)=>{
   const salt = await bcrypt.genSalt();
   const pwdHash = await bcrypt.hash(req.body.password,salt);
   const user = new User({
       login: req.body.login,
       email: req.body.email,
       password:pwdHash

    })
    const savedUser = await user.save()
    const token = jwt.sign({id:savedUser._id},config.get('JwtSecret'));

    return res.send({isRegistered:true,token:token});
   


});
module.exports = router;