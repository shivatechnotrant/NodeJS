// Http Server
//"http" is predefined module used to create the Http Server
// http module already available along with node js



//  import module (http module)
// require() used to import the modules

let http = require("http");

// createServer() is the function in http module, helps to create the http server 
// req object recieving the data from client application(angular,react,VueJS)
// res object giving the response to the client
// above objects are provided by the node engine
let server = http.createServer((req,res)=>{

    //  give reply/response to client // this is where we write business logic
res.write("Welcome to the Http Server");
// after completion of business logic we need to lock the res object
res.end();
}); // server is ready now

// add/assign the port number to server using listen()

server.listen(8080);
console.log("server listenning to the port number 8080");


