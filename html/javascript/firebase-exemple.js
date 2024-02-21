// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWSmkoQkF59YRZbdZHttQpI5icApa7MNo",
    authDomain: "markets-agent.firebaseapp.com",
    projectId: "markets-agent",
    storageBucket: "markets-agent.appspot.com",
    messagingSenderId: "964789920127",
    appId: "1:964789920127:web:7b3a3b6db531a9f5cffa4a",
    measurementId: "G-4KFP50HCJ9",
    databaseUrl: "https://console.firebase.google.com/project/markets-agent/database/markets-agent-default-rtdb/data"
};

// initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// initialize database
const database = getDatabase(app);