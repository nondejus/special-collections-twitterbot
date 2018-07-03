var twit = require('twit');
var config = require('./config.js');
var TwitterBot = require('node-twitterbot').TwitterBot;
var Bot = new TwitterBot(config);
var doigURL = 'https://arc.lib.montana.edu/ivan-doig/item/';
var exponentURL = 'http://arc.lib.montana.edu/msu-exponent/item/';
var homeCookingURL = 'http://arc.lib.montana.edu/book/home-cooking-history-409/item/';
var montananURL = 'https://arc.lib.montana.edu/msu-yearbooks/item/';
var troutURL = 'https://arc.lib.montana.edu/trout-art/item/';
/*var exponentSize = 3899;
var doigSize = 6459;
var cookingSize = 39;
var montananSize= 91;*/
var collectionNumber = Math.floor(Math.random() * Math.floor(4));


function pickCollection(){ 			//uses random number to pick between the available collections
	
	
	
	if(collectionNumber==0)
		return doigURL;
	else if( collectionNumber ==1)
		return exponentURL;
	else if (collectionNumber==2)
		return homeCookingURL;
	else if(collectionNumber == 3)
		return montananURL;
	else if (collectionNumber ==4)
		return troutURL;
	
}

function getSize(URL) {				//gets the size of the chosen collection
	

	
	if(URL==doigURL)
		return 6459;
	else if(URL == exponentURL)
		return 3899;
	else if(URL == homeCookingURL)
		return 39;
	else if (URL == montananURL)
		return 91;
	else if (URL == troutURL)
		return 224;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));				//uses the collection size to pick a random item from that collection
}

function getHashtaglist(collection){							//adds hashtags to the tweet
	var hashtags = '#MSULibrary #specialcollections #digitalcollections';
	if(collection==doigURL)
		hashtags = hashtags +' #doig #ivandoig ';
	else if(collection == exponentURL)
		hashtags = hashtags +' #MSUExponent #MSUhistory #studentlife  ';
	else if(collection == homeCookingURL)
		hashtags = hashtags +' #recipe #homecooking  ';
	else if (collection == montananURL)
		hashtags = hashtags +' #MSUhistory #studentlife ';
	else if (collection == troutURL)
		hashtags = hashtags+ ' #trout ';
	hashtags = collection + hashtags;
	return hashtags;
}

function sendTweet() { 						// the main function that prepares and then sends the tweet
var URL = pickCollection();
var size = getSize(URL);
var tweetURL= URL+getRandomInt(size);
var hashtags = getHashtaglist(URL);
tweetURL = tweetURL +hashtags;
 Bot.tweet(tweetURL);
 console.log(tweetURL);
 
}
setInterval(sendTweet, 21600000); //post a random tweet from the collections once every 6 hours