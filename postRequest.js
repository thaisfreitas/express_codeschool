//to install body parser
//npm install body-parser


//section 1 - parser setup
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var parseUrlencoded = bodyParser.urlencoded({extended: false});

app.post('/cities', parseUrlencoded, function (request, response) {
  var city = createCity(request.body.name,request.body.description );
  response.status(201);
  response.json(city);
});

app.listen(3000);

var createCity = function(name, description){
  cities[name] = description;
  return name;
};

//validation
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.post('/cities', parseUrlencoded, function (request, response) {
  if( request.body.description.length > 4) {
    var city = createCity(request.body.name, request.body.description);
    response.status(201).json(city);
  } else {
    response.status(400).json('Invalid City');
  }
});

app.listen(3000);
