// import express module
 
import * as express from "express";

// import body-parser module
// body-parser module used to read the post parameters

import * as bodyparser from "body-parser";


// create the rest object

let app:any = express();

//  this rest object used to develop the rest services GET POST PUT DELETE......
 

// MIME Type (communication language between client and server Ex.json as below)

// set the MIME Type
app.use(bodyparser.json());

// if we to do any task in rest services we use app.use() ===> it's kind of main() method

//  recieve form data from client and parse the data (urlencoded means form data/extended parameters)

app.use(bodyparser.urlencoded({extended:false})); // if we want to read form data then encoded must be false



// Authorization code
// next function judges whether authorization success or not
let auth:any = (req:any,res:any,next:any):any=>{
    let allHeaders = req.headers;
    let token:any = allHeaders.token;

    if(token === "nodejs"){
        next();
    } else{
        res.status(401).json({auth:"fail"});
    }
}; 

// Authentication
// create the post request
app.post("/login",[auth],(req:any,res:any)=>{
    if(req.body.uname === "admin" && req.body.upwd === "admin"){
        res.status(200).json({login:"success"});
    }else{
        res.status(401).json({login:"Fail"});
    }
})


app.listen(process.env.PORT||8080,()=>{
    console.log("server started successfully");
    
})