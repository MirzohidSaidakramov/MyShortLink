const express = require('express');
const router = express.Router();
const User = require('../modules/user_module');
const auth = require('../middleware/auth');

 

router.get('',auth,async (req,res)=>{
    const user = await User.findOne({_id:req.user.id});
    if (!user) {return res.send(false).status(400)}
    const userWithOutPassword = {
        login:user.login,
        email:user.email,
        id: user._id
    }
    res.send(userWithOutPassword);
  
    
});

module.exports  =router;