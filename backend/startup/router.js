const   searchRoute  = require('../routes/search');
const homeRoute  = require('../routes/home'); 
const registerRoute = require('../routes/register');
const loginRoute  = require('../routes/login');
module.exports = function (app) {
    app.use('/',homeRoute);
    app.use('/api/register',registerRoute);
    app.use('/api/search',searchRoute);
    app.use('/api/login',loginRoute);
}