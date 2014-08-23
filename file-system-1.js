var fs = require('fs');

/*fs.readFile(__dirname + '/ex1.js',function (err, data){

	if(err){
		console.log(err);
	}else {
		console.log(data.toString());

	}
	
})*/


var dataSync = fs.readFileSync(__dirname + '/ex1.js');

console.log('dataSync', dataSync);

console.log('helo');
