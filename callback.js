var fs = require('fs');

fs.readFile(__dirname + '/ex1.js',function (err, data){

	if(err){
		console.log(err);
	}else {
		console.log(data.toString());
		fs.readFile(__dirname + '/ex2.js',function (err, data){

			if(err){
				console.log(err);
			}else {
				console.log(data.toString());

			}
			
		})
	}
	
})