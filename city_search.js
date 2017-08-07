//city search
var express = require('express');
var app = express();

var cities = ['Caspiana', 'Indigo', 'Paradise'];
app.get('/cities', function(request, response) {
  if(request.query.search) {
   response.json(citySearch(request.query.search));
  }
});


function citySearch (keyword) {
  var regexp = RegExp(keyword, 'i');
  var result = cities.filter(function (city) {
    return city.match(regexp);
  });

  return result;
}

app.listen(3000);

//to access the city name submitted by the user
//request.params.name
