import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
// TODO: Add Firebase SDKs from https://firebase.google.com/docs/web/setup#available-libraries

/**
 * The Firebase configuration. Required to access Firebase.
 */
const firebaseConfig = {
    apiKey: "AIzaSyCZimK4UGJoAaR3AI5xmzlGu7krKDNgpGI",
    authDomain: "thumbtack-505c2.firebaseapp.com",
    projectId: "thumbtack-505c2",
    storageBucket: "thumbtack-505c2.firebasestorage.app",
    messagingSenderId: "68341187046",
    appId: "1:68341187046:web:5b9c90f5e58f3413fdd627",
    measurementId: "G-6EZW23E9LY" // "Optional", but Google put this here for me, so it stays
};

/**
 * The Firebase app.
 */
const app = initializeApp(firebaseConfig);