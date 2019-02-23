var temp 	= require('../app/model/temp');
const JSON = require('circular-json');


var insertUser = function(temperatura,dataDia,callback){
	var newTemp = new temp()
	newTemp.temperatura = temperatura;
	newTemp.dataDia = dataDia;
	newTemp.save(function(err){
		if(err){
			console.log(err);
		}else
		{
			callback(newTemp);
		}
	});
}

var getUser = function(callback){
	var query = temp.find({});
	query.exec(function(err,info){
		console.log("A info no db:" + JSON.stringify(info));
		callback(info);
	});
	

}



module.exports = {	insertUser : insertUser,
					getUser : getUser
} 