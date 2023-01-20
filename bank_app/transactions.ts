 import * as express from "express";
 let transactions:any = express.Router();

//  authoriztion code

const auth1:any = (req:any,res:any,next:any)=>{
   let allHeaders:any =  req.headers;
   let token = allHeaders.token;
   if(token === "abc123"){
    // we can give the judgement using next()
    next();
   } else{
    res.status(200).json({"auth1":"FAILED"})
   }
};

const auth2:any = (req:any,res:any,next:any)=>{
    let allHeaders:any =  req.headers;
    let wish = allHeaders.wish;
    if(wish === "hello"){
     // we can give the judgement using next()
     next();
    } else{
     res.status(200).json({"auth2":"FAILED"})
    }
 };

//  for the below default request we linked two authentications
 transactions.get("/",[auth1,auth2],(req:any,res:any):any=>{
    res.status(200).json({"message":"welcome to transactions module"});
 });


 export default transactions; 
