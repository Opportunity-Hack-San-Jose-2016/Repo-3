var express = require('express');
var app = express();

var mongoose = require('mongoose');

// Mongoose connection to MongoDB
mongoose.connect('mongodb://localhost/mongo_fix', function (error) {
    if (error) {
        console.log(error);
    }
});

app.use(express.static('public'));
app.use(express.static('files'));

app.get('/', function (req, res) {
  res.redirect('Home.html');
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});

