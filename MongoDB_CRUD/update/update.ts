import * as express from "express";
import * as mongodb from "mongodb";

let shivaIT:any = mongodb.MongoClient;

let update:any = express.Router().put("/",(req:any,res:any):any=>{
    shivaIT.connect("mongodb+srv://admin:admin@cluster0.ktgd1vw.mongodb.net/?retryWrites=true&w=majority",(err:any,connection:any)=>{
        if(err) throw err;
        else{
            let db = connection.db("shiva_nodejs");//basedOnBelowCondition update price
            db.collection("products").updateOne({id:req.body.id},
                                                {$set:{price:req.body.price,quantity:req.body.quantity}},
                                                (err:any,result:any)=>{
                                                    if (err) throw err;
                                                    else{
                                                        res.send({message:"record updated successfully!!"})
                                                    }
                                                })
        }
    })
})




export default update;