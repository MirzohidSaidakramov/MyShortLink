const express = require('express');
const router = express.Router();
const Link = require('../modules/link_module');
const auth = require('../middleware/auth');

 

router.get('/:code',async (req,res)=>{
    const link = await Link.findOne({code:req.params.code});
    if (!link) {return res.send('Silka Mavjud emas!!!').status(400)}
    link.clicks++
    await link.save();
    res.redirect(link.from);
  
    
});

module.exports  =router;