var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});



var TwitterBot = require("node-twitterbot").TwitterBot
var Bot = new TwitterBot({
  "consumer_secret": "3U1rsW27yzwUpAc8QWOWDTS27Xej8xOcsKWg4yoC3msCL2wimt",
    "consumer_key": "8hY0we3y8TuMtooqzk6Sr9wzB",
	"access_token": "752065819824107520-FqqiGVZrmPG5xUgmtZnledEvQPK5tSk",
    "access_token_secret": "ivBHvfvi4HcEKiT3hQLvFstDIvE5yq522FX0bIdKiqxAC"
  });

 //  	Bot.addAction("tweet", function(twitter, action, tweet) {
	//   Bot.tweet("I'm posting a tweet!");

	// });

app.post('/tweet',function(req,res){
  var tweet = req.body.tweet;
  // var password=req.body.password;
  console.dir("Tweet :- "+tweet);
  Bot.tweet(tweet);
  res.end("yes");
});






