var mongoose = require('mongoose');
var models = require('./models');
var Activity = require("../models/index.js").Activity;
var Restaurant = require("../models/index.js").Restaurant;
var Hotel = require("../models/index.js").Hotel;

function initialize_gmaps() {
  // initialize new google maps LatLng object
  var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
  // set the map options hash
  var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  // get the maps div's HTML obj

  console.log("got here");



  var map_canvas_obj = document.getElementById("map-canvas");
  // initialize a new Google Map with the options
  var map = new google.maps.Map(map_canvas_obj, mapOptions);
  // Add the marker to the map
  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
  });

  console.dir(map_canvas_obj);
  // Add the marker to the map by calling setMap()
  marker.setMap(map);
}



$(document).ready(function(){

  initialize_gmaps();

  $(".getInfo").click(function(){
    console.log("Cool");
    $(this).toggleClass("glyphicon-chevron-right");
    $(this).toggleClass("glyphicon-chevron-down");

    if(this.dataset.toggled == "off"){
      this.dataset.toggled = "on";
      $(this).siblings(".content").css("display","block");

    }else{
     this.dataset.toggled = "off";
      $(this).siblings(".content").css("display","none");
    }
  });

  $(".list-group-item").click(function(){
    console.log($(this).children('button'));//.context.id);
  });
});
