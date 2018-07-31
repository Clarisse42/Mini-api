let express = require('express');
let app = express();
let ejs = require('ejs');


//Moteur de templates
app.set('view engine', 'ejs');


//Midelwares


//Routes
app.listen(8888, function(){
	console.log("Listenning on port 8888");
});