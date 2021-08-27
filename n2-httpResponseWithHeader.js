var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello World!\n");
  res.end('My Name is Ved Gupta');
}).listen(8080); 
