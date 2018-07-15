var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect(config.database);

var Schema = mongoose.Schema;

module.exports = mongoose.model('Manevra', new Schema({
    descriere: {
        type: String,
        required: true
    },
    punctajMaxim: {
        type: Number,
        required: true
    },
    punctajPartial: {
        type: Number
    }
}));
