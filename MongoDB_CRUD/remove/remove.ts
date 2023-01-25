import * as express from "express";
import * as mongodb from "mongodb";
import { connection } from "mongoose";

let shivaIT:any = mongodb.MongoClient;

let remove:any = express.Router().delete("/",(req:any,res:any):any=>{
    shivaIT.connect("mongodb+srv://admin:admin@cluster0.ktgd1vw.mongodb.net/?retryWrites=true&w=majority",(err:any,connection:any):any=>{
        if(err) throw err;
        else{
           let db:any =  connection.db("shiva_nodejs") //database reference
        //    we need to delete record based on id
        db.collection(" ").deleteOne({"id":req.body.id},(err,array)=>{
                if(err) throw err;
                else{
                    res.status(200).json({message:`${req.body.id}record deleted successfully!!!!`})
                }

        });
        }
    }

    )

})



export default remove;
