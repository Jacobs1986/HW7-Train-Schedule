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

// function for the submit button
$("#submit").on("click", function (event) {
    // prevent default
    event.preventDefault();
    console.log("Clicked")
    // get the value from each of the items in the form
    // save them into a variable
    let name = $("#trainName").val().trim();
    console.log(name);
    // save the variables into the firebase database
    database.ref().push({
        name: name
    })
    // clear each of the text boxes
    $("#trainName").val("").focus();
})