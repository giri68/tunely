var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile('views/index.html' , { root : __dirname});
  console.log(__dirname);
})

app.listen(3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
