var express 	= require('express');
var app      	= express(); 
var port     	= process.env.PORT || 8080;

var mongoose	= require('mongoose');
var configDB = require('./config/database.js');

require('./app/route.js')(app);
mongoose.connect(configDB.url,{ useNewUrlParser: true });
app.listen(port);
console.log('Pau ta quebrando na porta: ' + port);