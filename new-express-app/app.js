var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
})

app.get("/love/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("love", {thing: thing});
})

app.get("/list", function(req, res) {
  var list = [
    {name: "Suzy", gender: "f"},
    {name: "Sam", gender: "m"},
    {name: "Simon", gender: "m"},
    {name: "Susan", gender: "f"}
  ]

  res.render("list", {list: list})
})

app.listen(3000, () => console.log("Server started!"));