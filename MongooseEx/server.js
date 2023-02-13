// import modules

// import * as express from "express";
// import * as bodyparser from "body-parser";
// import * as cors from "cors";
// import * as mongoose from "mongoose";

let express = require("express");
let bodyparser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors"); 

//  create the rest object
let app = express();

// enable the cors policy
app.use(cors());

// set the JSON as MIME Type
app.use(bodyparser.json()); 

// parse/read the Client data

app.use(bodyparser.urlencoded({extended:false}));

// connect to database
mongoose.connect("mongodb+srv://admin:admin@cluster0.ktgd1vw.mongodb.net/?retryWrites=true&w=majority");


// define the schema/initialize the schema
// const Schema = mongoose.Schema;
// initialize the schema 
// const employeeSchema = new Schema({
    const employeeSchema = new mongoose.Schema({
    e_id:Number,
    e_name:String,
    e_sal:Number
} 
);
// employeeSchema is rules and regulations

// apply above schema to database by using mongoose
// https://mongoosejs.com/docs/connections.html
// rules and regulations should be applied to database
// const Model = mongoose.model;

// const Employee = Model("Employee",employeeSchema);
const employees = mongoose.model("Employee",employeeSchema);

// create the rest api
app.post("/employee",(req,res)=>{
   const newRecord =  new employees({e_id:req.body.e_id,
                  e_name: req.body.e_name,
                  e_sal: req.body.e_sal});
                  newRecord.save((err,result)=>{
                    if(err) throw err;
                    else{
                        res.status(200).json({insert:"success"})
                    }
                  });
});

app.get("/allEmployees",(req,res)=>{
    employees.find({},(err,docs)=>{
        if(err) throw err;
        else{
             res.send(docs);
        }
    })
})



// assign the port number

app.listen(8080,()=>{
    console.log("server Started successfully");
    
})