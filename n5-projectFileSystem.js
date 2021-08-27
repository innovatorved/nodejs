var http = require("http");
var u = require("url");
var fs = require("fs");

http.createServer((req , res)=>{
    let q = u.parse(req.url);
    fs.readFile(q.pathname.slice(1), (err , data)=>{
        if (err === null){
            res.writeHead(200 , {"Content-Type" : "text/html"});
            res.write(data);
            res.end();
        }
        else{
            fs.readFile("index.html" , (err1 , data1)=>{
                if (q.query === null){
                    res.writeHead(200 , {"Content-Type" : "text/html"});
                    res.write(data1);
                    res.end();
                }
                else{
                    res.end("accepted");
                }
            });
        }
    });
}).listen(8080);