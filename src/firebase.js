import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWqP4SH19cwZ0-MDT9bTBYnGZ7serj24A",
    authDomain: "ig-reels-96050.firebaseapp.com",
    projectId: "ig-reels-96050",
    storageBucket: "ig-reels-96050.appspot.com",
    messagingSenderId: "859663177322",
    appId: "1:859663177322:web:1bc30c8fb1fd91b9a5dc13",
    measurementId: "G-S483RKCN24"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  export default db;