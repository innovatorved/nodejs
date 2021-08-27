var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true);
  console.log(q);
  res.end("accepted");
  console.log(q.query);
}).listen(8080);
