// import express module
// express module used to develop the rest services

import * as express from "express";

// import mongodb module, used to connect to mongodb database

import * as mongodb from "mongodb";

// create the client, mongodb follows client server architecture

let shivaIT:any = mongodb.MongoClient;


// create the module // Router() used to create the module
let fetch:any = express.Router().get("/",(req:any,res:any)=>{
    shivaIT.connect("mongodb+srv://admin:admin@cluster0.ktgd1vw.mongodb.net/?retryWrites=true&w=majority",(err,connection)=>{
if(err) throw err;
else{
    //shiva_nodejs.products
   let db:any =  connection?.db("shiva_nodejs");
//    find()  used to fetch the information and these fetched data to be stored in toArray() (from produducts collection fetch and store in array)
    db.collection("products").find().toArray((err,array)=>{
        if(err) throw err;
        else{
            // whatever the array created send to the customer
            res.send(array); 
        }
    })
} 
    })
})



// export the module
export default fetch;
