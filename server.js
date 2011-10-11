// simple server for debug purposes
// nothing more, nothing less

var express = require('express');

var app = express.createServer(
	express.logger('dev'),
	express.bodyParser()
	);

app.post('/', function(req, res){
    res.end();
    console.log(req.body);
	});

app.listen(3000);

console.log('Express server started on port %s', app.address().port);
