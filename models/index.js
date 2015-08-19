var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wikistack');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
var Schema = mongoose.Schema;
var Place, Hotel, Restaurant, Activity;

var placeSchema = new Schema({
  address: { type: String, required: true },
	city: {type: String, required: true},
	state: {type: String, required: true},
	location: {type: [], required: true},
	phone: {type: String, required: true}
});

var hotelSchema = new Schema({
	name: {type: String, required: true},
	place: {type: String, ref: 'Place'},
	"num-stars": {type: Number, max:5, min:1},
	amenities: {type: [String], get: function(tags){ return tags.join(', ') }}
});

var activitySchema = new Schema({
	name: {type: String, required: true},
	place: {type: String, ref: 'Place'},
	"age-range": {type: String}
});


var restaurantSchema = new Schema({
	name: {type: String, required: true},
	place: {type: String, ref: 'Place'},
	price: {type: Number, max:5, min:1},
	cuisines: {type: [String], get: function(tags){ return tags.join(', ') }},
});

Place = mongoose.model('Place', placeSchema);
Hotel = mongoose.model('Hotel', hotelSchema);
Activity = mongoose.model('Activity', activitySchema);
Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
	Place: Place,
	Hotel : Hotel,
	Activity: Activity,
	Restaurant: Restaurant,
}
