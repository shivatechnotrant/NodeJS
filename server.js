"use strict";
exports.__esModule = true;
var express = require("express");
var transactions_1 = require("./transactions");
var accounts_1 = require("./accounts");
var app = express();
app.use("/module1", transactions_1["default"]);
app.use("/module2", accounts_1["default"]);
app.listen(8080, function () {
    console.log("server started");
});
// http://localhost:8080/module1 ==> control automatically goes to transactions
// http://localhost:8080/module1/mbappe ==> control automatically goes to transactions mentioned url
// http://localhost:8080/module2 ==> control automatically goes to accounts (GET)
// http://localhost:8080/module2/acc ==> control automatically goes to accounts (POST)
