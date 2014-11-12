var express    = require('express'); 
var app        = express(); 			
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//API
var router = express.Router();
app.use('/api', router);

router.get('/ships/:id', function(req, res) {
	
});


//SERVERSTART
var port = process.env.PORT || 8080;
app.listen(port);