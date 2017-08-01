var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
  console.log('Server started..');
})

app.get('/search', function(req, res) {
  res.render('search');
})

app.post('/results', function(req, res) {
  var search = req.body.search;
  var url = `http://www.omdbapi.com/?s=${search}&apikey=thewdb`
  request(url, function(error, response, body) {
    console.log(body)
    if (!error && response.statusCode == 200) {
      data = JSON.parse(body);
      res.render('results', {data: data});
    }
  });
});