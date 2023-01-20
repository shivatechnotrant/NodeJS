// including accounts.ts cards.ts transactions.ts in this server.ts technically called routing (encapsulate or collaborate)

import * as express from "express";
import accounts from "./accounts";
import transactions from "./transactions";
import cards from "./cards";

let app:any = express();
// to use modules use use()
app.use("/accounts",accounts); // url pattern for accounts module
app.use("/transactions",transactions);
app.use("/cards",cards);

// assign the port number

app.listen(8080,()=>{
    console.log("server started");
    
})

// http://localhost:8080/accounts (default request)
// http://localhost:8080/accounts/login (login request)


// http://localhost:8080/transactions (token,wish)

// http://localhost:8080/cards
