var express = require('express');
var path = require('path');
var logger = require('morgan');
var swig = require('swig');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var Place = require("./models/index.js").Place;
var Activity = require("./models/index.js").Activity;
var Restaurant = require("./models/index.js").Restaurant;
var Hotel = require("./models/index.js").Hotel;

var app = express();

var server = app.listen(3000, function(){
	
	console.log("listeneing");
});

// view engine setup
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


module.exports = app;
