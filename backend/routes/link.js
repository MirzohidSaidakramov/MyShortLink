const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Link = require('../modules/link_module');
const auth = require('../middleware/auth');
const shortId = require('shortid');
const config = require('config')


router.post('/generate',auth,async (req,res)=>{
   const baseUrl = config.get('baseUrl')
   const code = shortId.generate();
   const to = baseUrl + '/' + code;
   const from = req.body.from;
   const owner = req.user.id;

   const link =  await new Link({
       from,to,code,owner
   });
    res.status(201).send(await link.save());


});

router.get('/',auth,async (req,res)=>{
    const links = await Link.find({owner:req.user.id})
    res.send(links);
});

router.get('/:id',auth,async (req,res)=>{
    const link = await Link.findOne({owner:req.user.id,_id:req.params.id});
    res.send(link);
})
module.exports = router;