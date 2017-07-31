var express = require("express")
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}));
var friends = ["Andy", "Betty", "Charly"]

app.get("/", function(req, res) {
  res.render("home");
})

app.get("/friends", function(req, res) {
  res.render("friends", {friends: friends});
})

app.post("/addfriend", function(req, res) {
  var newName = req.body.name;
  friends.push(newName);
  res.redirect("/friends")
})

app.listen(3000, function() {
  console.log("Server started!")
})