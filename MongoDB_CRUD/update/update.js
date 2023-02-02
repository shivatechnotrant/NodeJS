"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var shivaIT = mongodb.MongoClient;
var update = express.Router().put("/", function (req, res) {
    shivaIT.connect("mongodb+srv://admin:admin@cluster0.ktgd1vw.mongodb.net/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("shiva_nodejs"); //basedOnBelowCondition update price
            db.collection("products").updateOne({ id: req.body.id }, { $set: { price: req.body.price, quantity: req.body.quantity } }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ message: "record updated successfully!!" });
                }
            });
        }
    });
});
exports["default"] = update;
