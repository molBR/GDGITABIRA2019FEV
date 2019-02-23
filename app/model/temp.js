var mongoose = require('mongoose');

var tempSchema = mongoose.Schema({

	temperatura		: String,
	dataDia			: String

});

module.exports = mongoose.model('temp', tempSchema);
