var express = require('express');
var router = express.Router();

var Place = require("./models/index.js").Place;
var Activity = require("./models/index.js").Activity;
var Restaurant = require("./models/index.js").Restaurant;
var Hotel = require("./models/index.js").Hotel;

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  
  res.send('y');
  
});

module.exports = router;
