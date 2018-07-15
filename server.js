// get dependencies
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const argv = require('yargs').argv;

const configFile = argv.config ? './config.' + argv.config : './config';
const config = require(configFile); // get our config file
console.log("\nCONFIG FILE:", configFile, '\n\n');

// configuration
const port = process.env.PORT || 4040; 
mongoose.connect(process.env.MONGO_URL || config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use morgan to log requests to the console
app.use(morgan('dev'));

const users = require('./routes/users');
app.use('/api/users', users);

const lesions = require('./routes/lesions');
app.use('/api/lesions', lesions);

app.get('/', function (req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// start the server
app.listen(port);
console.log('Magic happens at http://localhost:' + port);