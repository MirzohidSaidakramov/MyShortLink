const mongoose = require('mongoose');

 const userSchema = mongoose.Schema({
     login:{
        type:String,
        required:true,
        minlength: 5,
        maxlength: 25
     },
     email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
    }
 );

 const User = new mongoose.model('User',userSchema);
 module.exports = User