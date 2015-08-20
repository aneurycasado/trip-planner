var express = require('express');
var router = express.Router();

var Place = require("../models/index.js").Place;
var Activity = require("../models/index.js").Activity;
var Restaurant = require("../models/index.js").Restaurant;
var Hotel = require("../models/index.js").Hotel;

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {};
  var restaurant_addresses = [];
  Restaurant.find().then(function(restaurants){
    data['restaurants'] = restaurants;
    for(var i = 0; i < restaurants.length; i++){
      restaurants[i].place = restaurants[i].place[0];
    }
  }).then(function(){
      Activity.find().then(function(activities){
        data['activities'] = activities;
      }).then(function(){
          Hotel.find().then(function(hotels){
          data['hotels'] = hotels;
        }).then(function(){
            console.log("Data");
            res.render('index',{
            restaurants: data['restaurants'],
            activities: data['activities'],
            hotels: data['hotels']
          });
        });
    });
  });
});


module.exports = router;
