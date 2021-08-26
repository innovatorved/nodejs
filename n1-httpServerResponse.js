// http module
var http_req = require("http"); // http module able to create http request

http_req.createServer((req , res)=>{
    /* Parameters are Request and Response */
    res.write("Hello World");
    res.end(); // End the Response
}).listen(8080);
// Set listen Port [ default set to port 8080 ]

