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