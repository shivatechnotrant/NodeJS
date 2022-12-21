//  express is 3rd party module
// express is the framework(rest framework)
// express framework used to develop the rest services Ex. GET, POST, PUT, DELETE......
// we will download express module by using "yarn" tool or npm

// npm install express --save  (or)  yarn add express --save

// all the modules download to node_modules in current path
 
// import express module
let express = require("express");
const { mongo } = require("mongoose");

//  in order to create rest services GET,POST, PUT.... we need to create the rest object

let app = express();
// where app object is the rest object

// to get the GET request, arg1 is url pattern("/"===> root url)

app.get("/",(req,res)=>{ 

    res.status(200).json({"message":"default get request...!"}); 
}); 


app.get("/demo",(req,res)=>{
    res.status(200).json({"message":"data from mongodb databse soon...app.!"});
});

//  creating the post request

app.post("/",(req,res)=>{
    res.status(200).json({"message":"default post request...!"})
})

app.post("/demo",(req,res)=>{
    res.status(200).json({"message":"data from cassandradb soon....!"})
})

// now server is ready. assign the port number

app.listen(8080,()=>{
    console.log("server Started");
});




// http://localhost:8080/  (GET) (POST)
// http://localhost:8080/demo  (GET) (POST)