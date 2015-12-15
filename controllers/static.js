var express = require("express");
var path = require("path");
var router = require("express").Router();


router.use(express.static(__dirname + "/../assets"));

router.use(express.static(__dirname + "/../templates"));

router.get("/", function(req, res) {
  res.sendFile(path.resolve("layouts/app.html"));
})


module.exports = router;
