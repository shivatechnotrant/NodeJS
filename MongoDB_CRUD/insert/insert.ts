import * as express from "express";
import * as mongodb from "mongodb";

let shivaIT:any = mongodb.MongoClient;

// create the module
let insert:any = express.Router().post("/",(req:any,res:any):any=>{
shivaIT.connect("mongodb+srv://admin:admin@cluster0.ktgd1vw.mongodb.net/?retryWrites=true&w=majority",(err:any,connection:any):any=>{
    if(err) throw err;
    else{
        // get the database reference
       let db:any =  connection.db("shiva_nodejs");
       db.collection("products").insertOne({"id":req.body.id,
                                            "name":req.body.name,
                                            "quantity":req.body.quantity,
                                            "price":req.body.price,
                                            "category":req.body.category,
                                            "image":req.body.image
    },(err:any,result:any)=>{
        if(err) throw err;
        else{
            res.send({message:"record inserted successfully !!!"});
        }
       })
    }
})
})




export default insert;