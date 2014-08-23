var fs = require('fs');

// Xem thong tin file
/*fs.stat(__dirname + '/ex1.js', function (err, data){
	if(err){
		console.log(err);
	}else {
		console.log(data);
	}
})*/




// lay ra danh sach cac thu muc va file trong folder
fs.readdir(__dirname, function (err, data){

	if(err){
		console.log(err);
	}else {
		for(var i = 0; i< data.length; i++){

			if(fs.lstatSync(data[i]).isFile()){
				console.log(data[i]);
			}else {
				console.log('[' + data[i] + ']');
			}
		}
	}
})