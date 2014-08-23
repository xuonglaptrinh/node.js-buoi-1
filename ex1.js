var http = require('http');
var server = http.createServer(function (req, res){

	/*console.log(req);*/

	
	
	res.write('<html>'); // Ghi du lieu vao body gui xuong phia client
	res.write('<head>');
	res.write('</head>');
	res.write('<body>');

	if(req.url == '/home'){
		res.write('<h1>Hello Nodejs</h1>');
	}else {
		res.write('<h1>Bye bye</h1>');
	}
	
	res.write('</body>');
	res.write('</html>');

	res.end(); // co nhiem vu ket thuc mot request
})
server.listen(2000);