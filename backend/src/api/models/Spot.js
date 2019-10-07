const connection = require('../../config/database');
const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true
    }
});
spotSchema.virtual('thumbnailImage').get(() => {
    return `http://localhost:8080/files/${this.thumbnail}`
})

module.exports = connection.model('Spot', spotSchema);

