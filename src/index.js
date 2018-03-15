import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';



// Initialize Firebase
    firebase.initializeApp({
        apiKey: "AIzaSyBjXYwJWbKCrFvb-0s35Y8Rs0NqYAEzIMM",
        authDomain: "e-buch.firebaseapp.com",
        databaseURL: "https://e-buch.firebaseio.com",
        projectId: "e-buch",
        storageBucket: "e-buch.appspot.com",
        messagingSenderId: "188654584339"
      });
    



ReactDOM.render(<App />, document.getElementById('root'));

