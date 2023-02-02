"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var shivaIT = mongodb.MongoClient;
// create the module
var insert = express.Router().post("/", function (req, res) {
    shivaIT.connect("mongodb+srv://admin:admin@cluster0.ktgd1vw.mongodb.net/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            // get the database reference
            var db = connection.db("shiva_nodejs");
            db.collection("products").insertOne({ "id": req.body.id,
                "name": req.body.name,
                "quantity": req.body.quantity,
                "price": req.body.price,
                "category": req.body.category,
                "image": req.body.image
            }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ message: "record inserted successfully !!!" });
                }
            });
        }
    });
});
exports["default"] = insert;
