import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCxFYqlHyIQhcykPlcXeuWi-IXA6cfwK7k",
  authDomain: "bedtime-stories-cf43b.firebaseapp.com",
  databaseURL: "https://bedtime-stories-cf43b.firebaseio.com",
  projectId: "bedtime-stories-cf43b",
  storageBucket: "bedtime-stories-cf43b.appspot.com",
  messagingSenderId: "368890692049",
  appId: "1:368890692049:web:962275efa9a51c7558a0f0"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   