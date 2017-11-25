const functions = require('firebase-functions');
const Twitter = require('twitter');
const cors = require('cors')({origin: true});

const getTwitterClient = (key, secret) => {
  return new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: key,
    access_token_secret: secret
  });
}

const callApi = (request, response, url) => {
  let client = getTwitterClient(request.query.key, request.query.secret);  
  client.get(url, request.query.options, function(error, tweets, res) {
    if (!error) {
      response.status(200).send(tweets);
    }
  });
}

// Doc: https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-home_timeline
exports.timeline = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    callApi(request, response, 'statuses/home_timeline');
  });
});

// Doc: https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-favorites-list
exports.like = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    callApi(request, response, 'favorites/list');
  });
});

//Doc: https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweets_of_me
exports.ownTweets = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    callApi(request, response, 'statuses/retweets_of_me');
  });
});

exports.retweets = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    callApi(request, response, 'statuses/retweets_of_me');
  });
});