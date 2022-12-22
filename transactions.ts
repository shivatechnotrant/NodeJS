import * as express from "express";
// transactions itself is one of the sub module

// to make this as one of the sub module we need to write as below
// create the sub module and the end export the module

let transactions:any = express.Router();


transactions.get("/",(req:any,res:any)=>{
    res.status(200).json({"message":"transactions soon...!"});
}); 

transactions.get("/mbappe",(req:any,res:any)=>{
    res.status(200).json({"message":"Welcome Mbappe for nodeJS"});
});


// export the mmodule so that others can import
export default transactions;