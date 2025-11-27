// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZgo0O4FFg9IQ7ZMOqUskL6uMrP-yHo6M",
    authDomain: "netflixgpt-5c6e6.firebaseapp.com",
    projectId: "netflixgpt-5c6e6",
    storageBucket: "netflixgpt-5c6e6.firebasestorage.app",
    messagingSenderId: "581754041328",
    appId: "1:581754041328:web:90d8fe3768183cb7546335",
    measurementId: "G-MCFW4P1MX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();