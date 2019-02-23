var request = require('request');
var db    = require('../repos/querys');


module.exports = function(app){
	
    app.post('/', function(req, res) {
        var id = req.query.id;
        request("http://api.openweathermap.org/data/2.5/forecast?id="+id+"&APPID=46da90f196b230adbbf21b78c275413e", { json: true }, (err, resp, body) => {
            if (err) { return console.log(err); }
            //res.json(resp.body.list[0].main.temp);
            var temperatura = resp.body.list[0].main.temp-271;
            var dataDia = resp.body.list[0].dt_txt;
            db.insertUser(temperatura,dataDia,function(newTemp){
                res.json(newTemp);
            });
            
        }); 
    });

    app.get('/', function(req,res){
        db.getUser(function(info){
            console.log("A info no route: " + info[0].temperatura);
            info[0].temperatura = info[0].temperatura.substring(0,5)
            res.render('temperatura.ejs',{
                info : info
            })
        });
        
    });
}