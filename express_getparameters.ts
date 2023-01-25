// read get paramaters in expressjs
  
// 2 types of get parameters

// http://localhost:8080/sample/user/ashokit/pwd/ashokit

// http://localhost:8080/sample/user/ashokit/pwd/ashokit (we need to read uname & upwd)
// 
/*  
import * as express from "express";

let app:any = express();
//               :uname :upwd are variable names we can take any name like username and password
app.get("/login/user/:uname/pwd/:upwd",(req:any,res:any):any=>{
let uname = req.params.uname;
let upwd = req.params.upwd;
if(uname === "ashokit" && upwd ==="ashokit"){
    res.status(200).json({login:"success"})
    // res.send({login:"success"});
}else{
    res.status(400).json({login:"Failed"})
    // res.send({login:"fail"})
}
// console.log(uname, upwd);

}); 


app.listen(8080,()=>{
    console.log("server started");
    
})
*/

// another type of getparameter


// http://localhost:8080/login?uname=admin&upwd=admin
// read
// req.query.uname
// req.query.upwd


import * as express from "express";
let app:any = express();
app.get("/login",(req:any,res:any):any=>{
    if(req.query.uname ==="admin" && req.query.upwd ==="admin"){
        res.status(201).json({login:"success"});
    }
    else{
        res.status(401).json({login:"Fail"})
    }
})

app.listen(8080,()=>{
    console.log("server started!!!!");
    
})
