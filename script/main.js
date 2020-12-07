"use strict";




  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAhjjDKhZATV5Odh7rWjnp09glrSZ43Cy0",
    authDomain: "rd-sem-final.firebaseapp.com",
    projectId: "rd-sem-final",
    storageBucket: "rd-sem-final.appspot.com",
    messagingSenderId: "538172461184",
    appId: "1:538172461184:web:e812a005825b62c2849665",
    measurementId: "G-QLMYFHNQ4D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();

  


function signIn ()
{
   let email = document.querySelector("#signUpEmail").value;
   let password = document.querySelector("#signUpPassword").value;

   auth.signInWithEmailAndPassword(email, password);
   alert("User Logged in");
}

function signOut ()
{
   auth.signOut();
   alert("User Signed out");
}

function signUp()
{
   let email = document.querySelector("#signUpEmail").value;
   let password = document.querySelector("#signUpPassw").value;

   auth.createUserWithEmailAndPassword(email, password);
   alert("User Created");
  
}