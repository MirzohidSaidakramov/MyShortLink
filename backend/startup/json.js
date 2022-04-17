const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

module.exports = function (app) {
    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    app.use(compression());
    
}