const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send('Bu MyLink uchun backend');

});

module.exports = router;