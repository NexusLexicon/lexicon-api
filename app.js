var Percolator = require('percolator').Percolator;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lexicon_test');

var db = mongoose.connection;

// db.on("error", console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("Database Connection Successful");
});

var server = new Percolator({
  resourcePath: "/api",
});

server.routeDirectory(__dirname + "/api", '/', function(err) {
  if (!!err) { console.log(err); }
  server.listen(function(err) {
    console.log("server is listening on port ", server.port);
  });
});


