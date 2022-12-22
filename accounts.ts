import * as express from "express";


let accounts:any = express.Router();

accounts.get("/",(req:any,res:any)=>{
res.status(200).json({message:"welcome to accounts module"})
});

accounts.post("/acc",(req:any,res:any)=>{
    res.status(200).json({message:"account will add soon"})
});



export default accounts;

//  we need to encapsulate this two modules(accounts and transactions inn server.ts(or any related file))