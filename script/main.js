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



//Georgiana
//creating the weekly charts 
// 1: data
// Array of objects
let _data = [];

async function getData() {
  let response = await fetch("json/weeklydata.json");
  _data = await response.json();
  console.log(_data);
  appendChart();
};

getData();

// 2: prepare data for chart
// seperating the objects to arrays: dates and infected
// why? that's how chart.js reads the data :)
function prepareData(data) {
  // declaring two array to store the data 
  let day = [];
  let buckets = [];

  // looping through the data array
  for (const object of data) {
    // adding the values to the different arrays
    day.push(object.date);
    buckets.push(object.bucket);
  }
  // returning the two arrays inside and object
  // we cannot return to values - that's why we have to do it inside an array
  return {
    day,
    buckets
  };
}

// 3: create and append the chart
function appendChart() {
  // using prepareData() to get the excact data we want
  let data = prepareData(_data);
  //open the developer console to inspect the result
  console.log(data);
  let chartContainer = document.getElementById('chartContainer');
  let chart = new Chart(chartContainer, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
      labels: data.day, // refering to the data object, holding data from prepareData()
      datasets: [{
        barPercentage: 1.0,
        data: data.buckets, // refering to the data object, holding data from prepareData()
        label: 'Weekly buckets',
        borderWidth: 1,
        backgroundColor: '#69A42E', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
        borderColor: '#3F611C'
      }]
    },
    // Configuration options goes here
    // Go to the docs to find more: https://www.chartjs.org/docs/latest/
    options: {
      title: {

        display: true,
        text: 'Number of buckets of balls used'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },

        }]
      }
    }

  });
}

//Georgiana
//creating the monthly charts
// 1: data
// Array of objects
let _month = [];

async function getMonth() {
  let response = await fetch("json/monthlydata.json");
  _month = await response.json();
  console.log(_month);
  appendChar();
};

getMonth();

// 2: prepare data for chart
// seperating the objects to arrays: dates and infected
// why? that's how chart.js reads the data :)
function prepareMonth(month) {
  // declaring two array to store the data 
  let week = [];
  let buckets = [];

  // looping through the data array
  for (const object of month) {
    // adding the values to the different arrays
    week.push(object.weeks);
    buckets.push(object.bucket);
  }
  // returning the two arrays inside and object
  // we cannot return to values - that's why we have to do it inside an array
  return {
    week,
    buckets
  };
}

// 3: create and append the chart
function appendChar() {
  // using prepareData() to get the excact data we want
  let month = prepareMonth(_month);
  //open the developer console to inspect the result
  console.log(month);
  let chartContainer = document.getElementById('chart');
  let chart = new Chart(chartContainer, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
      labels: month.week, // refering to the data object, holding data from prepareData()
      datasets: [{
        barPercentage: 1.0,
        data: month.buckets, // refering to the data object, holding data from prepareData()
        label: 'Monthly buckets',
        borderWidth: 1,
        backgroundColor: '#69A42E', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
        borderColor: '#3F611C'
      }]
    },
    // Configuration options goes here
    // Go to the docs to find more: https://www.chartjs.org/docs/latest/
    options: {
      title: {

        display: true,
        text: 'Number of buckets of balls used'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },

        }]
      }
    }

  });
}

//Georgiana
//creating the yearly charts
// 1: data
// Array of objects
let _yea = [];

async function getYear() {
  let response = await fetch("json/yearlydata.json");
  _yea = await response.json();
  console.log(_yea);
  appendCha();
};

getYear();

// 2: prepare data for chart
// seperating the objects to arrays: dates and infected
// why? that's how chart.js reads the data :)
function prepareYear(Year) {
  // declaring two array to store the data 
  let month = [];
  let buckets = [];

  // looping through the data array
  for (const object of Year) {
    // adding the values to the different arrays
    month.push(object.months);
    buckets.push(object.bucket);
  }
  // returning the two arrays inside and object
  // we cannot return to values - that's why we have to do it inside an array
  return {
    month,
    buckets
  };
}

// 3: create and append the chart
function appendCha() {
  // using prepareData() to get the excact data we want
  let year = prepareYear(_yea);
  //open the developer console to inspect the result
  console.log(year);
  let chartContainer = document.getElementById('chrt');
  let chart = new Chart(chartContainer, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
      labels: year.month, // refering to the data object, holding data from prepareData()
      datasets: [{
        barPercentage: 1.0,
        data: year.buckets, // refering to the data object, holding data from prepareData()
        label: 'Yearly buckets',
        borderWidth: 1,
        backgroundColor: '#69A42E', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
        borderColor: '#3F611C'
      }]
    },
    // Configuration options goes here
    // Go to the docs to find more: https://www.chartjs.org/docs/latest/
    options: {
      title: {

        display: true,
        text: 'Number of buckets of balls used'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },

        }]
      }
    }

  });
}

