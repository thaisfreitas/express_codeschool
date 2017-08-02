//level 1 - locations
var express = require('express');
var app = express();

app.get('/cities', function(request, response){
  var city = ["Caspiana", "Indigo", "Paradise"];
  response.send(city);
});

//cities
app.get('/locations', function(request, response) {
  response.redirect(301, '/cities');
});

app.listen(3001, function() {
  console.log('Running Express');
});
