//  how to read the query param

// http://localhost:8080/?uname=ashokit&upwd=ashokit
 

// create http server
//  import http module
let http = require("http");

// import url module (predefined in node)
// url module used to read the query parameters
let url = require("url");

//create http server using createServer()

let server = http.createServer((req,res)=>{
// set the MIME Type 
// communication language between client and server called as MIME (language examples JSON, HTML whatever client seeking server responding with the same)
// writeHead() is used to set the mime type

 res.writeHead(200, {'Content-Type':'text/html'} );
//   query parameters coming from the client, we need to read them
// that url stored into req object and if you want that url to read then boolean value must be set to true to read
// after parsing we need to query that url

// parse the request
let obj = url.parse(req.url,true).query;
  if(obj.uname === "ashokit" && obj.upwd ==="ashokit"){
    res.write("<h1> Login Success</h1>");
  } else{
    res.write("<h1> login Failed</h1>");
  }
  res.end();
}); // server ready and assign a port number

server.listen(8080);
console.log("Server Listening the port number 8080 ");
