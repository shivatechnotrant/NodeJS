"use strict";
exports.__esModule = true;
var express = require("express");
// transactions itself is one of the sub module
// to make this as one of the sub module we need to write as below
// create the sub module and the end export the module
var transactions = express.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({ "message": "transactions soon...!" });
});
transactions.get("/mbappe", function (req, res) {
    res.status(200).json({ "message": "Welcome Mbappe for nodeJS" });
});
// export the mmodule so that others can import
exports["default"] = transactions;
