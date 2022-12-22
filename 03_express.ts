// import express module

import * as express from "express";
 
let app:any = express();
// app object used to develop rest services
// Ex GET POST PUT DELETE.....

// get request

app.get("/ashokit",(req:any,res:any)=>{
    res.status(200).json({"message":"Welcome to typescript with nodeJS"})
});

// assign the port number
app.listen(8080,()=>{  
    console.log("lisening to the server!!");
    
})