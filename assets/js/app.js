// Variables
var rock = $("#rock");
var paper = $("#paper");
var scissors = $("#scissors")
var playerOneScore = $("#player-1-score");
var playerTwoScore = $("#player-2-score");
var playerOneDisplay = $("#player-1-display");
var playerTwoDisplay = $("#player-2-display");
var playerTurn = $(".turn-message");

// Firebase config
var firebaseConfig = {
    apiKey: "AIzaSyB5-5a9kbHDahfYxoIcLOKFUBXxlCKhguk",
    authDomain: "rps-multiplayer-84694.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-84694.firebaseio.com",
    projectId: "rps-multiplayer-84694",
    storageBucket: "rps-multiplayer-84694.appspot.com",
    messagingSenderId: "914568333428",
    appId: "1:914568333428:web:9706052694760c1a"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

$("#submit-button").on('click', function(e){
    e.preventDefault();

//needs: store in firebase
var nameEntry = $(".name-input").val().trim();
console.log(nameEntry);
//needs: display info from firebase data **
playerOneDisplay.text(nameEntry);

});
