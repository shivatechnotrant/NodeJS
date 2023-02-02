"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var shivaIT = mongodb.MongoClient;
var remove = express.Router()["delete"]("/", function (req, res) {
    shivaIT.connect("mongodb+srv://admin:admin@cluster0.ktgd1vw.mongodb.net/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("shiva_nodejs"); //database reference
            //    we need to delete record based on id
            db.collection("products").deleteOne({ "id": req.body.id }, function (err, array) {
                if (err)
                    throw err;
                else {
                    res.status(200).json({ message: "".concat(req.body.id, "record deleted successfully!!!!") });
                }
            });
        }
    });
});
exports["default"] = remove;
