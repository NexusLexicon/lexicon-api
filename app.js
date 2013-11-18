var Percolator = require('percolator').Percolator;

var server = new Percolator({
  resourcePath: "/api",
});

server.routeDirectory(__dirname + "/api", '/', function(err) {
  if (!!err) { console.log(err); }
  server.listen(function(err) {
    console.log("server is listening on port ", server.port);
  });
});


