var express = require("express");
var app = express();
app.use(express.static("public"))

app.get("/", function(req, res) {
  res.render("home.ejs");
})

app.get("/love/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("love.ejs", {thing: thing});
})

app.get("/list", function(req, res) {
  var list = [
    {name: "Suzy", gender: "f"},
    {name: "Sam", gender: "m"},
    {name: "Simon", gender: "m"},
    {name: "Susan", gender: "f"}
  ]

  res.render("list.ejs", {list: list})
})

app.listen(3000, () => console.log("Server started!"));