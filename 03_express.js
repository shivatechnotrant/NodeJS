"use strict";
// import express module
exports.__esModule = true;
var express = require("express");
var app = express();
// app object used to develop rest services
// Ex GET POST PUT DELETE.....
// get request
app.get("/ashokit", function (req, res) {
    res.status(200).json({ "message": "Welcome to typescript with nodeJS" });
});
// assign the port number
app.listen(8080, function () {
    console.log("lisening to the server!!");
});
