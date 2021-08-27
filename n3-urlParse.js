/* Extract Search Data From URL */
var http = require("http");
var url = require("url");

http.createServer((req , res)=>{
    res.writeHead(200 , {"Content-Type" : "text/html"});
    let q = url.parse(req.url , true).query; // variable q is Dict type
    res.write(`Your Query :`);
    console.log(q);
    res.end();
}).listen(8080)