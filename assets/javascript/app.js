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
    let destination = $("#destination").val().trim();
    let time = $("#time").val().trim();
    let frequency = $("#frequency").val().trim();
    console.log(name);
    console.log(destination);
    console.log(time);
    console.log(frequency);
    // save the variables into the firebase database
    database.ref().push({
        name: name,
        destination: destination,
        firsttrain: time,
        frequency: frequency
    })
    // clear each of the text boxes
    $("#trainName").val("").focus();
    $("#destination").val("");
    $("#time").val("");
    $("#frequency").val("");
})

// grabe the data when a new child is added
database.ref().on("child_added", function (snapshot) {
    console.log(snapshot.val())
    let time = snapshot.val().firsttrain;
    console.log(time);
    let tFrequency = snapshot.val().frequency;
    console.log(tFrequency);
    let firstTime = moment(time, "HH:mm").subtract(1, "years");
    console.log(firstTime);
    let diffTime = moment().diff(moment(firstTime), "minutes");
    console.log(`Difference in time: ${diffTime}`);
    let timeApart = diffTime % tFrequency;
    let minutesUntilTrain = tFrequency - timeApart;
    console.log(minutesUntilTrain);
    console.log(timeApart);
    let nextTrain = moment().add(minutesUntilTrain, "minutes");
    nextTrain = moment(nextTrain).format("hh:mm a");
    console.log(`The next train is arriving at: ${nextTrain}`);
    $("#table-body")
        .append(
            `<tr>
                <td>${snapshot.val().name}</td>
                <td>${snapshot.val().destination}</td>
                <td>${snapshot.val().frequency}</td>
                <td>${nextTrain}</td>
                <td>${minutesUntilTrain}</td>
            </tr>`
        )
})