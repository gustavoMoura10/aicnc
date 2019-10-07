const mongoose = require('mongoose');
const env = require('../.env');
const stringConnection = `mongodb://${env.mongodb.user}:${encodeURIComponent(env.mongodb.pwd)}@${env.mongodb.host}:${env.mongodb.port}/${env.mongodb.db}?authSource=admin`;

module.exports = mongoose.createConnection(stringConnection,{useNewUrlParser:true})