//code done thanks to Rasmus Cederdorff
//Georgiana
function showChart(id) {
  //hide all charts
  let charts = document.querySelectorAll("#charts section");
  for (const chart of charts) {
    chart.style.display = "none";
  }
  // show chart with the given id 
  document.querySelector(`#${id}`).style.display = "block";
}
// call the function with the id of the chart wanted to display by default
showChart("wkl");

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


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAhjjDKhZATV5Odh7rWjnp09glrSZ43Cy0",
  authDomain: "rd-sem-final.firebaseapp.com",
  databaseURL: "https://rd-sem-final-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rd-sem-final",
  storageBucket: "rd-sem-final.appspot.com",
  messagingSenderId: "538172461184",
  appId: "1:538172461184:web:e812a005825b62c2849665",
  measurementId: "G-QLMYFHNQ4D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const auth = firebase.auth();



function signIn() {
  let email = document.querySelector("#signUpEmail").value;
  let password = document.querySelector("#signUpPassw").value;
  alert(`${email} signed in!`);
  let CUser = auth.currentUser;
  auth.signInWithEmailAndPassword(email, password);
  
  
  

  
}

function signOut() {
  auth.signOut();
  alert("User Signed out");
}

function sendFeedback()
{
  let feedbacks = [];
 let message = document.querySelector("#feedb").value

 feedbacks.push(message);

 

}

function appendReg()
{
  let htmltempl = `<section id="signUpContainer">
  <img src="/img/Logo.png" class="auth-logo">

  <form>
      <input autocomplete="email" id="signUpEmail" type="email" placeholder="Email">
      <input autocomplete="current-password" id="signUpPassw" type="password" placeholder="Password">
      <input id="texxt" type="text" placeholder="valami">

      <button onclick="signUp(); appendLog()">sign up</button>
  </form>
</section>`;

document.querySelector(".function_buttons").innerHTML = htmltempl;
}
function appendHome()
{
  let htmltempl = `<button class="function_button collapsible">
  <h1 class="function_name">Add buckets</h1>
  <img class="icon" src="./media/bucket.png">
</button>
<div class="content">
  <div id="time"></div>
  <h1 class="counter-display">(..)</h1>
  <h5 class="buckets_used">buckets used</h5>
  <img src="./media/bucket-icon.png" class="bucket-icon">
  <button class="counter counter-plus" onclick="submitThis()">ADD BUCKET</button>
  <button class="counter counter-minus" onclick="submitThis()">DELETE BUCKET</button>
</div>
<button class="function_button collapsible">
  <h1 class="function_name">Upcoming events</h1>
  <img class="icon_small" src="./media/callendar.png">
</button>
<div class="content">
  <section id="calendarContainer">
      <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%236cc073&amp;ctz=Europe%2FBudapest&amp;src=d3JpdGVhbmVtYWlsdG9kYXZpZEBnbWFpbC5jb20&amp;src=NWhwbnF2bjNoMnZiY3JobGxyN29jdGRvMnVkcWZrbW5AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23039BE5&amp;color=%237CB342&amp;showTitle=0&amp;title=Events&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=0&amp;hl=en_GB&amp;showNav=0&amp;showDate=1"
          style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>

  </section>
</div>
<button class="function_button collapsible" onclick="getData();">
  <h1 class="function_name">My buckets history</h1>
  <img class="icon" src="./media/chart.png">
</button>
<div class="content1">
  <section id="charts">
      <section id="wkl">
          <canvas id="chartContainer"></canvas>
          <h1 class="dt">10-17 November 2020</h1>
      </section>
      <section id="mnt">
          <canvas id="chart"></canvas>
          <h1 class="dt">November 2020</h1>
      </section>
      <section id="yrl">
          <canvas id="chrt"></canvas>
          <h1 class="dt">2020</h1>
      </section>
      <div class="btn-group">
          <button onclick="showChart('wkl')" class="bttn">Weekly</button>
          <button onclick="showChart('mnt')" class="bttn">Monthly</button>
          <button onclick="showChart('yrl')" class="bttn">Yearly</button>
      </div>`;

document.querySelector(".function_buttons").innerHTML = htmltempl;
}
function appendLog()
{
  document.querySelector(".menu-btn").checked = false;
  let htmltempl = `<section id="signUpContainer">
  <img src="/img/Logo.png" class="auth-logo">

  <form>
      <input autocomplete="email" id="signUpEmail" type="email" placeholder="Email">
      <input autocomplete="current-password" id="signUpPassw" type="password" placeholder="Password">
      <!-- <input id="signUpPassword2" type="password" placeholder="Password"> -->
      <button onclick="appendHome(); signIn()">sign in</button>
      <p onclick="appendReg()">not registered? sign up <u>here</u></p>
  </form>
</section>`;

document.querySelector(".function_buttons").innerHTML = htmltempl;
}

function signUp() {
  let email = document.querySelector("#signUpEmail").value;
  let password = document.querySelector("#signUpPassw").value;
  let texxt = document.querySelector("#texxt").value;
    

  auth.createUserWithEmailAndPassword(email, password)
  // .then(cred =>{
  //   return db.collection('users').doc(cred.user.uid).set({
  //     text: texxt
  //   });
  // })
  // alert(user.uid);
}


// add buckets to firebase

let counterSubmit = document.querySelector('.counter');
function submitThis() {
  db.collection("user").doc(buckets).set({
    date: n,
    number: count + 1,
  })
    .then(function () {
      console.log(count);
    });
}
