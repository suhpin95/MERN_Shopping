const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserScehma = new Schema({
    name : {
        type:String,
        required : true
    },
    emailId : {
        type:String,
        required : true,
        unique : true
    },
    passWord : {
        type:String,
        required : true
    },
    register_Date:{
        type : Date,
        default : Date.now
    }
});

const User = mongoose.model('user', UserScehma);
module.exports = User;