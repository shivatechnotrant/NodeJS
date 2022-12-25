"use strict";
// import express module
exports.__esModule = true;
var express = require("express");
// import body-parser module
// body-parser module used to read the post parameters
var bodyparser = require("body-parser");
// create the rest object
var app = express();
//  this rest object used to develop the rest services GET POST PUT DELETE......
// MIME Type (communication language between client and server Ex.json as below)
// set the MIME Type
app.use(bodyparser.json());
// if we to do any task in rest services we use app.use() ===> it's kind of main() method
//  recieve form data from client and parse the data (urlencoded means form data/extended parameters)
app.use(bodyparser.urlencoded({ extended: false })); // if we want to read form data then encoded must be false
// Authorization code
// next function judges whether authorization success or not
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "nodejs") {
        next();
    }
    else {
        res.status(401).json({ auth: "fail" });
    }
};
// Authentication
// create the post request
app.post("/login", [auth], function (req, res) {
    if (req.body.uname === "admin" && req.body.upwd === "admin") {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(401).json({ login: "Fail" });
    }
});
app.listen(process.env.PORT || 8080, function () {
    console.log("server started successfully");
});
