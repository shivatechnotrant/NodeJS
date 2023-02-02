// To collaborate all the 4 modules we need this server file
// @fetch @insert @update @remove
// server.ts is the main server file
// node starts execution from server.ts

import * as express from "express";

import * as cors from "cors";
import * as bodyparser from "body-parser";

// import all 4 custom modules
import fetch from "./fetch/fetch";
import insert from "./insert/insert";
import update from "./update/update";
import remove from "./remove/remove";

// create the rest object
let app:any = express();

//  enable cors policy
app.use(cors());

// set the MIME type (communication)
app.use(bodyparser.json()); // from the client we are recieving json 

// (this josn internally contains form data which we need to read follow below)
app.use(bodyparser.urlencoded({extended:false}));


//  using the custom modules

// adding url pattern to respective modules as below
app.use("/fetch",fetch);
app.use("/insert",insert);
app.use("/update",update);
app.use("/delete",remove);

// assign the port number
app.listen(8080,()=>{
    console.log("server started successfully!!");
    
})



// tsc server.ts
// node server
