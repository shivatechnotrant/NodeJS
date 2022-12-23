// http://localhost:8080/login?uname="admin"&upwd="admin"

// import express module
import * as express from "express"; 

// develop rest services Ex. GET POST PUT DELETE ....
 
  let app:any = express();
 
  // Authorization

  let auth = (req:any,res:any,next:any):any=>{
    let allHeaders =req.headers;
    if(allHeaders.token === "ashokIt"){
      next();
    } else{
      res.status(500).json({auth:"fail"});
    }
  }
  
// this above authorization we need to link with below authentication using[auth] in url pattern arg



  // Authentication
// get request
app.get("/login",[auth],(req:any,res:any)=>{  //check without [auth] meaning without token
  // query param 
  if(req.query.uname == "admin" && req.query.upwd =="admin"){
      res.status(201).json({json:"success"});
  } {
    res.status(401).json({json:"fail"});
  }
 
});

// default request 
app.get("/",(req:any,res:any):any=>{
  res.sendFile("C:/Users/shiva/OneDrive/Desktop/NodeJS/NodeJS/getParameters/index.html");   
   //path of index.html ==> C:\Users\shiva\OneDrive\Desktop\NodeJS\NodeJS\getParameters\index.html (predefined method for html OLD Approach)
})


app.listen(8080,()=>{
  console.log("server started successfully");
  
})