"use strict";
// including accounts.ts cards.ts transactions.ts in this server.ts technically called routing (encapsulate or collaborate)
exports.__esModule = true;
var express = require("express");
var accounts_1 = require("./accounts");
var transactions_1 = require("./transactions");
var cards_1 = require("./cards");
var app = express();
// to use modules use use()
app.use("/accounts", accounts_1["default"]); // url pattern for accounts module
app.use("/transactions", transactions_1["default"]);
app.use("/cards", cards_1["default"]);
// assign the port number
app.listen(8080, function () {
    console.log("server started");
});
// http://localhost:8080/accounts (default request)
// http://localhost:8080/accounts/login (login request)
// http://localhost:8080/transactions (token,wish)
// http://localhost:8080/cards
