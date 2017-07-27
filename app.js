var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hi there!");
})

app.get("/bye", function(req, res){
  res.send("Goodbye!");
})

app.get("*", function(req, res){
  res.send("You're a star!");
})

app.listen(3000, () => console.log("Server has started"));