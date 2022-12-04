
const firebaseConfig = {
      apiKey: "AIzaSyBjBzXSrh8L6KNeZIxNxPHehuCN-Jx1gVM",
      authDomain: "kwitter-99ce5.firebaseapp.com",
      databaseURL: "https://kwitter-99ce5-default-rtdb.firebaseio.com",
      projectId: "kwitter-99ce5",
      storageBucket: "kwitter-99ce5.appspot.com",
      messagingSenderId: "141424811104",
      appId: "1:141424811104:web:248da637f123b2b670b705"
    };
    
   
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
