const mongo = require('mongoose');
const Schema = mongo.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongo.model('users', userSchema);