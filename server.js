var bodyParser = require("body-parser");
var express = require("express");

var app = express();
app.use(bodyParser.json());


app.use("/", require("./controllers/static"));

app.use("/api/posts", require("./controllers/api/posts"));


app.listen(3000, function() {
  console.log("Server listening on", 3000);
});
