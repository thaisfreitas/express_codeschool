var express = require('express');
var app = express();

app.get('/locations', function(request, response){
  var city = ["Caspiana", "Indigo", "Paradise"];
  response.send(city);
});

app.listen(3001, function() {
  console.log('Running Express');
});
