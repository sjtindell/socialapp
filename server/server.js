var bodyParser = require("body-parser");
var express = require("express");
var Post = require("../models/post");


var app = express();
app.use(bodyParser.json());


app.get("/api/posts", function(req, res) {
  res.json([
    {
      username: "sjtindellxxx",
      body: "node rules!"
    }
  ]);
})


app.post("/api/posts", function(req, res, next) {
  var post = new Post({
    username: req.body.username,
    body: req.body.body
  });
  post.save(function(err, post) {
    if (err) { return next(err) };
    res.status(201).json(post);
  });
})


app.listen(3000, function() {
  console.log("Server listening on", 3000);
})