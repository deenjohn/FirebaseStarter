# FirebaseStarter


//https://www.tutorialspoint.com/firebase/firebase_email_authentication.htm

<script src="//cdn.firebase.com/js/client/2.0.6/firebase.js"></script> 

var dataRef = new Firebase('https://friendlychat-f9117.firebaseio.com/');

// var itemRef = dataRef.child('messages');

// itemRef.set ({
//    John: {
//       number: 1,
//       age: 30
//    },
	
//    Amanda: {
//       number: 2,
//       age: 20
//    }
// });
// itemRef.on("value", function(snap) {
//  console.log(snap.val())
// });


// var johnRef = itemRef.child("John");

// johnRef.update ({
//    "number": 10
// });



// var playersRef = dataRef.child("players");
// playersRef.push ({
//    name: "John",
//    number: 1,
//    age: 30
// });

// playersRef.push ({
//    name: "Amanda",
//    number: 2,
//    age: 20
// });

//key 
var playersRef = dataRef.child("players");

// playersRef.on("value", function(data) {
   
//    data.forEach(function(data) {
//       console.log("The key " + data.key() + " value  " + data.val());
//    });
   
// });

// playersRef.orderByKey().on("value", function(data) {
//    data.forEach(function(data) {
//       console.log("The key " + data.key() + " value  " + data.val());
//    });
// });

playersRef.orderByChild("name").on("value", function(data) {
   data.forEach(function(data) {
      console.log("The key " + data.key() + " value  " + data.val().age);
   });
});

