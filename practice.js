const firebaseConfig = 
{
  apiKey: "AIzaSyCHHUCQlfJ532a_LZKfaSUmb_KZrLngoTk",
  authDomain: "projeto-42-2b993.firebaseapp.com",
  databaseURL: "https://projeto-42-2b993-default-rtdb.firebaseio.com",
  projectId: "projeto-42-2b993",
  storageBucket: "projeto-42-2b993.appspot.com",
  messagingSenderId: "321970097754",
  appId: "1:321970097754:web:e7bdf2612ebde88cc0d263"
};

firebase.initializeApp(firebaseConfig);

function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adding user"
  });
}













