
const mongoose = require('mongoose');

 const linkSchema = mongoose.Schema({
     from:{
        type:String,
        required:true,
       
     },
     to: {
        type: String,
        required: true,
       
    },
    code: {
        type: String,
        required: true,
        unique:true
       
    },
    clicks: {
        type: Number,
        default: 0
    },
    owner: {
        type:mongoose.Types.ObjectId,
        ref: 'User' 
    },
    date: {
        type:Date,
        default: Date.now
    }
  
    }
 );

 const Link = new mongoose.model('Link',linkSchema);
 module.exports = Link;