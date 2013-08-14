var express = require ('express');
var http = require ('http');
var path = require('path');

var app = express();

app.configure(function configureApp(){

app.set('view engine', 'jade');
app.set('views', __dirname);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'controller')));
app.use(app.router);
});

app.get('/api/messageservice', function (req, res){
	res.send("hello world");
});

app.listen(3000);

console.log("Started server at port 3000");