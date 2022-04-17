const config = require('config');
const jwt = require('jsonwebtoken');
function auth(req,res,next) {
    const token = req.header('x-auth-token').split(' ')[1];
    if(!token){
        return res.status(401).send('Token mavjud emas');
    }
    try{
        const decode = jwt.verify(token,config.get('JwtSecret'));
        req.user = decode;
        next();

    } catch(exx){
        return res.status(400).send('Yarqsiz token');
    }
}
module.exports = auth;