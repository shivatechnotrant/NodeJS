"use strict";
// To collaborate all the 4 modules we need this server file
// @fetch @insert @update @remove
// server.ts is the main server file
// node starts execution from server.ts
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
// import all 4 custom modules
var fetch_1 = require("./fetch/fetch");
var insert_1 = require("./insert/insert");
var update_1 = require("./update/update");
var remove_1 = require("./remove/remove");
// create the rest object
var app = express();
//  enable cors policy
app.use(cors());
// set the MIME type (communication)
app.use(bodyparser.json()); // from the client we are recieving json 
// (this josn internally contains form data which we need to read follow below)
app.use(bodyparser.urlencoded({ extended: false }));
//  using the custom modules
// adding url pattern to respective modules as below
app.use("/fetch", fetch_1["default"]);
app.use("/insert", insert_1["default"]);
app.use("/update", update_1["default"]);
app.use("/delete", remove_1["default"]);
// assign the port number
app.listen(8080, function () {
    console.log("server started successfully!!");
});
// tsc server.ts
// node server
