const   searchRoute  = require('../routes/search');
const homeRoute  = require('../routes/home'); 
const registerRoute = require('../routes/register');
const loginRoute  = require('../routes/login');
const linkRoute  = require('../routes/link');
const meRoute  = require('../routes/me');

const redirectRoute  = require('../routes/redirect');
module.exports = function (app) {
    app.use('/',homeRoute);
    app.use('/',redirectRoute);
    app.use('/api/register',registerRoute);
    app.use('/api/search',searchRoute);
    app.use('/api/login',loginRoute);
    app.use('/api/link',linkRoute);
    app.use('/api/me',meRoute);
}