var express = require('express');
app = express();

app.listen(3000, function() {
  console.log('Server started..');
})

app.get('/', function(req, res) {
  res.send('This is the root path');
})