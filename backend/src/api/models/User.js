const connection = require('../../config/database');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true
    }
});

module.exports = connection.model('User',userSchema);

