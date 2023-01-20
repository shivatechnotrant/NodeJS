"use strict";
exports.__esModule = true;
var express = require("express");
var transactions = express.Router();
//  authoriztion code
var auth1 = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "abc123") {
        // we can give the judgement using next()
        next();
    }
    else {
        res.status(200).json({ "auth1": "FAILED" });
    }
};
var auth2 = function (req, res, next) {
    var allHeaders = req.headers;
    var wish = allHeaders.wish;
    if (wish === "hello") {
        // we can give the judgement using next()
        next();
    }
    else {
        res.status(200).json({ "auth2": "FAILED" });
    }
};
//  for the below default request we linked two authentications
transactions.get("/", [auth1, auth2], function (req, res) {
    res.status(200).json({ "message": "welcome to transactions module" });
});
exports["default"] = transactions;
