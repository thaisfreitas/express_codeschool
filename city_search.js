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

//city info
var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};

app.get('/cities/:name', function (request, response) {
  var cityInfo = cities[request.params.name];
  if(cityInfo) {
    response.json(cityInfo);
  } else {
    response.status(404);
    response.json("City not found");
  }
});

app.listen(3000);
