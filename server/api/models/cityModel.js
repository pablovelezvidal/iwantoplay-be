var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var citySchema = new Schema({
	"name" : String,
    "state" : String,
    "country" : String,
    "dial_code" : String,
    "city_flag" : String,
    "country_flag" : String
});

module.exports = mongoose.model('city', citySchema);

