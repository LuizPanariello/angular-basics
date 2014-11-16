var express    = require('express'); 
var mongoose   = require('mongoose');

mongoose.connect('mongodb://tutorial:tutorial@ds055680.mongolab.com:55680/angular-basics');

//Models
var shipSchema = mongoose.Schema({
	name: String,
	price: Number,
	quantity: Number
});

var Ship = mongoose.model('Ship', shipSchema);

//API
var router = express.Router();

router.get('/ships', function(req, res) {
	Ship.find({},function(err, ships) {
		if (err)
			res.send(err);

		res.json(ships);
	});
});

router.get('/ship/:id', function(req, res) {
	Ship.findById(req.params.id, function(err, ship) {
		if (err)
			res.send(err);
		res.json(ship);
	});
});

router.put('/ship/:id', function(req, res) {
	Ship.findById(req.params.id, function(err, ship) {
		ship.name = req.body.name;  
		ship.quantity = req.body.quantity;  
		ship.price = req.body.price;  

		ship.save(function(err) {
			if (err)
				res.send(err);

			res.send();
		});
	});
});

router.post('/ship', function(req, res) {
	var ship = new Ship(); 	
	ship.name = req.body.name;  
	ship.quantity = req.body.quantity;  
	ship.price = req.body.price;  

	ship.save(function(err) {
		if (err)
			res.send(err);

		res.send();
	});
});

router.delete('/ship/:id', function(req, res) {
	Ship.remove({
		_id: req.params.id
	}, function(err, ship) {
		if (err)
			res.send(err);

		res.send();
	});
});