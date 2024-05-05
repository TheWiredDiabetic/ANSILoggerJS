const express = require("express");
const routes = express.Router();
const path = require("path");

routes.use("/assets", express.static("assets"));

routes.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/home.html"));
});

routes.get("/releases", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/releases.html"));
});

routes.get("/github", (req, res) => {
    res.redirect("https://github.com/TheWiredDiabetic/ANSILoggerJS");
});



module.exports = routes;
