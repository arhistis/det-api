var mongoose = require('mongoose');
var config = require('../config');
var Manevra = require('../models/manevra');
mongoose.connect(config.database);

var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Lesion', new Schema({
    nume: {
        type: String,
        required: true,
    },
    manevre: [Manevra.schema]
}));