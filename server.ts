import * as express from "express";

import transactions from "./transactions";
import accounts from "./accounts";

let app:any = express();
app.use("/module1",transactions);
app.use("/module2",accounts);

app.listen(8080,()=>{
    console.log("server started");
    
});


// http://localhost:8080/module1 ==> control automatically goes to transactions
// http://localhost:8080/module1/mbappe ==> control automatically goes to transactions mentioned url


// http://localhost:8080/module2 ==> control automatically goes to accounts (GET)
// http://localhost:8080/module2/acc ==> control automatically goes to accounts (POST)