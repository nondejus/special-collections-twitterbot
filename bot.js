var twit = require('twit');
var config = require('./config.js');
var TwitterBot = require('node-twitterbot').TwitterBot;
var Bot = new TwitterBot(config);
var doigURL = 'https://arc.lib.montana.edu/ivan-doig/item/';
var exponentURL = 'http://arc.lib.montana.edu/msu-exponent/item/';
var homeCookingURL = 'http://arc.lib.montana.edu/book/home-cooking-history-409/item/';
var exponentSize = 3899;
var doigSize = 6459;
var cookingSize = 39;
var collectionNumber = Math.floor(Math.random() * Math.floor(2));


function pickCollection(){
	
	
	
	if(collectionNumber==0)
		return doigURL;
	else if( collectionNumber ==1)
		return exponentURL;
	else if (collectionNumber==2)
		return homeCookingURL;
	
}
function getSize(URL) {
	

	
	if(URL==doigURL)
		return doigSize;
	else if(URL == exponentURL)
		return exponentSize;
	else if(URL == homeCookingURL)
		return cookingSize;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var URL = pickCollection();
var size = getSize(URL);
var tweetURL= URL+getRandomInt(size);
 
 Bot.tweet(tweetURL);
 console.log(tweetURL);