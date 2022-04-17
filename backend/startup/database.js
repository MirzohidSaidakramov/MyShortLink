const mongoose = require('mongoose');
const config = require('config');
module.exports = function (){
    mongoose.connect(config.get('MongoDBUrl'))
    .then(()=>{
        console.log('Malumotlar omboriga ulandi');
    })
    .catch(()=>{
        console.log('Malumotlar omboriga ulanishda xatolik');
    })
}