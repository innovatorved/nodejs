var http_res = require("http");
let d = require("./dateMod1");

http_res.createServer(
    (req , res)=>{
        res.writeHead(200 , {"Content-Type" : "text/html"});
        res.write(`Current Date is : ${d.dateTime()}`);
        res.end();
    }
).listen(8080);