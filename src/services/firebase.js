import * as firebase from 'firebase';
  // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBGXS-IEoVFmH5s2IQnAv4vC1GZv1W1T8I",
  authDomain: "voting-for-all.firebaseapp.com",
  databaseURL: "https://voting-for-all.firebaseio.com",
  projectId: "voting-for-all",
  storageBucket: "voting-for-all.appspot.com",
  messagingSenderId: "1084827647935"
};

firebase.initializeApp(config);

export default firebase;