import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBjXYwJWbKCrFvb-0s35Y8Rs0NqYAEzIMM",
    authDomain: "e-buch.firebaseapp.com",
    databaseURL: "https://e-buch.firebaseio.com",
    projectId: "e-buch",
    storageBucket: "e-buch.appspot.com",
    messagingSenderId: "188654584339"
  };
  firebase.initializeApp(config);

  export default firebase;