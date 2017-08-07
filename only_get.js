//only get
module.exports = function(request, response, next) {
  var method = request.method;
  var stream = process.stdout;
  if(method === 'GET'){
    next();
  } else {
    response.send('Method is not allowed');
  }
};
