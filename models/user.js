// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect(config.database);

var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },
    telephone: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true
    }
}));

// module.exports.createUser = function (newUser, callback) {
//     newUser.save(callback);
// }