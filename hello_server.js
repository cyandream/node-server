var express = require('express');

var app = express();

app.get('/', function(request, response){
  response.send("Hello World!");
});

app.get('/:firstname/:lastname', function(request, response){
    var first = (request.params.firstname).substring( 0, 3 );
    var last = (request.params.lastname).substring( 0, 3 );
    response.send("hello " + last +first);

});

app.listen(8080);

//app.listen(process.env.PORT, process.env.IP);
