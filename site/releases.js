const express = require("express");
const api = express.Router();
const path = require("path");

api.get("/get/release/v1", (req, res) => {
     const typeOf = req.params.type;

     if (!typeOf) {
          return res.status(400).json({
               status: 500,
               message: "Invalid request was recieved, check your parameters and request queries.",
          });
     } else if ((typeOf = "main")) {
          return res.status(200).json({
               status: 200,
               message: "Your request was successful, however- there is no acceptable file to return.",
          });
     } else if ((typeOf = "client")) {
          return res.status(200).json({
               status: 200,
               message: "Your request was successful, however- there is no acceptable file to return.",
          });
     }
});

module.exports = api;
