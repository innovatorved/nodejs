/*
    fs: represent file system
    Commonly use for :
        - Read , Create , Update , Rename or Delete file
*/

var http = require("http");
var file_system = require("fs");

// read index.html and serve on Web
http.createServer((req , res)=>{
    file_system.readFile("index.html" , (err , data)=>{
        res.writeHead(200 , ("Content-Type" , "text/html"));
        console.log(err);
        res.write(err?"404 File Not found":data);
        res.end();
    });
}).listen(8080);

