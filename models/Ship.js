var mongoose = require('mongoose');

var shipSchema = mongoose.Schema({
	name: String,
	price: Number,
	quantity: Number
});

module.export = mongoose.model('Ship', shipSchema);
