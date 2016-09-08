var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));

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

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
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

var _geoJSON=[];
app.post('/getpoints',function(req,res){
	res.send(_geoJSON);
});
app.post('/tweet',function(req,res){
  var tweet = req.body.tweet;
  // JSON.parse(str)
  // _geoJSON.push(req.body.geoJSON);
  // var password=req.body.password;
  console.dir("Tweet :- "+tweet);
  console.dir(req.body);
  console.dir("GeoJSON :- "+JSON.stringify(req.body, null, 2));
  var temp="{ ";//='{';
  for (var key in req.body) {
	  if (req.body.hasOwnProperty(key)) {
	console.log(temp);
	  	switch(key) {
	    case '_geoL[type]':
	        temp = temp + '"type":" ' + req.body[key]+'",';
	console.log(temp);
	        break;
	    case '_geoL[properties][tag]':
	        temp = temp + '"properties": { "tag": "' + req.body[key]+'"},';
	console.log(temp);
	        break;
	    case '_geoL[geometry][type]':
	        temp = temp + '"geometry": { "type": "' + req.body[key]+'",';
	console.log(temp);
	        break;
	    case '_geoL[geometry][coordinates][]':
	        temp = temp + '"coordinates": [' + req.body[key]+'] }}';
	console.log(temp);
	        break;
	        default:
		}
	    // temp = temp + '}';

	    // item = req.body[key];
	    // console.log(key+': '+item);
	  }
	}
	console.log("final : "+temp);
	_geoJSON.push(temp);
	console.log(_geoJSON[0]);
  Bot.tweet(tweet);
  res.send(_geoJSON);
  res.end("yes");
});






