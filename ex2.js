var http = require('http');
var server = http.createServer(function (req, res){

	/*console.log(req);*/

	res.writeHead({
		"Content-type": "application/json"
	})	
	
	var object = {
		"name": 'Thinh',
		"age": 20
	};
	
	res.write(JSON.stringify(object));

	res.end(); // co nhiem vu ket thuc mot request
})
server.listen(2000);