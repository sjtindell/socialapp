var express = require("express");
var path = require("path");
var router = require("express").Router();


router.use(express.static(__dirname + "/../assets"));


router.get("/", function(req, res) {
  res.sendFile(path.resolve("layouts/posts.html"));
})


module.exports = router;
