var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello');
})

app.listen(3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
