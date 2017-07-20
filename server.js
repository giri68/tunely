var express = require('express');
var app = express();

//Set up express app to serve public directory as static
app.use(express.static('public'));

var db = require('./models');
var controllers = require('./controllers');

//ROUTES
app.get('/', function(req, res){
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api/albums', controllers.api.index);


app.listen(3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
