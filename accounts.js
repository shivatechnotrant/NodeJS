"use strict";
exports.__esModule = true;
var express = require("express");
var accounts = express.Router();
accounts.get("/", function (req, res) {
    res.status(200).json({ message: "welcome to accounts module" });
});
accounts.post("/acc", function (req, res) {
    res.status(200).json({ message: "account will add soon" });
});
exports["default"] = accounts;
//  we need to encapsulate this two modules(accounts and transactions inn server.ts(or any related file))
