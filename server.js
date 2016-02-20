var express = require('express');
var app = express(); 
var port = 8080;
var morgan = require('morgan'); // log requests to the console (express4)
var mongoose = require('mongoose'); // mongoose for mongodb
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var database = require('./config/database');

// Configuration
mongoose.connect(database.url);

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// Load routes
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use('/libs', express.static(__dirname + '/node_modules'));
require('./app/routes')(app);

// Listen
app.listen(port);
console.log("App listening on port " + port);