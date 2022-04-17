const mongoose = require('mongoose');
module.exports = function (){
    mongoose.connect('mongodb://localhost/myshortlink')
    .then(()=>{
        console.log('Malumotlar omboriga ulandi');
    })
    .catch(()=>{
        console.log('Malumotlar omboriga ulanishda xatolik');
    })
}