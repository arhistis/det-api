const express = require('express');
const router = express.Router();

var Lesion = require('../models/lesion');

// Lesions
router.get('/', (req,res,next) => {
    Lesion.find({}, function (err, lesions) {
        res.json(lesions);
    });
});

module.exports = router;