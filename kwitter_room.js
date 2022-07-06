const firebaseConfig = {
      apiKey: "AIzaSyC6jVGGFaGPu_RfJdjBR5iWSY8hG9I9MEY",
      authDomain: "kwitter-d4827.firebaseapp.com",
      databaseURL: "https://kwitter-d4827-default-rtdb.firebaseio.com",
      projectId: "kwitter-d4827",
      storageBucket: "kwitter-d4827.appspot.com",
      messagingSenderId: "589105735",
      appId: "1:589105735:web:9479f9baa738c174ebbf62",
      measurementId: "G-NB2NJCB6YN"
    };

//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();

function logout() {

}

function addroom() {

}


