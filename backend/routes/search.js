const express  = require('express');
const router = express.Router();
const User = require('../modules/user_module');

router.get('/login/:login',async (req,res)=>{
        const user =await User.find({
        login: req.params.login
        });
        if(user.length === 0){
           return res.send(false)
        }
       return  res.send(true);
        

})
router.get('/email/:email',async (req,res)=>{
    const user = await User.find({
    email: req.params.email
    })
    if(user.length === 0){
       return res.send(false)
    } 
    return res.send(true);
    

})

module.exports = router;