
// home

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
         content.style.display = "none";
      } else {
         content.style.display = "block";
      }
   });
}

// date 
const monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
];

n = new Date();
y = n.getFullYear();
m = monthNames[n.getMonth()];
d = n.getDate();
document.getElementById("time").innerHTML = d + " " + m + " " + y;

// buckets counter 
let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click", () => {
   count++;
   updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
   count--;
   updateDisplay();
});

function updateDisplay() {
   counterDisplayElem.innerHTML = count;
};

// add bucket to firebase

const db = firebase.firestore();

const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FIeldValue.increment(-1);

const storyRef = db.collection('buckets').doc('buckets_counter');

storyRef.update({ count: increment });

storyRef.update({ count: decrement });

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




function signIn() {
   let email = document.querySelector("#signUpEmail").value;
   let password = document.querySelector("#signUpPassw").value;

   auth.signInWithEmailAndPassword(email, password);
   alert("User Logged in");
}

function signOut() {
   auth.signOut();
   alert("User Signed out");
}

function signUp() {
   let email = document.querySelector("#signUpEmail").value;
   let password = document.querySelector("#signUpPassw").value;

   auth.createUserWithEmailAndPassword(email, password);
   alert("User Created");
}
