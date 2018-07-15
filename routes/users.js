const express = require('express');
const router = express.Router();

var User = require('../models/user');

// Users
router.get('/', (req,res,next) => {
    User.find({}, function (err, users) {
        res.json(users);
    });
});

module.exports = router;