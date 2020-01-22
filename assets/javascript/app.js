// Firebase initialization
var firebaseConfig = {
    apiKey: "AIzaSyBHOtv6T25h0nnUClZ5zUBoDl3Yh5wt_kg",
    authDomain: "fir-demo-9f6b7.firebaseapp.com",
    databaseURL: "https://fir-demo-9f6b7.firebaseio.com",
    projectId: "fir-demo-9f6b7",
    storageBucket: "fir-demo-9f6b7.appspot.com",
    messagingSenderId: "491402112622",
    appId: "1:491402112622:web:23f52a226ec9cb24dd007f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // firebase variable
  let database = firebase.database();