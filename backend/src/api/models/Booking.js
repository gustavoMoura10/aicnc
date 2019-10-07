const connection = require('../../config/database');
const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema({
    date:String,
    approved:Boolean,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    spot:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Spot'
    }
});

module.exports = connection.model('Booking',spotSchema);

