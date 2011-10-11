var express = require('express');

express.logger.token('body', function(req, res){ return DumpObjectIndented(req.body, "  "); })

var app = express.createServer(
	express.logger({format: ':method :url :body'})
	, express.bodyParser()
	);


app.post('/', function(req, res){
	res.end();
	});

app.listen(3000);
console.log('Express server started on port %s', app.address().port);


function DumpObjectIndented(obj, indent)
{
    var result = "";
    if (indent == null) indent = "";

    for (var property in obj)
    {
	var value = obj[property];
	if (typeof value == 'string')
	    value = "'" + value + "'";
	else if (typeof value == 'object')
	{
	    if (value instanceof Array)
	    {
		// Just let JS convert the Array to a string!
		value = "[ " + value + " ]";
	    }
	    else
	    {
		// Recursive dump
		// (replace "  " by "\t" or something else if you prefer)
		var od = DumpObjectIndented(value, indent + "  ");
		// If you like { on the same line as the key
		//value = "{\n" + od + "\n" + indent + "}";
		// If you prefer { and } to be aligned
		value = "\n" + indent + "{\n" + od + "\n" + indent + "}";
	    }
	    }
	    result += indent + "'" + property + "' : " + value + ",\n";
	}
	return result.replace(/,\n$/, "");
    }
