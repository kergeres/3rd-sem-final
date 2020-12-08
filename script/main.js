
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

// add bucket to firebase - option 1

// We save our button element into a variable
const btn = counterPlusElem;
// We save our counter element into a variable
const counterID = counterDisplayElem;

// Let's save our Firebase Realtime DB URL into a variable
const firebase = "https://rd-sem-final-default-rtdb.europe-west1.firebasedatabase.app/";

// Because we are fetching the current counter state from a Database,
// We don't need to start the counter at 0. 
// let counter = 0;

// We want to fetch and display the current state
// of the counter every time someone visits our website.
function get() {
   // We want the data from the child we created, so let's concat it into our URL
   // Note that every endpoint needs .json at the end!
   axios.get(firebase + "my-online-counter.json").then((response) => {
      // Once the connection made to the Database, we can use the reponse to update the counter
      counter = response.data.counter;
      // Once the coutner updated, we can display the current counter state.
      updateCounter();
   });
}
// We start our counter at 0
let counter = 0;

// Everytime a user click on the button, we will call this function to display the counter
function updateCounter() {
   counterID.innerHTML = `${counter} visitors clicked on this button`;
}

// Everytime a user clicks on the button, we will increment the counter by one.
btn.addEventListener("click", function (e) {
   counter++;
   updateCounter();
});

// Everytime a user clicks on the button, 
// we want to Update the counter into the database
btn.addEventListener("click", function (e) {
   axios
      // First, we need to reach our DB
      .put(firebase + "my-online-counter.json", {
         // Then, we needs to specify the new data for my-online-counter
         // In our case, we simply increment the counter into the DB by one.
         counter: counter + 1
      })
      .then(() => {
         // Once it's done, we call the get() function again. 
         //To display the updated counter.
         get();
      })
      // If there is an error, we can log it.
      .catch((error) => console.log(error));
});

get();

// add bucket to firebase - option 2

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
