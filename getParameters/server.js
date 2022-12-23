"use strict";
// http://localhost:8080/login?uname="admin"&upwd="admin"
exports.__esModule = true;
// import express module
var express = require("express");
// develop rest services Ex. GET POST PUT DELETE ....
var app = express();
// Authorization
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === "ashokIt") {
        next();
    }
    else {
        res.status(500).json({ auth: "fail" });
    }
};
// this above authorization we need to link with below authentication using[auth] in url pattern arg
// Authentication
// get request
app.get("/login", function (req, res) {
    // query param 
    if (req.query.uname == "admin" && req.query.upwd == "admin") {
        res.status(201).json({ json: "success" });
    }
    {
        res.status(401).json({ json: "fail" });
    }
});
// default request 
app.get("/", function (req, res) {
    res.sendFile("C:/Users/shiva/OneDrive/Desktop/NodeJS/NodeJS/getParameters/index.html");
    //path of index.html ==> C:\Users\shiva\OneDrive\Desktop\NodeJS\NodeJS\getParameters\index.html (predefined method for html OLD Approach)
});
app.listen(8080, function () {
    console.log("server started successfully");
});
