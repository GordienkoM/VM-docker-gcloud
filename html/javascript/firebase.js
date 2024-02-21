// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCqTlEoTaofj3081yB94dYV5Uv1lViXpRw",

  authDomain: "fluid-furnace-412810.firebaseapp.com",

  projectId: "fluid-furnace-412810",

  storageBucket: "fluid-furnace-412810.appspot.com",

  messagingSenderId: "335913192253",

  appId: "1:335913192253:web:ad93667d20ffa8b986d354",

  measurementId: "G-K3SLVQNNWN",

  databaseUrl:"https://fluid-furnace-412810-default-rtdb.europe-west1.firebasedatabase.app/"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// initialize database
const database = getDatabase(app);