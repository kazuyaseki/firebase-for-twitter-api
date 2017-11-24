# firebase-for-twitter-api
Tool to enable easy use of Twitter API from Firebase Cloud Function

## Prerequisitte
* creation of Firebase project
* know how to use Cloud Functions for Firebase
  * If you are unsure, read [this](https://firebase.google.com/docs/functions/get-started?hl=ja)

## Usage

### Deploy functions
* `git clone https://github.com/kazuyaseki/firebase-for-twitter-api`
* `firebase deploy --only functions`

### Add case
search for the function you want from the [API reference](https://developer.twitter.com/en/docs/api-reference-index)

add your function to index.js as follows. replace function name and url accordingly.

```js
exports.your_function_name = functions.https.onRequest((request, response) => {
  cors((request, response) => {
    callApi(request, response, 'URL of the API you want to call');
  });
});
```