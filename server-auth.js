var express = require("express");
var jwt = require("jwt-simple");
var bcrypt = require("bcrypt");
var app = express();
var User = require("./models/user");
app.use(require("body-parser").json());


var secretKey = "supersecretkey";


app.post("/session", function(req, res) {
  User.findOne({username: req.body.username})
  .select("password")
  .exec(function(err, user) {
    if (err) { return next(err) };
    if (!user) { return res.status(401).send() };
    bcrypt.compare(req.body.password, user.password, function(err, valid) {
      if (err) { return next(err) };
      if (!valid) { return res.status(401).send() };
      var token = jwt.encode({username: user.username}, secretKey);
      res.json(token);
    });
  });
});


app.get("/user", function(req, res) {
  var token = req.headers["x-auth"];
  var auth = jwt.decode(token, secretKey);
  User.findOne({username: auth.username}, function(err, user) {
    res.json(user);
  });
});


app.post("/user", function(req, res, next) {
  var user = new User({username: req.body.username});
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    user.password = hash;
    user.save(function(err, user) {
      if (err) { throw next(err) };
      res.status(201).send()
    });
  });
});


app.listen(3000);
