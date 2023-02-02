"use strict";
// import express module
// express module used to develop the rest services
exports.__esModule = true;
var express = require("express");
// import mongodb module, used to connect to mongodb database
var mongodb = require("mongodb");
// create the client, mongodb follows client server architecture
var shivaIT = mongodb.MongoClient;
// create the module // Router() used to create the module
var fetch = express.Router().get("/", function (req, res) {
    shivaIT.connect("mongodb+srv://admin:admin@cluster0.ktgd1vw.mongodb.net/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            //shiva_nodejs.products
            var db = connection === null || connection === void 0 ? void 0 : connection.db("shiva_nodejs");
            //    find()  used to fetch the information and these fetched data to be stored in toArray() (from produducts collection fetch and store in array)
            db.collection("products").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    // whatever the array created send to the customer
                    res.send(array);
                }
            });
        }
    });
});
// export the module
exports["default"] = fetch;
