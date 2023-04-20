var express = require ('express');
var app = express ();
var server = require ('http').createServer (app);
app.set('views', __dirname); 
app.engine('.html', require('ejs').__express);

app.get("/de", function (req, res){
    res.render('index.html');    
});
app.get("/rus", function (req, res){
    res.render('rus_index.html');
});

app.use(express.static(__dirname + '/Images'));

console.log("Server listening on port 2222");
server.listen(2222);