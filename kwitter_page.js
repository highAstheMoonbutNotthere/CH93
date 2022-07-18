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

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("roomname");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function back() {
      localStorage.removeItem("roomname");
      window.location = "kwitter_room.html";
}

function send() {
      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });
      document.getElementById("message").value="";
}

